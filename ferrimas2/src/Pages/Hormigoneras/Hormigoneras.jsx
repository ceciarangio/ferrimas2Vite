import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import hormig150 from '../../public/assets/Hormigoneras/hormigonera-150-elec.png';
import hormig300 from '../../public/assets/Hormigoneras/hormigonera-350-elec.png';
import cubilote from '../../public/assets/Hormigoneras/cubilote.png';
import Footer from "../../components/Footer/Footer";
import './Hormigoneras.scss';

export default function Hormigoneras(){

    return <>
    <HeaderGeneral/>
    <MenuMaquinaria/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div className="ceje-hormigonera">
        <div className='hormig-div'>
            <img src={hormig150} alt="hormigonera 150l"/>
            <h3>Hormigonera 140 - 180 L.</h3>
        </div>
        <div className='hormig-div'>
            <img src={hormig300} alt="hormigonera 300l"/>
            <h3>Hormigonera 300 - 500 L.</h3>
        </div>
        <div className='hormig-div'>
            <img src={cubilote} alt="cubilote"/>
            <h3>Cubilote</h3>
        </div>
      </div>
      <div>
            <Footer/>
        </div>
    </>
}