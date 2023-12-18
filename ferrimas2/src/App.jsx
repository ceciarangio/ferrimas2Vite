import './App.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Intro from './Pages/Intro/Intro';
import PoliticaPrivacidad from './Pages/PoliticaPrivacidad/PoliticaPrivacidad';
import PoliticaCookies from './Pages/PoliticaCookies/PoliticaCookies';
import AvisoLegal from './Pages/AvisoLegal/AvisoLegal';
import Contacto from './components/Contacto/Contacto';
import Tienda from './Pages/Tienda/Tienda';
import Testeo1 from './components/Testeos/Testeo1';
import Herramientas from './Pages/Herramientas/Herramientas';
import Iluminacion from './Pages/Iluminacion/Iluminacion';
import Aceites from './Pages/Aceites/Aceites';
import Seguridad from './Pages/Seguridad/Seguridad';
import Carteleria from './Pages/Carteleria/Carteleria';
import Capazos from './Pages/Capazos/Capazos';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importa tu configuración de i18n

import MenuMaquinaMobile from './components/MenuMaquinaMobile/MenuMaquinaMobile';
import Dumpers from './Pages/Dumpers/Dumpers';
import GruposElectrogenos from './Pages/GruposElectrogenos/GruposElectrogenos';
import MartillosElectricos from './Pages/MartillosElectricos/MartillosElectricos';
import MaquinariaCorte from './Pages/MaquinariaCorte/MaquinariaCorte';
import Compactadoras from './Pages/Compactadoras/Compactadoras';
import Vallas from './Pages/Vallas/Vallas';
import Excavadoras from './Pages/Excavadoras/Excavadoras';
import PlataformasArticuladas from './Pages/PlataformasArticuladas/PlataformasArticuladas';
import PlataformasTijera from './Pages/PlataformasTijera/PlataformasTijera';

function App() {

  return (
    <>
    <I18nextProvider i18n={i18n}>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Intro/>}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad/>}/>
        <Route path='/politica-de-cookies' element={<PoliticaCookies/>}/>
        <Route path='/aviso-legal' element={<AvisoLegal/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/testeo' element={<Testeo1/>}/>
        <Route path='/maquinaria' element={<MenuMaquinaMobile/>}/>
        <Route path='/herramientas' element={<Herramientas/>}/>
        <Route path='iluminacion' element={<Iluminacion/>}/>
        <Route path='aceites' element={<Aceites/>}/>
        <Route path='elementos-seguridad' element={<Seguridad/>}/>
        <Route path='carteleria' element={<Carteleria/>}/>
        <Route path='/capazos' element={<Capazos/>}/>
        <Route path='/maquinaria/dumpers' element={<Dumpers/>}/>
        <Route path='/maquinaria/grupos-electrogenos' element={<GruposElectrogenos/>}/>
        <Route path='/maquinaria/martillos-electricos' element={<MartillosElectricos/>}/>
        <Route path='/maquinaria/maquinaria-corte' element={<MaquinariaCorte/>}/>
        <Route path='/maquinaria/vallas' element={<Vallas/>}/>
        <Route path='/maquinaria/compactadoras' element={<Compactadoras/>}/>
        <Route path='/maquinaria/excavadoras' element={<Excavadoras/>}/>
        <Route path='/maquinaria/plataformas-articuladas' element={<PlataformasArticuladas/>}/>
        <Route path='/maquinaria/plataformas-tijera' element={<PlataformasTijera/>}/>
      </Routes>
    </Router>
    </div>
    </I18nextProvider>
    </>
  )
}

export default App


