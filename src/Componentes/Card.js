import React from 'react'
import './Card.css'

function Card({producto}) {
  return (
    <>
    <div className="container-card">
        <h2>{producto.productoName}</h2> 
        <img src={producto.img} alt={producto.img} />
        <h3>Precio {producto.precio}</h3>
        <p><i>Descripcion:</i> {producto.descripcion}</p>
        <button className='btn-comprar'>Comprar</button>
    </div>
    </>
)
}

export default Card