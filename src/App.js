//Libraries
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Login from "./components/Login";
import Home from "./components/Home";
//Styles
import "./css/app.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes> 
    </>
  );
}

export default App;
