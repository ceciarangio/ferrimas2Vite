import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import './Formacion.scss';

export default function Formacion(){

    return <>
        <HeaderGeneral/>
        <div>
            <div>
            <h2 className="h2-formacion">FORMACION</h2>
            <div className="div-containet-formacion">
            <img className="img-formacion" src='https://autoescuelaeurovial.com/assets/eurovial/images/logo-eurovial.png' alt="pagina autoescuela"/>
            <div className="div-formacion">
            <p>Colaboramos con Autoescuela Eurovial para proporcionar capacitación en el manejo de:</p>
                <ul>
                    <li>Carretillas Elevadoras</li>
                    <li>Plataformas Elevadoras</li>
                    <li>Manipulador telescópico</li>
                </ul>
                
                <p>Para más Información puedes contactar al <span>690883755</span></p>
                <p>O a travès de su página web <a>https://autoescuelaeurovial.com/es</a></p>
                </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
}