import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './PlataformasTijera.scss';
import plat6m from '../../public/assets/plataformas-elevadoras-tijera/tijera-6m-elec.png';
import plat8m from '../../public/assets/plataformas-elevadoras-tijera/tijera-8m-elec.png';
import plat10m from '../../public/assets/plataformas-elevadoras-tijera/tijera-10m-elec.png';
import plat12me from '../../public/assets/plataformas-elevadoras-tijera/tijera-12m-elec.png';
import plat12md from '../../public/assets/plataformas-elevadoras-tijera/tijera-12m.png';
import plat18m from '../../public/assets/plataformas-elevadoras-tijera/tijera-18m.png';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";



export default function PlataformasArticuladas(){
    const {t} = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
    </div>
        <div className="ceje-platTijera">
            <div>
                
                <img src={plat6m} alt="plataforma 6m"/>
                <h3>{t("translated-plattijera-1")}</h3>
            </div>
            <div>
                
                <img src={plat8m} alt="plataforma 8m"/>
                <h3>{t("translated-plattijera-2")}</h3>
            </div>
            <div>
                
                <img src={plat10m} alt="plataforma 10m"/>
                <h3>{t("translated-plattijera-3")}</h3>
            </div>
            <div>
                
                <img src={plat12me} alt="plataforma 12m"/>
                <h3>{t("translated-plattijera-4")}</h3>
            </div>
            <div>
                
                <img src={plat12md} alt="plataforma 12m"/>
                <h3>{t("translated-plattijera-5")}</h3>
            </div>
            <div>
            
                <img src={plat18m} alt="plataforma 18m"/>
                <h3>{t("translated-plattijera-6")}</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}