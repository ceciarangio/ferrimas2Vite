import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import './Faq.scss';
import { useState } from "react";
import 'animate.css';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from 'react-i18next';


export default function Faq(){

    const { t } = useTranslation();

    const [showHide, setShowHide] = useState({
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
        faq6: false,
        faq7: false,
        faq8: false,
        faq9: false,
        faq10: false,
        faq11: false,
        faq12: false
    });

    const mostrar = function(evento){
        setShowHide(prevState => {
            return {
                ...prevState,
                [evento]: !prevState[evento]
            };
        });
    };
    

    return <>
        <HeaderGeneral/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
        </div>
        <h2 className="ceje-faq-titulo">{t("translated-faq-titulo")}</h2>
        <div className="ceje-faq-container">
            <div onClick={() => mostrar('faq1')} className="ceje-faq-container__faq1">
                <h3 className="ceje-faq-container__faq1--h3">{t("translated-faq-p1")}</h3>
                {showHide.faq1 === true && <h4 className="ceje-faq-container__faq1--h4 animate__fadeInLeftBig">
                {t("translated-faq-r1")}<Link to="/ventajas">{t("translated-faq-r1-1")}</Link>.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq2')} className="ceje-faq-container__faq2">
                <h3 className="ceje-faq-container__faq2--h3">{t("translated-faq-p2")}</h3>
                {showHide.faq2 === true &&<h4 className="ceje-faq-container__faq2--h3 animate__fadeInLeftBig">
                {t("translated-faq-r2")}<Link to={'/maquinaria'}>{t("translated-faq-r2-1")}</Link>.</h4>}
            </div>
            <div onClick={() => mostrar('faq3')} className="ceje-faq-container__faq3">
                <h3 className="ceje-faq-container__faq3--h3">{t("translated-faq-p3")}</h3>
                {showHide.faq3 === true &&<h4 className="ceje-faq-container__faq3--h3 animate__fadeInLeftBig">
                {t("translated-faq-r3")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq4')} className="ceje-faq-container__faq4">
                <h3 className="ceje-faq-container__faq4--h3">{t("translated-faq-p4")}</h3>
                {showHide.faq4 === true &&<h4 className="ceje-faq-container__faq4--h3 animate__fadeInLeftBig">
                {t("translated-faq-r4")}<Link to={'/contacto'}>{t("translated-faq-r4-1")}</Link>.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq5')} className="ceje-faq-container__faq5">
                <h3 className="ceje-faq-container__faq5--h3">{t("translated-faq-p5")}</h3>
                {showHide.faq5 === true &&<h4 className="ceje-faq-container__faq5--h3 animate__fadeInLeftBig">
                {t("translated-faq-r5")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq6')} className="ceje-faq-container__faq6">
                <h3 className="ceje-faq-container__faq6--h3">{t("translated-faq-p6")}</h3>
                {showHide.faq6 === true &&<h4 className="ceje-faq-container__faq6--h3 animate__fadeInLeftBig">
                {t("translated-faq-r6")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq7')} className="ceje-faq-container__faq7">
                <h3 className="ceje-faq-container__faq7--h3">{t("translated-faq-p7")}</h3>
                {showHide.faq7 === true &&<h4 className="ceje-faq-container__faq7--h3 animate__fadeInLeftBig">
                {t("translated-faq-r7")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq8')} className="ceje-faq-container__faq8">
                <h3 className="ceje-faq-container__faq8--h3">{t("translated-faq-p8")}</h3>
                {showHide.faq8 === true &&<h4 className="ceje-faq-container__faq8--h3 animate__fadeInLeftBig">
                {t("translated-faq-r8")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq9')} className="ceje-faq-container__faq9">
                <h3 className="ceje-faq-container__faq9--h3">{t("translated-faq-p9")}</h3>
                {showHide.faq9 === true &&<h4 className="ceje-faq-container__faq9--h3 animate__fadeInLeftBig">
                {t("translated-faq-r9")}<Link to={'/contacto'}>{t("translated-faq-r9-1")}</Link>{t("translated-faq-r9-2")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq10')} className="ceje-faq-container__faq10">
                <h3 className="ceje-faq-container__faq10--h3">{t("translated-faq-p10")}</h3>
                {showHide.faq10 === true &&<h4 className="ceje-faq-container__faq10--h3 animate__fadeInLeftBig">
                {t("translated-faq-r10")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq11')} className="ceje-faq-container__faq11">
                <h3 className="ceje-faq-container__faq11--h3">{t("translated-faq-p11")}</h3>
                {showHide.faq11 === true &&<h4 className="ceje-faq-container__faq11--h3 animate__fadeInLeftBig">
                {t("translated-faq-r11")}
                </h4>}
            </div>
            <div onClick={() => mostrar('faq12')} className="ceje-faq-container__faq12">
                <h3 className="ceje-faq-container__faq12--h3">{t("translated-faq-p12")}</h3>
                {showHide.faq12 === true &&<h4 className="ceje-faq-container__faq12--h3 animate__fadeInLeftBig">
                {t("translated-faq-r12")}
                </h4>}
            </div>
        </div>
        <footer className="ceje-faq-footer">
            <Footer/>
        </footer>
    </>
}