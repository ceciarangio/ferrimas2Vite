import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './PlataformasArticuladas.scss';
import plat11m from '../../public/assets/plataforma-articulada/articulada-11m-elect.png';
import plat12m from '../../public/assets/plataforma-articulada/articulada-12m-diesel.png';
import plat16m from '../../public/assets/plataforma-articulada/articulada-16m-diesel.png';
import plat20m from '../../public/assets/plataforma-articulada/articulada-20m-diesel.png';
import plat23m from '../../public/assets/plataforma-articulada/articulada-23m.png';
import platgral from '../../public/assets/plataforma-articulada/plataformas-gral.png';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";



export default function PlataformasArticuladas(){
    const { t } = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
    </div>
        <div className="ceje-platArtic animate__animated animate__fadeInRight">
            <div className="platArtic-div">
                
                <img src={plat11m} alt="plataforma 11m"/>
                <h3>{t("translated-platarti-1")}</h3>
            </div>
            <div className="platArtic-div">
                
                <img src={plat12m} alt="plataforma 12m"/>
                <h3>{t("translated-platarti-2")}</h3>
            </div>
            <div className="platArtic-div">
                
                <img src={plat16m} alt="plataforma 16m"/>
                <h3>{t("translated-platarti-3")}</h3>
            </div>
            <div className="platArtic-div">
                
                <img src={plat20m} alt="plataforma 20m"/>
                <h3>{t("translated-platarti-4")}</h3>
            </div>
            <div className="platArtic-div">
                
                <img src={plat23m} alt="plataforma 23m"/>
                <h3>{t("translated-platarti-5")}</h3>
            </div>
            <div className="platArtic-div">
            
                <img src={platgral} alt="plataformas"/>
                <h3>{t("translated-platarti-6")}</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}