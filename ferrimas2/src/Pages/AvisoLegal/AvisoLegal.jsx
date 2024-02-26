import { useEffect } from "react";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import Footer from "../../components/Footer/Footer";
import './AvisoLegal.scss';
import { useTranslation } from 'react-i18next';


export default function AvisoLegal(){
    const { t } = useTranslation();


    useEffect(() => {
        const element = document.getElementById('aviso-legal-top');
        if (element) {
            element.scrollIntoView({ behavior: "smooth"});
        }
    }, []);




    return <>
    <HeaderGeneral/>
    <div className="avisoLegal">
    <div id="aviso-legal-top">
        <p dangerouslySetInnerHTML={{__html:t("translated-avisolegal")}} />
    </div>
    </div>
    <div className="politicaPrivacidad-footer">
        <Footer />
    </div>
    </>
}