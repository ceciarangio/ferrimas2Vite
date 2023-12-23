import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './Semaforos.scss';
import semaforos from '../../public/assets/semaforos/semaforo.png';
import senales from '../../public/assets/semaforos/senales-obra.png';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";


export default function PlataformasArticuladas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-semaforos animate__animated animate__fadeInRight">
        <div className="semaforos-div">
            
            <img src={semaforos} alt="semaforos"/>
            <h3>Semáforos</h3>
        </div>
        <div className="semaforos-div">
            
            <img src={senales} alt='señales obra'/>
            <h3>Señales de Obra</h3>
        </div>
        </div>
        <div className="footer-semaforos">
            <Footer/>
        </div>
        </>
}