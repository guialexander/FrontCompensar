import { NavLink } from "react-router-dom"
import './welcome.css'

const Welcome = () => {
  return (
    <>
        <div className="welcome">
        <h1>Bienvenido</h1>
        <h2>Ingresa y disfruta</h2>
        <p>Si aún no tienes una cuenta</p>
        <p>Puedes  <NavLink to='/register'> Registrate aquí!</NavLink></p>
        </div>


    </>
  )
}

export default Welcome
