import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './PlataformasTijera.scss';
import plat6m from '../../public/assets/plataformas-elevadoras-tijera/tijera-6m-elec.png';
import plat8m from '../../public/assets/plataformas-elevadoras-tijera/tijera-8m-elec.png';
import plat10m from '../../public/assets/plataformas-elevadoras-tijera/tijera-10m-elec.png';
import plat12me from '../../public/assets/plataformas-elevadoras-tijera/tijera-12m-elec.png';
import plat12md from '../../public/assets/plataformas-elevadoras-tijera/tijera-12m.png';
import plat18m from '../../public/assets/plataformas-elevadoras-tijera/tijera-18m.png';
import Footer from "../../components/Footer/Footer";



export default function PlataformasArticuladas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-platTijera">
            <div>
                <h3>6 m. Eléctrica</h3>
                <img src={plat6m} alt="plataforma 6m"/>
            </div>
            <div>
                <h3>8 m. Eléctrica</h3>
                <img src={plat8m} alt="plataforma 8m"/>
            </div>
            <div>
                <h3>10 m. Eléctrica</h3>
                <img src={plat10m} alt="plataforma 10m"/>
            </div>
            <div>
                <h3>12 m. Eléctrica</h3>
                <img src={plat12me} alt="plataforma 12m"/>
            </div>
            <div>
                <h3>12 m. Diesel</h3>
                <img src={plat12md} alt="plataforma 12m"/>
            </div>
            <div>
            <h3>18 m. Diesel</h3>
                <img src={plat18m} alt="plataforma 18m"/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}