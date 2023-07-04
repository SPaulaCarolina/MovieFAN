import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BiCameraMovie, BiFilterAlt } from 'react-icons/bi'

function Header() {
  return (
    <header className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <img
            alt="logo"
            src="/assets/images/logo-moviefan.png"
            className="d-inline-block align-top logo"
          />
          <div className="col-6 navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home"><AiFillHome className="i-home" alt="Home" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#"><BiCameraMovie className="i-home" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#"><BiFilterAlt className="i-home" /></Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row col-2">
            <input className="form-control m-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn m-1" type="submit"><AiOutlineSearch className="i-home"/></button>
          </div>
          <div className="col-2 navbar-collapse m-2" >
            <div className="nav-item dropdown">
              <Link to="/" ><VscAccount className="i-home" /></Link>
              { /*<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Mis datos</Link>
                <Link className="dropdown-item" to="#">Mis favoritos</Link>
                <Link className="dropdown-item" to="#">Configuracion</Link>
              </div>*/ }
            </div>
          </div>
        </nav>
      </div>            
    </header>
  )
}

export default Header