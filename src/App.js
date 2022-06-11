//Libraries
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail"
//Styles
import "./css/app.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/detail" element={ <Detail /> } />
      </Routes> 
    </>
  );
}

export default App;
