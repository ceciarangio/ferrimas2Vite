import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import './Faq.scss';
import { useState } from "react";
import 'animate.css';
import WhatsAppLink from "../../components/WhatsAppLink/WhatsAppLink";

export default function Faq(){
    const [showHide, setShowHide] = useState({
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
        faq6: false,
        faq7: false,
        faq8: false,
        faq9: false,
        faq10: false,
        faq11: false,
        faq12: false
    });

    const mostrar = function(evento){
        setShowHide(prevState => {
            return {
                ...prevState,
                [evento]: !prevState[evento]
            };
        });
    };
    

    return <>
        <HeaderGeneral/>
        <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
        </div>
        <h2 className="ceje-faq-titulo">Preguntas Frecuentes</h2>
        <div className="ceje-faq-container">
            <div onClick={() => mostrar('faq1')} className="ceje-faq-container__faq1">
                <h3 className="ceje-faq-container__faq1--h3">¿Cuáles son los beneficios de alquilar maquinaria en lugar de comprar?</h3>
                {showHide.faq1 === true && <h4 className="ceje-faq-container__faq1--h4 animate__fadeInLeftBig">
                    Si quieres saber cuáles son los beneficios de alquilar maquinaria en lugar de comprar, visita <Link to="/ventajas">este enlace </Link>.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq2')} className="ceje-faq-container__faq2">
                <h3 className="ceje-faq-container__faq2--h3">¿Qué tipos de maquinaria de obra tienen disponible para alquilar?</h3>
                {showHide.faq2 === true &&<h4 className="ceje-faq-container__faq2--h3 animate__fadeInLeftBig">
                    Disponemos de multiples tipos de maquinaria, como Dumpers, Plataformas elevadoras ó excavadoras. Puedes ver la lista completa de maquinaria <Link to={'/maquinaria'}>AQUÍ</Link>.</h4>}
            </div>
            <div onClick={() => mostrar('faq3')} className="ceje-faq-container__faq3">
                <h3 className="ceje-faq-container__faq3--h3">¿Cuál es la duración mínima de alquiler de la maquinaria?</h3>
                {showHide.faq3 === true &&<h4 className="ceje-faq-container__faq3--h3 animate__fadeInLeftBig">
                    La duración mínima de alquiler es de 1 (un) día.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq4')} className="ceje-faq-container__faq4">
                <h3 className="ceje-faq-container__faq4--h3">¿Cómo se determinan los costos de alquiler?</h3>
                {showHide.faq4 === true &&<h4 className="ceje-faq-container__faq4--h3 animate__fadeInLeftBig">
                    Los costos de alquiler variarán en función de la maquinaria y cantidad de días. Para saber más, rellene el formulario de contacto que puede encontrar en <Link to={'/contacto'}>este enlace</Link>.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq5')} className="ceje-faq-container__faq5">
                <h3 className="ceje-faq-container__faq5--h3">¿Ofrecen entrega y recogida de la maquinaria en el lugar de trabajo?</h3>
                {showHide.faq5 === true &&<h4 className="ceje-faq-container__faq5--h3 animate__fadeInLeftBig">
                    Sí. En estos casos al precio se le añaden los portes de la maquinaria, que variarán en función de la distancia.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq6')} className="ceje-faq-container__faq6">
                <h3 className="ceje-faq-container__faq6--h3">¿Puedo alquilar maquinaria para proyectos a largo plazo?</h3>
                {showHide.faq6 === true &&<h4 className="ceje-faq-container__faq6--h3 animate__fadeInLeftBig">
                    Sí, no hay ningún problema.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq7')} className="ceje-faq-container__faq7">
                <h3 className="ceje-faq-container__faq7--h3">¿Se proporciona asesoramiento técnico para la selección de maquinaria?</h3>
                {showHide.faq7 === true &&<h4 className="ceje-faq-container__faq7--h3 animate__fadeInLeftBig">
                    Sí. En caso de necesitar asesoramiento, estaremos encantamos de ayudarle.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq8')} className="ceje-faq-container__faq8">
                <h3 className="ceje-faq-container__faq8--h3">¿Ofrecen opciones de alquiler con operador?</h3>
                {showHide.faq8 === true &&<h4 className="ceje-faq-container__faq8--h3 animate__fadeInLeftBig">
                    No. El alquiler es solamente de la maquinaria.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq9')} className="ceje-faq-container__faq9">
                <h3 className="ceje-faq-container__faq9--h3">¿Cuál es el proceso para reservar y confirmar un alquiler?</h3>
                {showHide.faq9 === true &&<h4 className="ceje-faq-container__faq9--h3 animate__fadeInLeftBig">
                    Para reservar un alquiler, hay que ponerse en contacto con nuestras oficinas. Desde allí le asesorarán y le guiarán en el proceso de alquiler y confirmación del mismo. También puede contactar con nosotros a través de email o con nuestro <Link to={'/contacto'}>formulario</Link> y le contactaremos a la mayor brevedad posible.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq10')} className="ceje-faq-container__faq10">
                <h3 className="ceje-faq-container__faq10--h3">¿Qué sucede si la maquinaria se avería durante el período de alquiler?</h3>
                {showHide.faq10 === true &&<h4 className="ceje-faq-container__faq10--h3 animate__fadeInLeftBig">
                    En caso de avería, debe ponerse en contacto con nosotros tan pronto le sea posible con el fin de solucionar esa avería de la forma más rápida posible.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq11')} className="ceje-faq-container__faq11">
                <h3 className="ceje-faq-container__faq11--h3">¿Cómo puedo realizar el pago del alquiler?</h3>
                {showHide.faq11 === true &&<h4 className="ceje-faq-container__faq11--h3 animate__fadeInLeftBig">
                    El pago del alquiler se puede realizar en efectivo, tarjeta o transferéncia bancaria.
                </h4>}
            </div>
            <div onClick={() => mostrar('faq12')} className="ceje-faq-container__faq12">
                <h3 className="ceje-faq-container__faq12--h3">¿Cuál es el horario de atención al cliente para consultas y asistencia?</h3>
                {showHide.faq12 === true &&<h4 className="ceje-faq-container__faq12--h3 animate__fadeInLeftBig">
                    Nuestro horario de oficina es de 7:30h a 13:30h y de 15:30h a 18:30h.
                </h4>}
            </div>
        </div>
        <footer className="ceje-faq-footer">
            <Footer/>
        </footer>
    </>
}