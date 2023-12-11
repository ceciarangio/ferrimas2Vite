import { Link } from "react-router-dom";
import Hamburguesa from "../../components/Hamburguesa/Hamburguesa";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import logo from '../../public/assets/logo.png';
import dumper from "../../public/assets/Dumpers/dumper 2000kg.jpg";
import plataftijera from "../../public/assets/plataformas-elevadoras-tijera/plataforma-gasoil-4x4.jpg";
import vallas from "../../public/assets/vallas/valla-peatonal2.png";
import generadores from "../../public/assets/generador/generador-20.jpg";
import carretillaelevadora from "../../public/assets/carretilla-elevadora/carret-2000-diesel.png";
import excavadoras from "../../public/assets/excavadoras/excavadora-5.5-kubota.jpg";
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
        <div className="container3claves__whiteBg__tresDivs">
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
        </div>
        <p className="container3claves--p2">Descubre la tranquilidad de trabajar con maquinaria en perfectas condiciones, controla tus gastos y maximiza la eficiencia con el alquiler de <span>FerriMas2</span>.<br/> ¡Haz avanzar tu obra de manera segura y eficiente!</p>
      </div>
    </div>
    <div className="divMaqAlquiler">
      <h2 className="divMaqAlquiler--h2">Maquinaria en Alquiler</h2>
      <p className="divMaqAlquiler--p">Más de 20 años trabajando junto a profesionales y particulares</p>
    </div>
    <div className="cejeMaquinaria__contain">
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
            <Link to="/plataformas-tijera" className="linkWithoutDecoration">
            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={plataftijera} alt="plataforma 18mt" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Plataformas Elevadoras</p>
            </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/dumper" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={dumper} alt="dumper 2000kg" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Dumpers</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/vallas" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={vallas} alt="valla peatonal" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Vallas</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/generadores" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={generadores} alt="generador 20kva" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Generadores</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/carretillas-elevadoras" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={carretillaelevadora} alt="carretillas elevadoras" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Carretillas Elevadoras</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/excavadoras" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={excavadoras} alt="excavadoras" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">Excavadoras</p>
          </Link>

          </div>
      </div>
    </div>
      <div className="ceje-container__presupuesto">
      <div className="ceje-container__presupuesto__whiteBg">
        <h2 className="ceje-container__presupuesto--h2">¡CONSIGUE TU PRESUPUESTO HOY MISMO!</h2>
        <div className="ceje-container__presupuesto__divs">
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p"><span>Rentabilidad Garantizada:</span><br></br> Alquilar nuestras máquinas para obras brinda un control de los gastos de manera eficiente y efectiva.</p>
          </div>
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p"><span> Soluciones Adaptadas a tus Necesidades:</span><br></br> Proporcionamos soluciones personalizadas que se ajustan específicamente a los requisitos de cada cliente.</p></div>
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p"><span>Atención al cliente: </span><br></br>Nos esforzamos por ofrecer un servicio al cliente excepcional, asegurando una experiencia satisfactoria para cada uno de nuestros clientes.</p>
          </div>
        </div>
        <Link to="/contacto"><button className="botonPresupuesto">¡Pide ya tu presupuesto!</button></Link>
      </div>
      </div>

      <footer className="footer">
        <Footer/>
      </footer>
      
    </main>

    </>
}