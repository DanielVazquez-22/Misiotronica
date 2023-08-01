import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Componentes/pages/Home';
import Tienda from './Componentes/pages/Tienda';
import Contacto from './Componentes/pages/Contacto'
import SobreNosotros from './Componentes/pages/SobreNosotros';
import { routes } from './Routes';
function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />}>
          <Route path={routes.tienda} element={<Tienda/>}/>
          <Route path={routes.contacto} element={<Contacto/>}/>
          <Route path={routes.nosotros} element={<SobreNosotros/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
