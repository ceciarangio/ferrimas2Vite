import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import dum2000 from "../../public/assets/Dumpers/dump-2000kg-pala.png";
import dum2000p from "../../public/assets/Dumpers/dump-2000kg.png";
import dum2500 from "../../public/assets/Dumpers/dump-2500kg.png";
import dump3500 from "../../public/assets/Dumpers/3500KG-dump.png";
import dump6500 from "../../public/assets/Dumpers/dump-6000kg.png";
import './Dumpers.scss';
import Footer from "../../components/Footer/Footer";
import minidum from "../../public/assets/Dumpers/mini-dumper.png";
import oruga from "../../public/assets/Dumpers/carretilla-oruga.png";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from "react-i18next";


export default function Dumpers(){
    const { t } = useTranslation();

    return<>
    <HeaderGeneral/>
    <MenuMaquinaria/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
    <div className="ceje-dumpers animate__animated animate__fadeInRight">
        <div className="dumpers-div">
            <img src={dum2000} alt="dumper-2000-pala"/>
            <h3>{t("translated-maqdumpers-1")}</h3>
            <p>{t("translated-maqdumpers-1-1")}</p>
        </div>
        <div className="dumpers-div">
            <img src={dum2000p} alt="dumper-2000"/>
            <h3>{t("translated-maqdumpers-2")}</h3>
            <p>{t("translated-maqdumpers-2-1")}</p>
        </div>
        <div className="dumpers-div">
            {/* <h3>Dúmper 2500kg</h3>
            <p>Hidroestático, 4x4 , giratorio</p> */}
            <img src={dum2500} alt="dumper-2500"/>
            <h3>{t("translated-maqdumpers-3")}</h3>
            <p>{t("translated-maqdumpers-3-1")}</p>
        </div>
        <div className="dumpers-div">
            <img src={dump3500} alt="dumper3500"/>
            <h3>{t("translated-maqdumpers-4")}</h3>
            <p>{t("translated-maqdumpers-4-1")}</p>
        </div>
        <div className="dumpers-div">
            <img src={dump6500} alt="dumper-6000"/>
            <h3>{t("translated-maqdumpers-5")}</h3>
            <p>{t("translated-maqdumpers-5-1")}</p>
        </div>
        <div className="dumpers-div">
        
            <img src={minidum} alt="mini dumper"/>
            <h3>{t("translated-maqdumpers-6")}</h3>
        </div>
        <div className="dumpers-div">
            
            <img src={oruga} alt="oruga"/>
            <h3>{t("translated-maqdumpers-7")}</h3>
            
        </div>
        </div>
        <div className="footer-dumpers">
            <Footer/>
        </div>
    </>
}