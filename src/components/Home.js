import { Link, Navigate } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    let token = localStorage.getItem('token');

    return (
        <>
        {!token && <Navigate to="/" />}
        <Header /> 
        <div className="card-group">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">movie title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to="" className="btn btn-primary">Ver pelicula</Link>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">movie title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to="" className="btn btn-info">Ver pelicula</Link>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">movie title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to="" className="btn btn-primary">Ver pelicula</Link>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">movie title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to="" className="btn btn-primary">Ver pelicula</Link>
                </div>
            </div>
        </div>

        <Footer />
        </>
            
    )
}

export default Home