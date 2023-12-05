import baterias from '../../public/assets/TiendaOk/Herramientas/bater.png';
import baterias2 from '../../public/assets/TiendaOk/Herramientas/baterias.png';
import bidones from '../../public/assets/TiendaOk/Herramientas/bidon gasolina.png';
import brocasBosch from '../../public/assets/TiendaOk/Herramientas/brocas.png';
import brocas from '../../public/assets/TiendaOk/Herramientas/brocas2.png';
import carracas from '../../public/assets/TiendaOk/Herramientas/carracas.png';
import carretillas from '../../public/assets/TiendaOk/Herramientas/carretillas.png';
import discos from '../../public/assets/TiendaOk/Herramientas/discos.png';
import limpieza from '../../public/assets/TiendaOk/Herramientas/escoba-mocho-esponjas.png';
import espatulas from '../../public/assets/TiendaOk/Herramientas/espatula-nivelador.png';
import espumas from '../../public/assets/TiendaOk/Herramientas/espumas.png';
import generadores from '../../public/assets/TiendaOk/Herramientas/generador.png';
import grasas from '../../public/assets/TiendaOk/Herramientas/grasas.png';
import guantes from '../../public/assets/TiendaOk/Herramientas/guantes.png';
import hacha from '../../public/assets/TiendaOk/Herramientas/hacha.png';
import herramGral from '../../public/assets/TiendaOk/Herramientas/herram-general.png';
import llaves from '../../public/assets/TiendaOk/Herramientas/llaves.png';
import llaves2 from '../../public/assets/TiendaOk/Herramientas/llaves2.png';
import mangos from '../../public/assets/TiendaOk/Herramientas/Mangos-pala-hacha.png';
import picos from '../../public/assets/TiendaOk/Herramientas/picos-rastrillos.png';
import sogas from '../../public/assets/TiendaOk/Herramientas/sogas.png';
import tacos from '../../public/assets/TiendaOk/Herramientas/taco-fisher.png';
import talochas from '../../public/assets/TiendaOk/Herramientas/talochas.png';
import trencilla from '../../public/assets/TiendaOk/Herramientas/trencilla.png';
import cepillo from '../../public/assets/TiendaOk/Herramientas/cepillo.png';
import cierra from '../../public/assets/TiendaOk/Herramientas/cierra.png';
import carracas2 from '../../public/assets/TiendaOk/Herramientas/carracas2.png';
import bombaPresion from '../../public/assets/TiendaOk/Herramientas/bomba-presion.png';
import palita from '../../public/assets/TiendaOk/Herramientas/palita.png';
import pintor from '../../public/assets/TiendaOk/Herramientas/prepa-pintar.png'
import ElementosTienda from '../../components/ElementosTienda/ElementosTienda';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';


import './Tienda.scss';



export default function Tienda(){

  return <>
  <HeaderGeneral/>
  <div className='ceje-Tienda'>
    <div className='ceje-Tienda__Elementos'>
      <ElementosTienda/>
    </div>
    <div className='ceje-Tienda__Productos'>
      <h2>Tienda</h2>
      <h3>Herramientas</h3>
      <h3>Seguridad</h3>
      <h3>Iluminación</h3>
      <h3>Capazos</h3>
      <h3>Aceites</h3>
    </div>
  </div>
  </>
}