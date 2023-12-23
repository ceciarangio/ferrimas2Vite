import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import pison from '../../public/assets/compactadoras/pison.png';
import bandeja from '../../public/assets/compactadoras/bandeja-compactadora.png';
import rod650 from '../../public/assets/compactadoras/rodillo-650kg.png';
import rod3000 from '../../public/assets/compactadoras/rodillo-3000kg.png';
import './Compactadoras.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";

export default function Compactadoras (){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-compact animate__animated animate__fadeInRight">
            <div className="compac-div">
                
                <img src={pison} alt='pison'/>
                <h3>Pisón</h3>
            </div>
            <div className="compac-div">
                
                <img src={bandeja} alt='bandeja compactadora'/>
                <h3>Bandeja Compactadora</h3>
            </div>
            <div className="compac-div">
                
                <img src={rod650} alt='Rodillo 650'/>
                <h3>Rodillo 650kg</h3>
            </div>
            <div className="compac-div">
                
                <img src={rod3000} alt='Rodillo 3000'/>
                <h3>Rodillo 3000kg</h3>
            </div>
        </div>
        <div className="footer-compactadoras">
            <Footer/>
        </div>
    </>
}