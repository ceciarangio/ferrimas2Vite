import './App.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Pages/Intro/Intro';
import PoliticaPrivacidad from './Pages/PoliticaPrivacidad/PoliticaPrivacidad';
import PoliticaCookies from './Pages/PoliticaCookies/PoliticaCookies';
import AvisoLegal from './Pages/AvisoLegal/AvisoLegal';
import Contacto from './components/Contacto/Contacto';
import Tienda from './Pages/Tienda/Tienda';


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
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
