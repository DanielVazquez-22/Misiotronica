import React from 'react'


function Contacto() {
  return (
    <div>
      <form className='formulario' action="">
        <h1>Contacto</h1>
        <input type="text" placeholder='Nombre y Apellido'/>
        <input type="email" placeholder='Correo' />
        <input type="tel" placeholder='Telefono Ej: 351-1234567'/>
        <textarea name="descripcion-form" id="" cols="20" rows="10" placeholder='Dejanos tu consulta...'></textarea>
        <input type="button" value="Enviar" />
      </form>
    </div>
  )
}

export default Contacto