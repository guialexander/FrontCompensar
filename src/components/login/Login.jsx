import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import redes from '../../../public/redes.png';


const Login = () => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: '',
      };

    const [user, setUser] = useState(initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Enviando test")
        navigate('/survey');

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value,
        });
        console.log(user)
      };



  return (
    <>


    <form action='' onSubmit={handleSubmit}>
        <div className='container__login--form'>
        <h1>Iniciar Sesión</h1>
          <input
            type='email'
            name='email'
            className='container__login--input'
            placeholder='email o nombre del usuario'
            onChange={handleChange}
            value={user.email}
            required
          />

          <input
            type='password'
            name='password'
            className='container__login--input'
            placeholder='Contraseña'
            onChange={handleChange}
            value={user.password}
            required
          />
          <div className="container__login--pass">
            <p>Olvide mi Contraseña</p>
          </div>

<button type='submit' className='container__login--button'>
          Iniciar sesión
        </button>
        <div className='container__login--fire'>
          <a href='' className='container__login--a'>
           o continúa con
          </a>

          <div className="container__login--image">
         <img src={redes} alt=""/>
        </div>

        </div>

        </div>

      </form>
    </>
  )
}

export default Login
