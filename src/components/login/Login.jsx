import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import redes from '../../../public/redes.png';
import Swal from 'sweetalert2';
//http://localhost:8080
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/auth/local/login`;

const Login = () => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: '',
      };

    const [user, setUser] = useState(initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          };

          const response = await fetch(url, options);
          const data = await response.json();

          if(response.status === 200){
          localStorage.setItem('dataUser', JSON.stringify(data));
          Swal.fire({
            icon: 'info',
            title: 'Ingresaste correctamente',

          });
          navigate('/survey');
          setUser(initialState);
        } else{
          Swal.fire({
            icon: 'info',
            title: 'Error de Contraseña ó email',
            text: 'Intenta Nuevamente.',
          });
          navigate('/');
        }


        } catch (error) {
          console.log(error);
        }


    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value,
        });
        //console.log(user)
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
