import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import gene25 from '../../public/assets/generador/generador-25kv.png';
import gene1000 from '../../public/assets/generador/ayerbe-1000.png';
import gene3800 from '../../public/assets/generador/ayerbe-3800kte.png';
import gene5000 from '../../public/assets/generador/ayerbe-5000kt.png';
import gene8000 from '../../public/assets/generador/ayerbe-8000.png';
import './GruposElectrogenos.scss';
import Footer from "../../components/Footer/Footer";



export default function GruposElectrogenos(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-generadores">
        <div>
            <h3>Generador 25kv</h3>
            <img className="animate" src={gene25} alt="Generador-25kv" />
        </div>
        <div>
            <h3>Generador Ayerbe 1000</h3>
            <img className="animate__backInDown" src={gene1000} alt="Generador 1000" />
        </div>
        <div>
            <h3>Generador Ayerbe 3800</h3>
            <img className="animate__backInDown" src={gene3800} alt="Generador-3800" />
        </div>
        <div>
            <h3>Generador Ayerbe 5000</h3>
            <img className="animate__backInDown" src={gene5000} alt="Generador-5000" />
        </div>
        <div>
            <h3>Generador Ayerbe 8000</h3>
            <img className="animate__backInDown" src={gene8000} alt="Generador-8000" />
        </div>
        </div>
        <div className="footer-dumpers">
            <Footer/>
        </div>
    </>
}