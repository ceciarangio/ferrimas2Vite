import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import aspiIndus from '../../public/assets/Limpieza/aspiradora-hilti.png';
import barredora from '../../public/assets/Limpieza/barredora-manual.png';
import abrillan from '../../public/assets/Limpieza/abrillantadora.png';
import fregadora from '../../public/assets/Limpieza/fregadora.png';
import lijadora from '../../public/assets/Limpieza/lijadora-pared.png';
import vaporeta from '../../public/assets/Limpieza/vaporeta.png';
import hidrog from '../../public/assets/Limpieza/hidrolimpiadora-gasolia.png';
import hidroele from '../../public/assets/Limpieza/hidrolimpiadora-karcher.png';
import hidrocalie from '../../public/assets/Limpieza/hidrolimpiadora-karcher-caliente.png';
import Footer from "../../components/Footer/Footer";
import './Limpieza.scss';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";

export default function Limpieza(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-limpieza animate__animated animate__fadeInRight">
            <div className="limpieza-div">
                
                <img src={aspiIndus} alt="Aspiradora Industrial"/>
                <h3>Aspiradora Industrial</h3>
                <p>De polvo y agua. Hilti</p>
            </div>
            <div className="limpieza-div">
                
                <img src={barredora} alt="Barredora Manual"/>
                <h3>Barredora Manual</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={abrillan} alt="Abrillan"/>
                <h3>Abrillantadora</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={fregadora} alt="Fregadora"/>
                <h3>Fregadora</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={lijadora} alt="Lijadora de Pared"/>
                <h3>Lijadora de Pared</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={vaporeta} alt=""/>
                <h3>Vaporeta - Aspirador de Tapicería</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={hidrog} alt="Hidrolimpiadora gasolina"/>
                <h3>Hidrolimpiadora de Gasolina</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={hidroele} alt="Hidrolimpiadora Eléctrica"/>
                <h3>Hidrolimpiadora Eléctrica</h3>
            </div>
            <div className="limpieza-div">
                
                <img src={hidrocalie} alt="Hidrolimpiadora Eléctrica caliente"/>
                <h3>Hidrolimpiadora Eléctrica</h3>
                <p>Agua Caliente</p>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}