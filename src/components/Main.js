import { Navigate } from "react-router-dom";

import Header from './Header';
import MoviesList from './MoviesList';

export default function Main() {

  let token = sessionStorage.getItem('token');

  return (
    <>
      { !token && <Navigate to="/" /> }
        <Header />
        <MoviesList />
    </>
  )
}
