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


const Tienda = () => {
  return (
    <>
    <HeaderGeneral/>
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

// const [herramientaSeleccionada, setHerramientaSeleccionada] = useState(null);
// const [herramientas, setHerramientas] = useState(null);
// const [aceiteSeleccionado, setAceiteSeleccionado] = useState(null);
// const [capazoSeleccionado, setCapazoSeleccionado] = useState(null);
// const [iluminacionSeleccionada, setIluminacionSeleccionada] = useState(null);
// const [seguridadSeleccionada, setSeguridadSeleccionada] = useState(null);
// const [carteleriaSeleccionada, setCarteleriaSeleccionada] = useState(null);


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
//       setHerramientaSeleccionada(response.data.herramientas[12]);
//       setHerramientas(response.data.herramientas[6]);
//       setAceiteSeleccionado(response.data.aceites[0]);
//       setCapazoSeleccionado(response.data.capazos[0]);
//       setIluminacionSeleccionada(response.data.iluminacion[0]);
//       setSeguridadSeleccionada(response.data.seguridad[0]);
//       setCarteleriaSeleccionada(response.data.carteleria[5]);
//     } catch (error) {
//       console.error('Error al obtener datos:', error);
//     }
//   };

//   fetchData();
// }, []);


// {herramientaSeleccionada ? (
//   <div>
//     <img src={herramientaSeleccionada.foto} alt={herramientaSeleccionada.nombre} />
    
//   </div>
// ) : (
//   <p>Cargando herramienta...</p>
// )}
// </div>
// <div>
// {herramientas ? (
//   <div>
//     <img src={herramientas.foto} alt={herramientas.nombre} />
    
//   </div>
// ) : (
//   <p>Cargando herramienta...</p>
// )}
// </div>
// <div>
// <h2>Aceites</h2>
// {aceiteSeleccionado ? (
//   <div>
//     <img src={aceiteSeleccionado.foto} alt={aceiteSeleccionado.nombre} />
//   </div>
// ) : (
//   <p>Cargando aceites...</p>
// )}
// </div>
// <div>
// <h2>Capazos</h2>
// {capazoSeleccionado ? (
//   <div>
//     <img src={capazoSeleccionado.foto} alt={capazoSeleccionado.nombre} />
//   </div>
// ) : (
//   <p>Cargando capazos...</p>
// )}
// </div>
// <div>
// <h2>Ilumianción</h2>
// {iluminacionSeleccionada ? (
//   <div>
//      <img src={iluminacionSeleccionada.foto} alt={iluminacionSeleccionada.nombre} />
//   </div>
// ) : (
//   <p>Cargando iluminación...</p>
// )}
// </div>
// <div>
// <h2>Elementos de seguridad</h2>
// {seguridadSeleccionada ? (
//   <div>
//   <img src={seguridadSeleccionada.foto} alt={seguridadSeleccionada.nombre} />
//   </div>
// ) : (
//   <p>Cargando herramienta...</p>
// )}
// </div>
// <div>
// <h2>Cartelería</h2>
// {carteleriaSeleccionada ? (
//   <div>
//   <img src={carteleriaSeleccionada.foto} alt={carteleriaSeleccionada.nombre} />
//   </div>
// ) : (
//   <p>Cargando Cartelería...</p>
// )}
// </div>