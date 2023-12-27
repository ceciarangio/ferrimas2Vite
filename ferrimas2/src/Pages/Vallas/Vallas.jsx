import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import vallasmet from '../../public/assets/vallas/valla-pie-hormigon.png';
import vallaprot from '../../public/assets/vallas/valla-peatonal.png';
import './Vallas.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";

export default function Vallas(){
    const {t} = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
    </div>
        <div className="ceje-vallas animate__animated animate__fadeInRight ">
        <div className="vallas-div">
            
            <img src={vallasmet} alt="vallas metalicas"/>
            <h3>{t("translated-vallas-1")}</h3>
        </div>
        <div className="vallas-div">
            
            <img src={vallaprot} alt="vallas de proteccion"/>
            <h3>{t("translated-vallas-2")}</h3>
        </div>
        </div>
        <div className="footer-vallas">
            <Footer/>
        </div>
    </>
}