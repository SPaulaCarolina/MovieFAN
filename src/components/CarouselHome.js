import axios from 'axios';
import { swAlert } from '@sweetalert/with-react';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselHome() {
  /*
  const [movieList, setMovieList] = useState([]);

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
  */
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/logo-moviefan.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/logo-moviefan.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/logo-moviefan.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;