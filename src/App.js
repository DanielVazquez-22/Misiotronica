import './App.css';
import Nav from './Componentes/Nav';
import Ventas from './Componentes/Ventas';
import Contacto from './Componentes/Contacto'
import SobreNosotros from './Componentes/SobreNosotros';

function App() {
  return (
    <>
    <header>
    <Nav/>
    </header>
    <main className='contenedor'>
      <Ventas/>
      <Contacto/>
      <SobreNosotros/>
    </main>
    </>
  );
}

export default App;
