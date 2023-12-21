import './Excavadoras.scss';
import mini1t from '../../public/assets/excavadoras/excav-1000kg.png';
import mini3t from '../../public/assets/excavadoras/excav-3500kg.png';
import mini5t from '../../public/assets/excavadoras/kubota-5.5.png';
import excavadoras from '../../public/assets/excavadoras/excavadoras.png';
import martilloexc from '../../public/assets/excavadoras/martillo.png';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuMaquinaria from '../../components/MenuMaquinaria/MenuMaquinaria';
import Footer from '../../components/Footer/Footer';



export default function Excavadoras(){

    return <>
    <HeaderGeneral/>
    <MenuMaquinaria/>
        <div className="ceje-excavadoras">
            <div>
                <h3>Minigiratoria 1 T.</h3>
                <img src={mini1t} alt='excavadora 1t'/>
            </div>
            <div>
                <h3>Minigiratoria 3.5 T.</h3>
                <img src={mini3t} alt='excavadora 3t'/>
            </div>
            <div>
                <h3>Minigiratoria 5.5 T.</h3>
                <img src={mini5t} alt='excavadora 5t'/>
            </div>
            <div>
                <h3>Excavadoras</h3>
                <img src={excavadoras} alt='excavadoras'/>
            </div>
            <div>
                <h3>Martillo para Minigiratoria</h3>
                <img src={martilloexc} alt='Martillo'/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}