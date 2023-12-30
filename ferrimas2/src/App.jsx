import './App.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Intro from './Pages/Intro/Intro';
import PoliticaPrivacidad from './Pages/PoliticaPrivacidad/PoliticaPrivacidad';
import PoliticaCookies from './Pages/PoliticaCookies/PoliticaCookies';
import AvisoLegal from './Pages/AvisoLegal/AvisoLegal';
import Contacto from './components/Contacto/Contacto';
import Tienda from './Pages/Tienda/Tienda';
// import Testeo1 from './components/Testeos/Testeo1';
import Herramientas from './Pages/Herramientas/Herramientas';
import Iluminacion from './Pages/Iluminacion/Iluminacion';
import Aceites from './Pages/Aceites/Aceites';
import Seguridad from './Pages/Seguridad/Seguridad';
import Carteleria from './Pages/Carteleria/Carteleria';
import Capazos from './Pages/Capazos/Capazos';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importa tu configuración de i18n

import Dumpers from './Pages/Dumpers/Dumpers';
import GruposElectrogenos from './Pages/GruposElectrogenos/GruposElectrogenos';
import MartillosElectricos from './Pages/MartillosElectricos/MartillosElectricos';
import MaquinariaCorte from './Pages/MaquinariaCorte/MaquinariaCorte';
import Compactadoras from './Pages/Compactadoras/Compactadoras';
import Vallas from './Pages/Vallas/Vallas';
import Excavadoras from './Pages/Excavadoras/Excavadoras';
import PlataformasArticuladas from './Pages/PlataformasArticuladas/PlataformasArticuladas';
import PlataformasTijera from './Pages/PlataformasTijera/PlataformasTijera';
import Ventajas from './Pages/Ventajas/Ventajas';
import CondicionesAlquiler from './Pages/CondicionesAlquiler/CondicionesAlquiler';
import Semaforos from './Pages/Semaforos/Semaforos';
// import MenuMaquinaria from './components/MenuMaquinaria/MenuMaquinaria';
import Maquinaria from './Pages/Maquinaria/Maquinaria';
import Limpieza from './Pages/Limpieza/Limpieza';
import BombasAgua from './Pages/BombasAgua/BombasAgua';
import Compresor from './Pages/Compresores/Compresor';
import SistemaSecado from './Pages/SistemaSecado/SistemaSecado';
import Formacion from './Pages/Formacion/Formacion';
import CarretillasElevadoras from './Pages/CarretillasElevadoras/CarretillasElevadoras'; './Pages/CarretillasElevadoras/CarretillasElevadoras';

import Faq from './Pages/FAQ/Faq';
import Hormigoneras from './Pages/Hormigoneras/Hormigoneras';
import Jardineria from './Pages/Jardineria/Jardineria';
// import Nosotros from './Pages/Nosotros/Nosotros';

function App() {

  return (
    <>
    <I18nextProvider i18n={i18n}>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/sobre-nosotros" element={<Nosotros/>}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad/>}/>
        <Route path='/politica-de-cookies' element={<PoliticaCookies/>}/>
        <Route path='/aviso-legal' element={<AvisoLegal/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/maquinaria' element={<Maquinaria/>}/>
        <Route path='/herramientas' element={<Herramientas/>}/>
        <Route path='/iluminacion' element={<Iluminacion/>}/>
        <Route path='/aceites' element={<Aceites/>}/>
        <Route path='/elementos-seguridad' element={<Seguridad/>}/>
        <Route path='/carteleria' element={<Carteleria/>}/>
        <Route path='/capazos' element={<Capazos/>}/>
        <Route path='/maquinaria/alquiler-dumpers' element={<Dumpers/>}/>
        <Route path='/maquinaria/alquiler-grupos-electrogenos' element={<GruposElectrogenos/>}/>
        <Route path='/maquinaria/alquiler-martillos-electricos' element={<MartillosElectricos/>}/>
        <Route path='/maquinaria/alquiler-maquinaria-corte' element={<MaquinariaCorte/>}/>
        <Route path='/maquinaria/alquiler-vallas' element={<Vallas/>}/>
        <Route path='/maquinaria/alquiler-senalizacion' element={<Semaforos/>}/>
        <Route path='/maquinaria/alquiler-compactadoras' element={<Compactadoras/>}/>
        <Route path='/maquinaria/alquiler-excavadoras' element={<Excavadoras/>}/>
        <Route path='/maquinaria/alquiler-plataformas-articuladas' element={<PlataformasArticuladas/>}/>
        <Route path='/maquinaria/alquiler-plataformas-tijera' element={<PlataformasTijera/>}/>
        <Route path='/maquinaria/alquiler-limpieza' element={<Limpieza/>}/>
        <Route path='/maquinaria/alquiler-bombas-agua' element={<BombasAgua/>}/>
        <Route path='/maquinaria/alquiler-compresor-aire' element={<Compresor/>}/>
        <Route path='/maquinaria/alquiler-sistema-secado' element={<SistemaSecado/>}/>
        <Route path='/ventajas' element={<Ventajas/>}/>
        <Route path='/condiciones-alquiler' element={<CondicionesAlquiler/>}/>
        <Route path='/maquinaria/alquiler-hormigoneras' element={<Hormigoneras/>}/>
        <Route path='/maquinaria/alquiler-jardineria' element={<Jardineria/>}/>
        <Route path='/maquinaria/alquiler-carretillas-elevadoras' element={<CarretillasElevadoras/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/formacion' element={<Formacion/>}/>
        {/* <Route path='/sobre-nosotros' element={<Nosotros/>}/> */}
      </Routes>
    </Router>
    </div>
    </I18nextProvider>
    </>
  )
}

export default App


