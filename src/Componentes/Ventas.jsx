import React from 'react'
import Producto from './Producto'
import {producto} from "./Productos"
import "./style.css"
import fondoM3 from '../assets/fondoM3.png'

function Ventas() {
    return (
    <>
    <div className='fondoM'>
    <img src={fondoM3} alt="Logotipo"/>
    </div>
    <h1 className='titleVentas'>Lista de Productos</h1>
    <section className='Listas'>
    {producto.fire.map((producto, index) => {
        return <Producto producto={producto} key={index} />
    })}
    </section>
    </>
)
}

export default Ventas