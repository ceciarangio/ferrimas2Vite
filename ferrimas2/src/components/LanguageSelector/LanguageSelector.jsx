import { useState } from "react";
import flagSpain from '../../public/assets/espana.png';
import flagUK from '../../public/assets/reino-unido.png';
import flagValencia from '../../public/assets/flagValencia.png';
import closeButton from '../../public/assets/x.png';
import './LanguageSelector.scss';
import { useTranslation } from 'react-i18next';
import mundoTranslate from './../../public/assets/mundoTranslate.png';
import i18n from "../../i18n";


export default function LanguageSelector() {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const [language, setLanguage] = useState('Español');

    let showMenu = function(){
        let menuLanguage = document.querySelector('.languageSelector__menu');
        menuLanguage.classList.add('animate__animated', 'animate__fadeInDown');
        menuLanguage.classList.toggle('languageSelector__menu--show');
    }

    let switchToSpanish = function(){
        changeLanguage('es');
        setLanguage('Español');
        let menuLanguage = document.querySelector('.languageSelector__menu');
        menuLanguage.classList.remove('animate__animated', 'animate__fadeInDown');
        // menuLanguage.classList.add('animate__animated', 'animate__fadeOutUp');
        menuLanguage.classList.toggle('languageSelector__menu--show');
        console.log(language);
    }
    let switchToEnglish = function(){
        changeLanguage('en');
        setLanguage('English');
        let menuLanguage = document.querySelector('.languageSelector__menu');
        menuLanguage.classList.remove('animate__animated', 'animate__fadeInDown');
        menuLanguage.classList.toggle('languageSelector__menu--show');
        console.log(language);
    }
    let switchToValencia = function(){
        changeLanguage('val');
        setLanguage('Valencià');
        let menuLanguage = document.querySelector('.languageSelector__menu');
        menuLanguage.classList.remove('animate__animated', 'animate__fadeInDown');
        menuLanguage.classList.toggle('languageSelector__menu--show');
        console.log(language);
    }
    let closeMenu = function(){
        let menuLanguage = document.querySelector('.languageSelector__menu');
        menuLanguage.classList.remove('animate__animated', 'animate__fadeInDown');
        menuLanguage.classList.toggle('languageSelector__menu--show');
    }




    return <>
    {/* ESTO ES EL MENU QUE SALE DESDE ARRIBA PARA SELECCIONAR EL IDIOMA */}
    <div className="languageSelector__menu">
        <div onClick={closeMenu} className="languageSelector__menu__closeButton">
            <img className="closeButton" src={closeButton} alt="x"/>
        </div>
        <div onClick={switchToSpanish} className="flag-name">
            <img className="imgFlag" src={flagSpain} alt="esp"/><p  className="languageSelector__menu--spanish">Español</p>
        </div>
        <div onClick={switchToEnglish}  className="flag-name">
            <img className="imgFlag" src={flagUK} alt="uk"/>
            <p className="languageSelector__menu--english">English</p>
        </div>
        <div onClick={switchToValencia}  className="flag-name">
            <img className="imgFlag" src={flagValencia} alt="val"/>
            <p className="languageSelector__menu--valencia">Valencià</p>
        </div>
    </div>
    {/* AQUI ACABA EL MENU PARA SELECCIONAR EL IDIOMA */}


        <div className="languageSelector">
            <div className="languageSelector__container">
                <div className="languageSelector__container--language" onClick={showMenu}>
                    <p className="languageSelector__container--language--p" ><img className="languageSelector__container--language--img" src={mundoTranslate} alt="translate" /> {language}</p>
                </div>
            </div>
        </div>
    </>
}