import React from 'react'
import './style.css'
import {producto} from "./Productos"

function Producto({producto}) {
  return (
    <>
    <div className="producto-card">
        <h2>{producto.productoName}</h2> 
        <img src={producto.avatar} alt={producto.avatar} />
        <h3>Precio {producto.precio}</h3>
        <p><i>Descripcion:</i> {producto.descripcion}</p>
    </div>
    </>
)
}

export default Producto