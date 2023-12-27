import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import compresor from '../../public/assets/Compresor/compresor-aire.png';
import './Compresor.scss';

export default function Compresor(){
    const {t} = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-compresor animate__animated animate__fadeInRight">
            <div className="compresor-div">
                <img src={compresor} alt="compresor de aire"/>
                <h3>{t("translated-compreaire")}</h3>
            </div>
        </div>
        <div className="footer-compresor">
            <Footer/>
        </div>
    </>
}