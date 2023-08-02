import { routes } from "../Routes"
import { Link } from "react-router-dom"
import logoM from '../assets/logoM.jpeg'
import './Nav.css'
import React,{useState} from "react"
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="container-navbar">
      <div className='logo-container'>
      <img src={logoM} alt="logo-portada" />
      <h1>Misiotrónica</h1>
      </div>
      <div className={`container-nav-item ${isOpen && "open"}`}>
      <Link  to={routes.home}>Inicio</Link>
      <Link  to={routes.tienda}>Tienda</Link>
      <Link  to={routes.nosotros}>Sobre Nosotros</Link>
      <Link  to={routes.contacto}>Contacto </Link>
      </div>
      <div className={`nav-toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </header>
  )
}

export default Navbar