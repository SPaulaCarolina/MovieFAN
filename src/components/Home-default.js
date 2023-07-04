//Libraries
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail"
import Footer from "./components/Footer";

//Styles
import "./css/app.css"

function HomeDefault() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/detail" element={ <Detail /> } />
      </Routes>
      <Footer /> 
    </>
  );
}

export default HomeDefault;
