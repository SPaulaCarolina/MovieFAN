import swAlert from "@sweetalert/with-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

function Detail() {
    let token = sessionStorage.getItem('token')

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')

    const [movie, setMovie] = useState(null)
    
    useEffect (() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ff5a58eee969df72fea087a6c2d04059&language=es-ES`;
        axios.get(endPoint)
            .then(res => {
                const movieData = res.data
                setMovie(movieData)
            })
            .catch(err => {
                swAlert(<h2>Se produjo un error. Reintente mas tarde.</h2>)
            })
    }, [movieID])
  return (
    <>
        <Header />
        { !token && <Navigate to="/" /> }
        { !movie && <p>Cargando...</p>}
        { movie && 
        <>
            <div className="row">
                <h1 className="text-center">{movie.title}</h1>
                <div className="d-flex flex-row">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="..." />
                <div className="col-6">
                    <h3>{movie.release_date} | {movie.popularity} <i className="fa-solid fa-star" /></h3>
                    <p>{movie.overview}</p>
                    <div>
                        {movie.genres.map(oneGenre => <span> {oneGenre.name} </span>)}
                    </div>
                </div>
                </div>

            </div>
            
        </>
        }
        
    </>
  )
}

export default Detail