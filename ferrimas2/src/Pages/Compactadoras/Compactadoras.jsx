import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import pison from '../../public/assets/compactadoras/pison.png';
import bandeja from '../../public/assets/compactadoras/bandeja-compactadora.png';
import rod650 from '../../public/assets/compactadoras/rodillo-650kg.png';
import rod3000 from '../../public/assets/compactadoras/rodillo-3000kg.png';
import './Compactadoras.scss';
import Footer from "../../components/Footer/Footer";

export default function Compactadoras (){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-compact">
            <div>
                <h3>Pisón</h3>
                <img src={pison} alt='pison'/>
            </div>
            <div>
                <h3>Bandeja Compactadora</h3>
                <img src={bandeja} alt='bandeja compactadora'/>
            </div>
            <div>
                <h3>Rodillo 650kg</h3>
                <img src={rod650} alt='Rodillo 650'/>
            </div>
            <div>
                <h3>Rodillo 3000kg</h3>
                <img src={rod3000} alt='Rodillo 3000'/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}