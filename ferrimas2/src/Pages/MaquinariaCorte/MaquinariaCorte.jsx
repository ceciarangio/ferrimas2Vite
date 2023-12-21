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

export default function MaquinariaCorte(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-maquinariacorte">
        <div>
            <h3>Cortadora de Juntas 45 d.</h3>
            <img src={cortajuntas45} alt="cortajuntas45"/>
        </div>
        <div>
            <h3>Cortadora de Juntas 35 d.</h3>
            <img src={cortajuntas35} alt="cortajuntas35"/>
        </div>
        <div>
            <h3>Rubi 0.60 / 1.20 m.</h3>
            <img src={rubi} alt="rubi"/>
        </div>
        <div>
            <h3>Virutex para Cortar Parquet</h3>
            <img src={virutex} alt="corta parquet"/>
        </div>
        <div>
            <h3>Mesa de Corte Húmedo</h3>
            <img src={cortehumedo} alt=" corte humedo"/>
        </div>
        <div>
            <h3>Mesa de Corte Seco</h3>
            <img src={corteseco} alt="corte seco"/>
        </div>
        <div>
            <h3>Sierra Circular para madera</h3>
            <img src={sierra} alt="Sierra Circular"/>
        </div>
        <div>
            <h3>Radial de Gasolina</h3>
            <img src={radialg} alt="Radial"/>
        </div>
        <div>
            <h3>Radial Eléctrica 230 mm.</h3>
            <img src={radiale230} alt="Radial Eléctrica"/>
        </div>
        <div>
            <h3>Radial Eléctrica 115 mm.</h3>
            <img src={radiale115} alt="Radial Eléctrica 115"/>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}