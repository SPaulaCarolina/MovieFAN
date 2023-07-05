import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import swAlert from '@sweetalert/with-react';
import axios from "axios";
import YouTube from 'react-youtube';
import { AiOutlineSearch } from 'react-icons/ai';

function MoviesList() {
  // Const
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'ff5a58eee969df72fea087a6c2d04059';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // useState
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  const getMovies = async(searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
          api_key: API_KEY,
          query: searchKey
      }
    });

    setMovies(results);
    setMovie(results[0]);

    if(results.length) {
      await getMovie(results[0].id);
    }
  };

  const getMovie = async(id) => {
    const {data} = await axios.get(`${API_URL}/movie${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos"
      }
    });

    if(data.videos && data.videos.results) {
      const trailer = data.videos.results.find( vid => vid.name === "Official Trailer");
      setTrailer( trailer ? trailer : data.videos.results[0] )
    }
    setMovie(data);
  }

  const selectMovie = async(movie) => {
    getMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0,0)
  };

  const searchMovies = (e) => {
    e.preventDefault();
    getMovies(searchKey)
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <main>
        {movie ? (
          <div
            className="viewtrailer"
            style={{ backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`}}
          >
            {playing ? (
              <>
                <YouTube
                  videoId={trailer.key}
                  className="reproductor container"
                  containerClassName={"youtube-container amru"}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
                <button onClick={() => setPlaying(false)} className="button">
                  Close
                </button>
              </>
            ) : (
              <div className="container">
                <div className="">
                  {trailer ? (
                    <button
                      className="boton"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  ) : (
                    "Sorry, no trailer available"
                  )}
                  <h1 className="text-white">{movie.title}</h1>
                  <p className="text-white">{movie.overview}</p>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </main>
      <div>
        <form className="d-flex flex-row col-2" onSubmit={searchMovies}>
          <input className="form-control m-1" type="text" placeholder="Search" aria-label="Search" onChange={ (e) => setSearchKey(e.target.value) } />
          <button className="btn m-1"><AiOutlineSearch className="i-home"/></button>
        </form>
      </div>
      <div className="row col-12 justify-content-around">
        {
          movies.map((movie) => {
            return (
              <div className="card col-3 mt-5 m-1 p-1 bg-dark" key={movie.id} style={{width: "20rem"}} >
                <img src={`${URL_IMAGE + movie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Link to={`/detail?movieID=${movie.id}`} className="btn btn-info m-1">Ver info</Link>
                  <button className="btn btn-info m-1" onClick={ () => selectMovie(movie) }>Ver pelicula</button>
                </div>
              </div>
            )
          })
        }          
      </div>
    </>            
  )
}

export default MoviesList;