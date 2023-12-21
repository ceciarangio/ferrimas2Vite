import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './PlataformasArticuladas.scss';
import plat11m from '../../public/assets/plataforma-articulada/articulada-11m-elect.png';
import plat12m from '../../public/assets/plataforma-articulada/articulada-12m-diesel.png';
import plat16m from '../../public/assets/plataforma-articulada/articulada-16m-diesel.png';
import plat20m from '../../public/assets/plataforma-articulada/articulada-20m-diesel.png';
import plat23m from '../../public/assets/plataforma-articulada/articulada-23m.png';
import platgral from '../../public/assets/plataforma-articulada/plataformas-gral.png';
import Footer from "../../components/Footer/Footer";



export default function PlataformasArticuladas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-platArtic">
            <div>
                <h3>11 m. Eléctrica</h3>
                <img src={plat11m} alt="plataforma 11m"/>
            </div>
            <div>
                <h3>12 m. Diesel</h3>
                <img src={plat12m} alt="plataforma 12m"/>
            </div>
            <div>
                <h3>16 m. Diesel</h3>
                <img src={plat16m} alt="plataforma 16m"/>
            </div>
            <div>
                <h3>20 m. Diesel</h3>
                <img src={plat20m} alt="plataforma 20m"/>
            </div>
            <div>
                <h3>23 m. Telescópica Diesel</h3>
                <img src={plat23m} alt="plataforma 23m"/>
            </div>
            <div>
            <h3>Plataformas</h3>
                <img src={platgral} alt="plataformas"/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}