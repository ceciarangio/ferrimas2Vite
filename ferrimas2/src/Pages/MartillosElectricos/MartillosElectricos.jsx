import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import hilti1000 from '../../public/assets/Martillos/hilti-t1000.png';
import hilti70 from '../../public/assets/Martillos/hilti-te70.png';
import hilti500 from '../../public/assets/Martillos/hilti-t500.png';
import taladro from '../../public/assets/Martillos/taladros.png';
import taladromart from '../../public/assets/Martillos/taladro-martillo.png';
import './MartillosElectricos.scss';
import Footer from "../../components/Footer/Footer";

export default function MartillosElectricos(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-martilloselec">
        <div>
            <h3>Martillo Eléctrico Hilti te70</h3>
            <img src={hilti70} alt="Hilti 70"/>
        </div>
        <div>
            <h3>Martillo Eléctrico Hilti t500</h3>
            <img src={hilti500} alt="Hilti t500"/>
        </div>
        <div>
            <h3>Martillo Eléctrico Hilti t1000</h3>
            <img src={hilti1000} alt="Hilti 1000"/>
        </div>
        <div>
            <h3>Taladros</h3>
            <img src={taladro} alt="taladros"/>
        </div>
        <div>
            <h3>Taladro Martillo</h3>
            <img src={taladromart} alt="Taladro Martillo"/>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}