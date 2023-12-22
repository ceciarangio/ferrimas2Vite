import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import canongasol from '../../public/assets/SistemaSecado/canon-secado-diesel.png';
import canongas from '../../public/assets/SistemaSecado/canon-secado-gas.png';
import deshumi from '../../public/assets/SistemaSecado/DESHUMIFICADOR.png';
import './Sistema.scss';


export default function SistemaSecado(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-secado">
            <div>
                <img src={canongasol} alt="Cañon de secado gasóleo"/>
                <h3>Cañon de secado gasóleo 25 KW</h3>
            </div>
            <div>
                <img src={canongas} alt="Cañon de secado a ga"/>
                <h3>Cañon de secado a gas</h3>
            </div>
            <div>
                <img src={deshumi} alt="Deshumificador"/>
                <h3>Deshumificador</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}