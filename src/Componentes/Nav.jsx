import React from 'react'
import './Nav.css'
import logoM from '../assets/logoM.jpeg'

function Nav() {
  return (
    <div className='contenedorNav'>
      <div className='logo'>
      <img src={logoM} alt="Logotipo" />
      <h1>Misiotrónica</h1>
      </div>
      <div>
      <a className='indiceNav' href="Inicio">Inicio</a>
      <a className='indiceNav' href="Ventas">Ventas</a>
      <a className='indiceNav' href="Sobre Nosotros">Sobre Nosotros </a>
      <a className='indiceNav' href="Contacto">Contacto </a>
      </div>
    </div>
  )
}

export default Nav