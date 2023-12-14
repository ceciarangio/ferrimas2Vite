import Hamburguesa from "../Hamburguesa/Hamburguesa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import './HeaderGeneral.scss';
import logo from '../../public/assets/logo.png';
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import i18n from "../../i18n";
import { useTranslation } from 'react-i18next';
=======

// import i18n from "../../i18n";
import { useTranslation } from 'react-i18next';

>>>>>>> 5dfc0075ca72d17b46bed120f927d4b12dd8411a



export default function HeaderGeneral(){
    const { t } = useTranslation();

    return <>
    <header className="header">
<<<<<<< HEAD
=======

>>>>>>> 5dfc0075ca72d17b46bed120f927d4b12dd8411a
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
<<<<<<< HEAD
=======

>>>>>>> 5dfc0075ca72d17b46bed120f927d4b12dd8411a
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