import Footer from "../Footer"
import Navbar from "../Navbar"

function Contacto() {
  return (
    <>
    <Navbar/>
      <form className='formulario' action="">
        <h2>Por favor complete el formulario para dejar su consulta o comentario.</h2>
        <input type="text" placeholder='Nombre y Apellido'/>
        <input type="email" placeholder='Correo' />
        <input type="tel" placeholder='Telefono Ej: 351-1234567'/>
        <textarea name="descripcion-form" id="" cols="20" rows="10" placeholder='Dejanos tu consulta aqui...'></textarea>
        <input type="button" value="Enviar" />
      </form>
    <Footer/>
    </>
  )
}

export default Contacto