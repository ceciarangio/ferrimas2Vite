import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import hilti1000 from '../../public/assets/Martillos/hilti-t1000.png';
import hilti70 from '../../public/assets/Martillos/hilti-te70.png';
import hilti500 from '../../public/assets/Martillos/hilti-t500.png';
import taladro from '../../public/assets/Martillos/taladros.png';
import taladromart from '../../public/assets/Martillos/taladro-martillo.png';
import './MartillosElectricos.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";

export default function MartillosElectricos(){
    const {t} = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-martilloselec animate__animated animate__fadeInRight">
        <div className="martillo-div">
            
            <img src={hilti70} alt="Hilti 70"/>
            <h3>{t("translated-martelec-1")}</h3>
        </div>
        <div className="martillo-div">
            
            <img src={hilti500} alt="Hilti t500"/>
            <h3>{t("translated-martelec-2")}</h3>
        </div>
        <div className="martillo-div">
            
            <img src={hilti1000} alt="Hilti 1000"/>
            <h3>{t("translated-martelec-3")}</h3>
        </div>
        <div className="martillo-div">
            
            <img src={taladro} alt="taladros"/>
            <h3>{t("translated-martelec-4")}</h3>
        </div>
        <div className="martillo-div">

            <img src={taladromart} alt="Taladro Martillo"/>
            <h3>{t("translated-martelec-5")}</h3>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}