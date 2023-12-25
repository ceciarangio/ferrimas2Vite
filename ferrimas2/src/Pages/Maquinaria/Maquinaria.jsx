import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import dump3500 from "../../public/assets/Dumpers/3500KG-dump.png";
import rod650 from '../../public/assets/compactadoras/rodillo-650kg.png';
import mini3t from '../../public/assets/excavadoras/excav-3500kg.png';
import plat12m from '../../public/assets/plataforma-articulada/articulada-12m-diesel.png';
import plat12md from '../../public/assets/plataformas-elevadoras-tijera/tijera-12m.png';
import cortehumedo from '../../public/assets/Maquinaria-corte/mesa-corte-humedo.png';
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './Maquinaria.scss';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";
import { useTranslation } from 'react-i18next';



const Maquinaria = () => {
  const { t } = useTranslation();
    return (
      <>
      <HeaderGeneral/>
      <div className='menumaquiiz'>
      <MenuMaquinaria/>
      </div>
      <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
        <div className="maquinaria-container">
          
          <h2>{t("translated-contacto-maquinaria-titulo")}</h2>
          <div className="botonesmaq-container">
  
            <Link to='/maquinaria/dumpers'><button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={dump3500} alt='dumper 3500'/>{t("translated-contacto-maquinaria-dumpers")}</button></Link>
             
            <Link to='/maquinaria/compactadoras'><button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={rod650} alt='Rodillo 650'/>{t("translated-contacto-maquinaria-compactadoras")}</button></Link>
            
            <Link to='/maquinaria/excavadoras'><button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={mini3t} alt='minigiratoria 3.5t'/>{t("translated-contacto-maquinaria-excavadoras")}</button></Link>
            
            <Link to='/maquinaria/plataformas-articuladas'><button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={plat12m} alt='PLAT ARTICULADA 12M'/>{t("translated-contacto-maquinaria-platarticuladas")}</button></Link>
            
            <Link to='/maquinaria/plataformas-tijera'> <button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={plat12md} alt='PLAT TIJERA'/>{t("translated-contacto-maquinaria-plattijera")}</button></Link>
            
            <Link to='/maquinaria-corte'> <button className='buttonMaqui'><img className='ceje-imgMaquinaria' src={cortehumedo} alt='MAQUINARIA DE CORTE'/>{t("translated-contacto-maquinaria-maqcorte")}</button></Link>
            
          </div>
        </div>
        <div className='maquinaria-footer'>
            <Footer/>
        </div>
      </>
    );
  };
  
  export default Maquinaria;