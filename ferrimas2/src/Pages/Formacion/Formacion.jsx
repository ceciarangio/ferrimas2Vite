import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import { useTranslation } from 'react-i18next';

import './Formacion.scss';

export default function Formacion(){
    const { t } = useTranslation();

    return <>
        <HeaderGeneral/>
        <div>
            <div>
            <h2 className="h2-formacion">{t("translated-contacto-formacion-titular")}</h2>
            <div className="div-containet-formacion">
            <img className="img-formacion" src='https://autoescuelaeurovial.com/assets/eurovial/images/logo-eurovial.png' alt="pagina autoescuela"/>
            <div className="div-formacion">
            <p>{t("translated-contacto-formacion-colaboramos")}</p>
                <ul>
                    <li>{t("translated-contacto-formacion-list1")}</li>
                    <li>{t("translated-contacto-formacion-list2")}</li>
                    <li>{t("translated-contacto-formacion-list3")}</li>
                </ul>
                
                <p>{t("translated-contacto-formacion-paramasinfo")} <span>690883755</span></p>
                <p>{t("translated-contacto-formacion-oatraves")} <a href="https://autoescuelaeurovial.com/es">https://autoescuelaeurovial.com/es</a></p>
                </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}