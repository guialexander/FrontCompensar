import React from 'react'
import '../home/home.css';
import { NavLink } from "react-router-dom"
import saly from '../../../public/Saly-14.png';
import Register from '../../components/register/Register';

const Homeregister = () => {
  return (
    <>
    <div className="home">
      <div className="home_main">
        <div className="home_main_welcome">
        <div className="welcome">
        <h1>Registrate</h1>
        <h2>Te invitamos a crear</h2>
        <h2>Tu cuenta</h2>
        <p>Si ya tienes una cuenta</p>
        <p>Puedes  <NavLink to='/'> Iniciar sesión aquí!</NavLink></p>
        </div>
        <div className="home_main_image">
        <img src={saly} alt="saly-14" />
        </div>
        </div>


     <Register/>

    </div>
    </div>
    </>
  )
}

export default Homeregister
