import { routes } from "../Routes"
import { Link } from "react-router-dom"
import logoM from '../assets/logoM.jpeg'
import './Nav.css'

const Navbar = () => {
  return (
    <header className="container-navbar">
      <div className='logo-container'>
      <img src={logoM} alt="logo-portada" />
      <h1>Misiotrónica</h1>
      </div>
      <div className="container-nav ">
      <Link  to={routes.home}>Inicio</Link>
      <Link  to={routes.tienda}>Tienda</Link>
      <Link  to={routes.nosotros}>Sobre Nosotros</Link>
      <Link  to={routes.contacto}>Contacto </Link>
      </div>
    </header>
  )
}

export default Navbar