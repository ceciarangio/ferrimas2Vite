import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import gene25 from '../../public/assets/generador/generador-25kv.png';
import gene1000 from '../../public/assets/generador/ayerbe-1000.png';
import gene3800 from '../../public/assets/generador/ayerbe-3800kte.png';
import gene5000 from '../../public/assets/generador/ayerbe-5000kt.png';
import gene8000 from '../../public/assets/generador/ayerbe-8000.png';
import './GruposElectrogenos.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";



export default function GruposElectrogenos(){
    const { t } = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-generadores animate__animated animate__fadeInRight">
        <div className="electrog-div">
            
            <img src={gene25} alt="Generador-25kv" />
            <h3>{t("translated-grelectro-1")}</h3>
        </div>
        <div className="electrog-div">
            
            <img src={gene1000} alt="Generador 1000" />
            <h3>{t("translated-grelectro-2")}</h3>
        </div>
        <div className="electrog-div">
            
            <img src={gene3800} alt="Generador-3800" />
            <h3>{t("translated-grelectro-3")}</h3>
        </div>
        <div className="electrog-div">
            
            <img src={gene5000} alt="Generador-5000" />
            <h3>{t("translated-grelectro-4")}</h3>
        </div>
        <div className="electrog-div">
            
            <img src={gene8000} alt="Generador-8000" />
            <h3>{t("translated-grelectro-5")}</h3>
        </div>
        </div>
        <div className="footer-dumpers">
            <Footer/>
        </div>
    </>
}