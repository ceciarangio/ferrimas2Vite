import './Excavadoras.scss';
import mini1t from '../../public/assets/excavadoras/excav-1000kg.png';
import mini3t from '../../public/assets/excavadoras/excav-3500kg.png';
import mini5t from '../../public/assets/excavadoras/kubota-5.5.png';
import excavadoras from '../../public/assets/excavadoras/excavadoras.png';
import martilloexc from '../../public/assets/excavadoras/martillo.png';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuMaquinaria from '../../components/MenuMaquinaria/MenuMaquinaria';
import Footer from '../../components/Footer/Footer';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';



export default function Excavadoras(){

    return <>
    <HeaderGeneral/>
    <MenuMaquinaria/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="ceje-excavadoras animate__animated animate__fadeInRight">
            <div className='excav-div'>
                
                <img src={mini1t} alt='excavadora 1t'/>
                <h3>Minigiratoria 1 T.</h3>
            </div>
            <div className='excav-div'>
                
                <img src={mini3t} alt='excavadora 3t'/>
                <h3>Minigiratoria 3.5 T.</h3>
            </div>
            <div className='excav-div'>
                
                <img src={mini5t} alt='excavadora 5t'/>
                <h3>Minigiratoria 5.5 T.</h3>
            </div>
            <div className='excav-div'>
                
                <img src={excavadoras} alt='excavadoras'/>
                <h3>Excavadoras</h3>
            </div>
            <div className='excav-div'>
                
                <img src={martilloexc} alt='Martillo'/>
                <h3>Martillo para Minigiratoria</h3>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}