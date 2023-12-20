import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './Semaforos.scss';
import semaforos from '../../public/assets/semaforos/semaforo.png';
import senales from '../../public/assets/semaforos/senales-obra.png';
import Footer from "../../components/Footer/Footer";


export default function PlataformasArticuladas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div>
            <h3>Semáforos</h3>
            <img src={semaforos} alt="semaforos"/>
        </div>
        <div>
            <h3>Señales de Obra</h3>
            <img src={senales} alt='señales obra'/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
}