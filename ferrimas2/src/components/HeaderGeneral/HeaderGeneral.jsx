import Hamburguesa from "../Hamburguesa/Hamburguesa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import './HeaderGeneral.scss';
import logo from '../../public/assets/logo.png';
import { Link } from "react-router-dom";
// import i18n from "../../i18n";
import { useTranslation } from 'react-i18next';



export default function HeaderGeneral(){
    const { t } = useTranslation();

    return <>
    <header className="header">
    <Link to={'/'}><img src={logo} className="logoFerrimas2" alt="logo" /></Link>
    <div className="ceje-header__language-menu-container">
        <div className="ceje-opcionesHeader">
            <a href="#" className="ceje-opcionesHeader--a">{t('translated-header-shop')}</a>
            <a href="#" className="ceje-opcionesHeader--a--aboutUs">{t('translated-header-aboutUs')}</a>
            <a href="#" className="ceje-opcionesHeader--a--ventajas">{t('translated-header-ventajas')}</a>
            <a href="#" className="ceje-opcionesHeader--a">{t('translated-header-training')}</a>
            <a href="#" className="ceje-opcionesHeader--a">{t('translated-header-rental')}</a>
            <a href="#" className="ceje-opcionesHeader--a--condiciones">{t('translated-header-rental-conditions')}</a>
            <a href="#" className="ceje-opcionesHeader--a--faq">{t('translated-header-faq')}</a>
            <a href="/contacto" className="ceje-opcionesHeader--a">{t('translated-header-contact')}</a>
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