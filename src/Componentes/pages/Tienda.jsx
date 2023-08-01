import Producto from '../Card'
import {producto} from "../Productos"
import '../module-style-pages.css'

function Tienda() {
    return (
    <div className='container-tienda'>
    <h1 className='titleVentas'>Lista de Productos</h1>
    <section className='Listas'>
    {producto.fire.map((producto, index) => {
        return <Producto producto={producto} key={index} />
    })}
    </section>
    </div>
)
}

export default Tienda