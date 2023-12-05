import Hamburguesa from "../Hamburguesa/Hamburguesa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import './HeaderGeneral.scss';
import logo from '../../public/assets/logo.png';



export default function HeaderGeneral(){


    return <>
    <header className="header">
        <img src={logo} className="logoFerrimas2" alt="logo" />
        {/* <p className="idiomas">Idiomas</p> */}
        <LanguageSelector/>
        <div className="ceje-hambu">
            <Hamburguesa/>
        </div>
    </header>
    </>

}

