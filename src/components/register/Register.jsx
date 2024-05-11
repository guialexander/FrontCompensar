import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './register.css';
import redes from '../../../public/redes.png';


const Register = () => {
  //http://localhost:8080/api/users

 const BASE_URL = import.meta.env.VITE_API_URL;
 const url = `${BASE_URL}/api/users`;

    const navigate = useNavigate();

    const initialState = {
      name: '',
      phone: '',
      email: '',
      password: '',
    };
    const initialconfirm = {
      passConfirme: '',
    };


    const [user, setUser] = useState(initialState);
    const [confirmPasword, setConfirmPasword] = useState(initialconfirm);
    const [error, setError] = useState({});

    const handleChangepassword = (event) => {
      const { name, value } = event.target;
      setConfirmPasword({
        ...confirmPasword,
        [name]: value,
      });

      validateForm(event);
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({
        ...user,
        [name]: value,
      });
      validateForm(event);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const isValid = validateForm();
      console.log(isValid);
      if (isValid) {
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
          console.log(data);
          Swal.fire({
            icon: 'info',
            title: 'Creación del usuario OK',
            text: 'recordar las credenciales',
          });
          navigate('/survey');
        } catch (error) {
          console.log(error);
        }
        setUser(initialState);
        setConfirmPasword(initialconfirm);
      } else {
        Swal.fire('Contraseña No es Igual');
      }
    };

    const validateForm = () => {
      const { password } = user;
      const { passConfirme } = confirmPasword;
      const error = {};
      if (password !== passConfirme) {
        error.passConfirme = 'Passwords do not match';
      }
      setError(error);
      return Object.keys(error).length === 0;
    };


  return (
    <form action='' onSubmit={handleSubmit}>
    <div className='container__login--form'>
    <h1>Registro</h1>
      <input
        type='email'
        name='email'
        className='container__login--input'
        placeholder='Email'
        onChange={handleChange}
        value={user.email}
        required
      />
        <input
        type='name'
        name='name'
        className='container__login--input'
        placeholder='Nombre de usuario'
        onChange={handleChange}
        value={user.name}
        required
      />
        <input
        type='phone'
        name='phone'
        className='container__login--input'
        placeholder='Numero de telefono'
        onChange={handleChange}
        value={user.phone}
        required
      />
        <input
        type='password'
        name='password'
        className='container__login--input'
        placeholder='Contraseña'
        onChange={handleChange}
        value={user.password}
        minLength={5}
        required
        onBlur={validateForm}
      />

      <input
        type='password'
        name='passConfirme'
        className='container__login--input'
        placeholder='Confirmar Contraseña'
        onChange={handleChangepassword}
        value={confirmPasword.passConfirme}
        minLength={5}
        required
        onBlur={validateForm}
      />


<button type='submit' className='container__login--button'>
      Registrarte
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
  )
}

export default Register

