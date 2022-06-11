import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="container-fluid">
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img
                    alt="logo"
                    src="/assets/images/logo-moviefan.png"
                    width="400"
                    className="d-inline-block align-top"
                />
                <div className="col-6 navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">PELICULAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">PELICULAS</Link>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0 mr-1">
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Search</button>
                 </form>
                 <div className="col-1 navbar-collapse" >
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ME
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Mis datos</Link>
                                <Link className="dropdown-item" to="#">Mis favoritos</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">Configuracion</Link>
                            </div>
                        </div>
                </div>
            </nav>
        </div>
                
    </header>
  )
}

export default Header