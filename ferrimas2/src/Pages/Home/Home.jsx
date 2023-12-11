import { Link } from "react-router-dom";
import Hamburguesa from "../../components/Hamburguesa/Hamburguesa";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import logo from '../../public/assets/logo.png';
import dumper from "../../public/assets/Dumpers/dump-2000kg.png";
import plataftijera from "../../public/assets/plataformas-elevadoras-tijera/tijera-12m-elec.png";
import vallas from "../../public/assets/vallas/valla-peatonal.png";
import generadores from "../../public/assets/generador/generador-25kv.png";
import carretillaelevadora from "../../public/assets/carretilla-elevadora/carret-2000-diesel.png";
import excavadoras from "../../public/assets/excavadoras/excav-3500kg.png";
import './Home.scss';
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";

export default function Home() {

    return <>
      <HeaderGeneral/>
      
    <main>
      <div className="divTextoG">
        <div className="bordeSeparador">
          <div className="bordeSeparador__separador"></div>
        </div>

        <div className="divTextoG__container">
          <h2 className="divTextoG__container--h2 animate__animated animate__fadeInLeft">Explora nuestra completa gama de maquinaria de obra, disponible para alquiler.</h2>
          <button className="divTextoG__container--button animate__animated animate__fadeInLeft">Ver opciones de maquinaria</button>
        </div>
      </div>
      <div className="bordeSeparador">
        <div className="bordeSeparador__separador"></div>
      </div>
      <div className="container3claves">
      <div className="container3claves__whiteBg">
        <h2 className="container3claves--h2">DESCUBRE LAS VENTAJAS CON FERRIMAS2</h2>
        <div className="container3claves__div">
          <h3 className="container3claves--h3">SEGURIDAD</h3>
          <p className="container3claves--p">Optar por el alquiler de maquinaria para construcción con <span>FerriMas2</span> te garantiza la solución más segura, completa y rentable para impulsar tu obra o proyecto. Nuestra maquinaria siempre se encuentra en condiciones óptimas, asegurando un entorno de trabajo seguro.</p>
        </div>
        <div className="container3claves__div">
          <h3 className="container3claves--h3">AHORRO</h3>
          <p className="container3claves--p">Al elegir el alquiler, tienes el control total sobre los costes de mantenimiento, incluyendo seguro de responsabilidad civil, transporte, almacenamiento y mantenimiento mecánico. Esto significa un ahorro significativo, ya que no tienes que preocuparte por estos aspectos.</p>
        </div>
        <div className="container3claves__div">
          <h3 className="container3claves--h3">EFICIENCIA</h3>
          <p className="container3claves--p">Seleccionar la máquina adecuada para cada trabajo, proyecto o evento garantiza eficiencia tanto en tiempo como en costes adicionales. El alquiler de maquinaria te permite adaptar tus recursos según las necesidades específicas de cada tarea, optimizando el rendimiento.</p>
        </div>
        <p className="container3claves--p2">Descubre la tranquilidad de trabajar con maquinaria en perfectas condiciones, controla tus gastos y maximiza la eficiencia con el alquiler de <span>FerriMas2</span>.<br/> ¡Haz avanzar tu obra de manera segura y eficiente!</p>
      </div>
    </div>
    <div className="divMaqAlquiler">
      <h2>Maquinaria en Alquiler</h2>
      <p>Más de 20 años trabajando junto a profesionales y particulares</p>
    </div>
    <div className="cejeMaquinaria__contain">
      <div className="maquinariaCard">
        <Link to="/plataformas-tijera" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img src={plataftijera} alt="plataforma 18mt" />
            <p>Plataformas Elevadoras</p>
          </div>
        </Link>
      </div>
      <div className="maquinariaCard">
        <Link to="/dumper" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img src={dumper} alt="dumper 2000kg" />
            <p>Dumpers</p>
          </div>
        </Link>
      </div>
      <div className="maquinariaCard">
        <Link to="/vallas" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img src={vallas} alt="valla peatonal" />
            <p>Vallas</p>
          </div>
        </Link>
      </div>
      <div className="maquinariaCard">
        <Link to="/generadores" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img className="generador" src={generadores} alt="generador 20kva" />
            <p>Generadores</p>
          </div>
        </Link>
      </div>
      <div className="maquinariaCard">
        <Link to="/carretillas-elevadoras" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img src={carretillaelevadora} alt="carretillas elevadoras" />
            <p>Carretillas Elevadoras</p>
          </div>
        </Link>
      </div>
      <div className="maquinariaCard">
        <Link to="/excavadoras" className="linkWithoutDecoration">
          <div className="imageContainer">
            <img src={excavadoras} alt="excavadoras" />
            <p>Excavadoras</p>
          </div>
        </Link>
      </div>
    </div>
      <div className="ceje-container__presupuesto">
      <div className="ceje-container__presupuesto__whiteBg">
        <h2 className="ceje-container__presupuesto--h2">¡CONSIGUE TU PRESUPUESTO HOY MISMO!</h2>
        <div className="ceje-container__presupuesto__rentabilidad">
          <p className="ceje-container__presupuesto--p"><span>Rentabilidad Garantizada:</span> Alquilar nuestras máquinas para obras brinda un control de los gastos de manera eficiente y efectiva.</p>
        </div>
        <div className="ceje-container__presupuesto__necesidades">
          <p className="ceje-container__presupuesto--p"><span> Soluciones Adaptadas a tus Necesidades:</span> Proporcionamos soluciones personalizadas que se ajustan específicamente a los requisitos de cada cliente.</p></div>
        <div className="ceje-container__presupuesto__atencion">
          <p className="ceje-container__presupuesto--p"><span>Atención al cliente: </span>Nos esforzamos por ofrecer un servicio al cliente excepcional, asegurando una experiencia satisfactoria para cada uno de nuestros clientes.</p>
        </div>
        <Link to="/contacto"><button>¡Pide ya tu presupuesto!</button></Link>
      </div>
      </div>

      <footer className="footer">
        <Footer/>
      </footer>
      
    </main>

    </>
}