import './App.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Pages/Intro/Intro';
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


function App() {

  return (
    <>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad/>}/>
        <Route path='/politica-de-cookies' element={<PoliticaCookies/>}/>
        <Route path='/aviso-legal' element={<AvisoLegal/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/testeo' element={<Testeo1/>}/>
        <Route path='/herramientas' element={<Herramientas/>}/>
        <Route path='iluminacion' element={<Iluminacion/>}/>
        <Route path='aceites' element={<Aceites/>}/>
        <Route path='elementos-seguridad' element={<Seguridad/>}/>
        <Route path='carteleria' element={<Carteleria/>}/>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App


