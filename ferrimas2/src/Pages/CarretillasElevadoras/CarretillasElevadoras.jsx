import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './CarretillasElevadoras.scss';
import carret1500e from '../../public/assets/carretilla-elevadora/carret-1500-electr.png';
import carret1500d from '../../public/assets/carretilla-elevadora/carret-1500kg-diesel.png';
import carret1600 from '../../public/assets/carretilla-elevadora/carret-1600-electrica.png';
import carret2000 from '../../public/assets/carretilla-elevadora/carret-2000-diesel.png';
import carret2500 from '../../public/assets/carretilla-elevadora/carret-2500kg-diesel.png';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import apilador from '../../public/assets/carretilla-elevadora/apilador-manual-1000kg.png';
import transp from '../../public/assets/carretilla-elevadora/transpaleta-ayerbe-2500-thn-580700.jpg';
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";


export default function CarretillasElevadoras(){
    const { t } = useTranslation();

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
    </div>
        <div className="ceje-carretillas animate__animated animate__fadeInRight">
            <div className="carreelev-div">
                
                <img src={carret1500e} alt="carretillas 1500e"/>
                <h3>{t("translated-carreleva-1")}</h3>
            </div>
            <div className="carreelev-div">
            
                <img src={carret1500d} alt="carretillas 1500d"/>
                <h3>{t("translated-carreleva-2")}</h3>
            </div>
            <div className="carreelev-div">
                
                <img src={carret1600} alt="carretillas 1600"/>
                <h3>{t("translated-carreleva-3")}</h3>
            </div>
            <div className="carreelev-div">
                
                <img src={carret2000} alt="carretillas 2000"/>
                <h3>{t("translated-carreleva-4")}</h3>
            </div>
            <div className="carreelev-div">
                
                <img src={carret2500} alt="carretillas 2500"/>
                <h3>{t("translated-carreleva-5")}</h3>
            </div>
            <div className="carreelev-div">
                
                <img src={apilador} alt="Apilador Manual 1000kg"/>
                <h3>{t("translated-carreleva-6")}</h3>
            </div>
            <div className="carreelev-div">
                
                <img src={transp} alt="Transpaleta"/>
                <h3>{t("translated-carreleva-7")}</h3>
            </div>
            
            
        </div>
        <div><Footer/></div>
    </>
}