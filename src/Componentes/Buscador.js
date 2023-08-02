import React, {useState} from 'react';
import {producto} from './Productos'

const Buscador = () => {
    const [ search, setSearch ]= useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
        /* filtrar(e.target.value) */
    };

    /* const filtrar = producto.filtrar ((producto) => {
        if (producto.electronica.productoName.toUpperCase( ).includes (search.toUpperCase( ))) {
        return true;
        }
        return false;
        }); */

  return (
        <form className='container-buscador'>
            <input 
            type="text" 
            placeholder="Buscar..."
            autoComplete='off'
            name='search'
            value={search}
            onChange={handleChange}
            />
            <button type='submit' className='btn-buscador'>🔎</button>
        </form>
    
  )
}

export default Buscador