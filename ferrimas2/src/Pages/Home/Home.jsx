import { Link } from "react-router-dom";
import dumper from "../../public/assets/Dumpers/dump-2000kg.png";
import plataftijera from "../../public/assets/plataformas-elevadoras-tijera/tijera-12m-elec.png";
import maquinageneral from "../../public/assets/todo-maquinas.png";
import generadores from "../../public/assets/generador/generador-25kv.png";
import carretillaelevadora from "../../public/assets/carretilla-elevadora/carret-2000-diesel.png";
import excavadoras from "../../public/assets/excavadoras/excav-1000kg.png";
import './Home.scss';
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import { useTranslation } from 'react-i18next';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";



export default function Home() {
  const { t } = useTranslation();

  


    return <>
      <HeaderGeneral/>
      <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
    <main>
    <div className="container3claves__whiteBg">
      <div className="divTextoG">
        {/* <div className="bordeSeparador">
          <div className="bordeSeparador__separador"></div>
        </div> */}

        <div className="divTextoG__container">
          <h2 className="divTextoG__container--h2 animate__animated animate__fadeInLeft">{t("translated-Home-exploraNuestraGama")}</h2>
          <button className="divTextoG__container--button animate__animated animate__fadeInLeft">{t("translated-Home-botonOpcionesMaquinaria")}</button>
        </div>
      </div>
      </div>
      {/* <div className="bordeSeparador">
        <div className="bordeSeparador__separador"></div>
      </div> */}
      <div className="container3claves">
      
        <div className="container3claves__whiteBg">
        <h2 className="container3claves--h2">{t("translated-Home-ventajasFerriMas2")}</h2>
        <div className="container3claves__whiteBg__tresDivs">
          <div className="container3claves__div">
            <h3 className="container3claves--h3">{t("translated-Home-seguridad")}</h3>
            <p className="container3claves--p" dangerouslySetInnerHTML={{ __html: t("translated-Home-seguridad-descripción")}} />
          </div>
          <div className="container3claves__div">
            <h3 className="container3claves--h3">{t("translated-Home-ahorro")}</h3>
            <p className="container3claves--p">{t("translated-Home-ahorro-descripción")}</p>
          </div>
          <div className="container3claves__div">
            <h3 className="container3claves--h3">{t("translated-Home-eficiencia")}</h3>
            <p className="container3claves--p">{t("translated-Home-eficiencia-descripción")}</p>
          </div>
        </div>
        <p className="container3claves--p2" dangerouslySetInnerHTML={{ __html: t('translated-Home-tranquilidad') }}/>
      </div>
    </div>
    <div className="divMaqAlquiler">
      <h2 className="divMaqAlquiler--h2">{t("translated-Home-maquinaria-alquiler")}</h2>
      <p className="divMaqAlquiler--p">{t("translated-Home-masveinteanos")}</p>
    </div>
    <div className="cejeMaquinaria__contain">
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
            <Link to="/plataformas-tijera" className="linkWithoutDecoration">
            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={plataftijera} alt="plataforma 18mt" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-plataformas-elevadoras")}</p>
            </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/dumper" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={dumper} alt="dumper 2000kg" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-dumpers")}</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/excavadoras" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={excavadoras} alt="excavadoras" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-excavadoras")}</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/generadores" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={generadores} alt="generador 20kva" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-generadores")}</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/carretillas-elevadoras" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={carretillaelevadora} alt="carretillas elevadoras" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-carretillas-elevadoras")}</p>
          </Link>

          </div>
      </div>
      <div className="cejeMaquinaria__contain__maquinariaCard">
          <div className="cejeMaquinaria__contain__maquinariaCard__imageContainer">
          <Link to="/maquinaria" className="linkWithoutDecoration">

            <img className="cejeMaquinaria__contain__maquinariaCard__imageContainer--img" src={maquinageneral} alt="maquinaria general" />
            <p className="cejeMaquinaria__contain__maquinariaCard__imageContainer--p">{t("translated-Home-excavadoras")}</p>
          </Link>

          </div>
      </div>
    </div>
      <div className="ceje-container__presupuesto">
      <div className="ceje-container__presupuesto__whiteBg">
        <h2 className="ceje-container__presupuesto--h2">{t("translated-Home-consigue-presupuesto")}</h2>
        <div className="ceje-container__presupuesto__divs">
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p" dangerouslySetInnerHTML={{ __html: t("translated-Home-rentabilidad-garantizada")}} />
          </div>
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p" dangerouslySetInnerHTML={{ __html: t("translated-Home-soluciones-adaptadas")}} /></div>
          <div className="ceje-container__presupuesto__rentabilidad">
            <p className="ceje-container__presupuesto__rentabilidad--p" dangerouslySetInnerHTML={{ __html: t("translated-Home-atencion-cliente")}} />
          </div>
        </div>
        <Link to="/contacto"><button className="botonPresupuesto">{t("translated-Home-pide-presupuesto")}</button></Link>
      </div>
      </div>

      <footer className="footer">
        <Footer/>
      </footer>
      
    </main>

    </>
}