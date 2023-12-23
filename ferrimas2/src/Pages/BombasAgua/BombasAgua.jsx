import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import bombag from '../../public/assets/Bombadeagua/bombas-de-agua-gaolina.png';
import bombae from '../../public/assets/Bombadeagua/bomba-agua-elect.png';
import './BombasAgua.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";

export default function BombasAgua(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-bombasAgua animate__animated animate__fadeInRight">
            <div className="bombasAgua-div">
                
                <img src={bombag} alt="Bomba de Agua gasolina"/>
                <h3>Bomba de Agua gasolina</h3>
            </div>
            <div className="bombasAgua-div">
                
                <img src={bombae} alt="Bomba de Agua eléctrica"/>
                <h3>Bomba de Agua eléctrica sumergible</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}