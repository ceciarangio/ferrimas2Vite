import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
// import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Tienda.scss';  // Importa tu archivo CSS si tienes estilos personalizados.
import discos from '../../public/assets/TiendaOk/Herramientas/discos.png';
import ilum from '../../public/assets/TiendaOk/Iluminacion/valisas.png';
import aceite from '../../public/assets/TiendaOk/aceites/aceite repsol.png';
import capazoss from '../../public/assets/TiendaOk/capazos/capazos-peque.png';
import calzado from '../../public/assets/TiendaOk/Seguridad/calzado.png';
import cartel from '../../public/assets/TiendaOk/Carteleria/prohibido-paso.png';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';


const Tienda = () => {
  return (
    <>
    <HeaderGeneral/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div className="tienda-container">
        {/* <MenuTiendaD /> */}
        <h2>TIENDA</h2>
        <div className="botones-container">

          <Link to='/herramientas'><button className='button'><img className='ceje-imgTienda' src={discos} alt='discos'/> HERRAMIENTAS</button></Link>
           
          <Link to='/aceites'><button className='button'><img className='ceje-imgTienda' src={aceite} alt='aceite'/> ACEITES</button></Link>
          
          <Link to='/capazos'><button className='button'><img className='ceje-imgTienda' src={capazoss} alt='capazoss'/> CAPAZOS</button></Link>
          
          <Link to='/iluminacion'><button className='button'><img className='ceje-imgTienda' src={ilum} alt='ilum'/> ILUMINACION</button></Link>
          
          <Link to='/elementos-seguridad'> <button className='button'><img className='ceje-imgTienda' src={calzado} alt='calzado'/> SEGURIDAD</button></Link>
          
          <Link to='/carteleria'> <button className='button'><img className='ceje-imgTienda' src={cartel} alt='cartel'/> CARTELERIA</button></Link>
          
        </div>
      </div>
      <div className='tienda-footer'>
          <Footer/>
      </div>
    </>
  );
};

export default Tienda;
