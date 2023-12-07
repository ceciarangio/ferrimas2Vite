import Hamburguesa from "../Hamburguesa/Hamburguesa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import './HeaderGeneral.scss';
import logo from '../../public/assets/logo.png';



export default function HeaderGeneral(){


    return <>
    <header className="header">
    <img src={logo} className="logoFerrimas2" alt="logo" />
    <div className="ceje-header__language-menu-container">
        <div className="ceje-opcionesHeader">
            <a href="#" className="ceje-opcionesHeader--a">Tienda</a>
            <a href="#" className="ceje-opcionesHeader--a--aboutUs">Sobre nosotros</a>
            <a href="#" className="ceje-opcionesHeader--a--ventajas">Nuestras ventajas</a>
            <a href="#" className="ceje-opcionesHeader--a">Formación</a>
            <a href="#" className="ceje-opcionesHeader--a">Alquiler de maquinaria</a>
            <a href="#" className="ceje-opcionesHeader--a--condiciones">Condiciones de alquiler</a>
            <a href="#" className="ceje-opcionesHeader--a--faq">Preguntas frecuentes (F.A.Q.)</a>
            <a href="#" className="ceje-opcionesHeader--a">Contacto</a>
        </div>
        <div className="ceje-header__language-menu-container__language-selector">
            <LanguageSelector/>
        </div>
    </div>

        <div className="ceje-hambu">
            <Hamburguesa/>
        </div>
    </header>
    </>

}

