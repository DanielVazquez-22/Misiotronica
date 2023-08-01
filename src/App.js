import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './Componentes/pages/Home';
import Tienda from './Componentes/pages/Tienda';
import Contacto from './Componentes/pages/Contacto'
import SobreNosotros from './Componentes/pages/SobreNosotros';
import { routes } from './Routes';
import NotFound from './Componentes/pages/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />}>
          <Route path={routes.tienda} element={<Tienda/>}/>
          <Route path={routes.contacto} element={<Contacto/>}/>
          <Route path={routes.nosotros} element={<SobreNosotros/>}/>
          <Route path={routes.notfound} element={<NotFound/>}/>
          <Route path='*' element={<Navigate to='/not_found'/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
