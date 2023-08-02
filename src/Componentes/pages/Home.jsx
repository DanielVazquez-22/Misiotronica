import Footer from '../Footer'
import Navbar from '../Navbar'
import {Outlet} from 'react-router-dom'
import fondoM from "./logoM1.jpg"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      <div>
      <img className='logo-portada' src={fondoM} alt="img" />
      <h1>En MISIOTRÓNICA encontras todo lo que necesitas...</h1>
      </div>
    <Footer/>
    </>
  )
}

export default Home