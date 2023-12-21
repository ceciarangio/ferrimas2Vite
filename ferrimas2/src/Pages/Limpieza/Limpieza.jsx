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

export default function Limpieza(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-limpieza">
            <div>
                <h3>Aspiradora Industrial</h3>
                <p>De polvo y agua. Hilti</p>
                <img src={aspiIndus} alt="Aspiradora Industrial"/>
            </div>
            <div>
                <h3>Barredora Manual</h3>
                <img src={barredora} alt="Barredora Manual"/>
            </div>
            <div>
                <h3>Abrillantadora</h3>
                <img src={abrillan} alt="Abrillan"/>
            </div>
            <div>
                <h3>Fregadora</h3>
                <img src={fregadora} alt="Fregadora"/>
            </div>
            <div>
                <h3>Lijadora de Pared</h3>
                <img src={lijadora} alt="Lijadora de Pared"/>
            </div>
            <div>
                <h3>Vaporeta - Aspirador de Tapicería</h3>
                <p>Productos de limpieza aparte</p>
                <img src={vaporeta} alt=""/>
            </div>
            <div>
                <h3>Hidrolimpiadora de Gasolina</h3>
                <img src={hidrog} alt="Hidrolimpiadora gasolina"/>
            </div>
            <div>
                <h3>Hidrolimpiadora Eléctrica</h3>
                <img src={hidroele} alt="Hidrolimpiadora Eléctrica"/>
            </div>
            <div>
                <h3>Hidrolimpiadora Eléctrica</h3>
                <p>Agua Caliente</p>
                <img src={hidrocalie} alt="Hidrolimpiadora Eléctrica caliente"/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}