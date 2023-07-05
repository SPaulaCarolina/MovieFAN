//Libraries
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Login from "./components/Login";
import Main from "./components/Main";
import Detail from "./components/Detail"
//Styles
import "./css/App.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/home" element={ <Main /> } />
        <Route path="/detail" element={ <Detail /> } />
      </Routes>
    </>
  );
}

export default App;
