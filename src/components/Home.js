import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
import swAlert from '@sweetalert/with-react';
import axios from "axios";
import CarouselHome from "./CarouselHome";


function Home() {
    let token = sessionStorage.getItem('token');

    const [movieList, setMovieList] = useState([]);
    console.log(movieList)

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=ff5a58eee969df72fea087a6c2d04059'
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data
                setMovieList(apiData.results)
            })
            .catch(err => {
                swAlert(<h2>Se produjo un error. Reintente mas tarde.</h2>)
            })
    }, [setMovieList]);

    return (
        <>
            { !token && <Navigate to="/" /> }
            <Header />
            <div className="row col-12 justify-content-around">
                <CarouselHome movieList={movieList} />
                {
                    movieList.map((oneMovie, idx) => {
                        return (
                            <div className="card col-3 mt-5 m-1 p-1" key={idx} style={{width: "20rem"}} >
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0,200)}. <Link to="" >Ver mas...</Link></p>
                                    <Link to={`/detail?movieID=${oneMovie.id}`} className="btn btn-primary">Ver pelicula</Link>
                                </div>
                            </div>
                        )
                    })
                }          
            </div>
        </>            
    )
}

export default Home