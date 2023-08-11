import Producto from '../Card'
import Footer from '../Footer'
import Navbar from '../Navbar'
import {producto} from "../Productos"
import '../module-style-pages.css'
import Buscador from '../Buscador'

function Tienda() {
return (
<>
    <Navbar/>
    <div className='container-tienda'>
        <h1 className='titleVentas'>Lista de Productos</h1>
        <Buscador/>
        <section className='Listas'>
        {producto.electronica.map((producto, index) => {
        return <Producto producto={producto} key={index} />
        })}
    </section>
    </div>
    <Footer/>
</>
)
}

export default Tienda