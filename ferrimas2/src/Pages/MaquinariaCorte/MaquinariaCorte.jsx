import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import cortajuntas45 from '../../public/assets/Maquinaria-corte/cortadora-juntas-45.png';
import cortajuntas35 from '../../public/assets/Maquinaria-corte/cortadora-juntas-35d.png';
import rubi from '../../public/assets/Maquinaria-corte/RUBI-120.png';
import virutex from '../../public/assets/Maquinaria-corte/VIRUTEX-MAQUINA-CORTAR-PARQUE.png';
import  corteseco from '../../public/assets/Maquinaria-corte/mesa-corte-seco.png';
import cortehumedo from '../../public/assets/Maquinaria-corte/mesa-corte-humedo.png';
import sierra from '../../public/assets/Maquinaria-corte/SIERRA-MANUAL-DISCO-MADERA.png';
import radialg from '../../public/assets/Maquinaria-corte/RADIAL-GASOLINA.png';
import radiale230 from '../../public/assets/Maquinaria-corte/RADIAL-elec-230mm-(Sin disco).png';
import radiale115 from '../../public/assets/Maquinaria-corte/RADIAL-elec-115 mm.-(Sin disco).png';
import './MaquinariaCortes.scss';
import Footer from "../../components/Footer/Footer";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";

export default function MaquinariaCorte(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-maquinariacorte">
        <div>
            
            <img src={cortajuntas45} alt="cortajuntas45"/>
            <h3>Cortadora de Juntas 45 d.</h3>
        </div>
        <div>
            
            <img src={cortajuntas35} alt="cortajuntas35"/>
            <h3>Cortadora de Juntas 35 d.</h3>
        </div>
        <div>
            
            <img src={rubi} alt="rubi"/>
            <h3>Rubi 0.60 / 1.20 m.</h3>
        </div>
        <div>
           
            <img src={virutex} alt="corta parquet"/>
            <h3>Virutex para Cortar Parquet</h3>
        </div>
        <div>
            
            <img src={cortehumedo} alt=" corte humedo"/>
            <h3>Mesa de Corte Húmedo</h3>
        </div>
        <div>
            
            <img src={corteseco} alt="corte seco"/>
            <h3>Mesa de Corte Seco</h3>
        </div>
        <div>
            
            <img src={sierra} alt="Sierra Circular"/>
            <h3>Sierra Circular para madera</h3>
        </div>
        <div>
            
            <img src={radialg} alt="Radial"/>
            <h3>Radial de Gasolina</h3>
        </div>
        <div>
            
            <img src={radiale230} alt="Radial Eléctrica"/>
            <h3>Radial Eléctrica 230 mm.</h3>
        </div>
        <div>
            
            <img src={radiale115} alt="Radial Eléctrica 115"/>
            <h3>Radial Eléctrica 115 mm.</h3>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}