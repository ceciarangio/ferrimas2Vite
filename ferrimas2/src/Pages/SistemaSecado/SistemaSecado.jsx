import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import canongasol from '../../public/assets/SistemaSecado/canon-secado-diesel.png';
import canongas from '../../public/assets/SistemaSecado/canon-secado-gas.png';
import deshumi from '../../public/assets/SistemaSecado/DESHUMIFICADOR.png';
import './Sistema.scss';


export default function SistemaSecado(){
    const {t} = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
    </div>
        <div className="ceje-secado animate__animated animate__fadeInRight">
            <div className="secado-div">
                <img src={canongasol} alt="Cañon de secado gasóleo"/>
                <h3>{t("translated-sissecado-1")}</h3>
            </div>
            <div className="secado-div">
                <img src={canongas} alt="Cañon de secado a ga"/>
                <h3>{t("translated-sissecado-2")}</h3>
            </div>
            <div className="secado-div">
                <img src={deshumi} alt="Deshumificador"/>
                <h3>{t("translated-sissecado-3")}</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}