import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from "react-router-dom";
//Styles
import '../css/app.css'

const Login = () => {
    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(email === '' || password === '') {
            swAlert( <h2>Los campos no pueden estar vacios.</h2> );
            return;
        }
        if(email !== '' && !regexEmail.test(email)) {
            swAlert( <h2>Ingresa una direccion de correo válida.</h2> );
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert( <h2>Los datos ingresados son inválidos.</h2> );
            return;
        } 

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const setToken = res.data.token;
                localStorage.setItem('token', setToken)
                navigate('/home')
            })
        
            
    }
    let token = localStorage.getItem('token');
    
    return (
    <>
        {token && <Navigate to="/home" />}
        <video autoPlay muted width="100%" height="100%" className="portada">
            <source src="/assets/videos/cuenta-regresiva.mp4" type="video/mp4" codecs="avc1,mp4a" />
        </video> 
        <div className="col-6 formContainer">    
            <img
                alt="logo"
                src="/assets/images/logo-moviefan.png"
                width="400"
                className="d-inline-block align-center"
            />
            <h2 className='login-title'>INGRESA A TU CUENTA:</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Correo electronico:</label>
                    <input type="text" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Contraseña:</label>
                    <input type="password" name="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary m-1">INGRESAR</button>
                <span> ¿No tienes una cuenta? Create una aqui.</span>
            </form>
        </div>
    </>
  )
}

export default Login