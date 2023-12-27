import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import aholladora from '../../public/assets/jardineria/aholladora.webp';
import desbroza from  '../../public/assets/jardineria/DESBROZADORA.jpg';
import labrad from '../../public/assets/jardineria/labradora.png';
import cortaseto from '../../public/assets/jardineria/cortasetos.webp';
import soplae from '../../public/assets/jardineria/soplador-electrico.png';
import soplag from '../../public/assets/jardineria/soplador-gasolina.png';
import tritu from '../../public/assets/jardineria/trituradora.webp';
import './Jardineria.scss';
import { useTranslation } from "react-i18next";


export default function Jardineria(){
    const { t } = useTranslation();

    return <>
        <HeaderGeneral/>
    <MenuMaquinaria/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div className="ceje-jardineria animate__animated animate__fadeInRight">
        <div className="jardineria-div">
            <img src={aholladora} alt="aholladora"/>
            <h3>{t("translated-jardi-1")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={desbroza} alt="Desbrozadora"/>
            <h3>{t("translated-jardi-2")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={labrad} alt="Labradora"/>
            <h3>{t("translated-jardi-3")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={cortaseto} alt="Cortasetos"/>
            <h3>{t("translated-jardi-4")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={soplae} alt=" Sopladora e"/>
            <h3>{t("translated-jardi-5")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={soplag} alt="Sopladora g"/>
            <h3>{t("translated-jardi-6")}</h3>
        </div>
        <div className="jardineria-div">
            <img src={tritu} alt="Trituradora"/>
            <h3>{t("translated-jardi-7")}</h3>
        </div>
      </div>
      <div className="footer-jardineria">
            <Footer/>
        </div>
    </>
}