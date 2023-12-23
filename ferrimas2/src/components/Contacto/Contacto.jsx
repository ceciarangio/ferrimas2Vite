import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
import "./Contacto.scss";

import { Link } from "react-router-dom";

import WhatsAppLink from "../WhatsAppLink/WhatsAppLink";

export default function Contacto() {
  const form = useRef();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value.trim();
    const userNumber = form.current.user_number.value.trim();

    if (!userEmail && !userNumber) {
      setError("Debes proporcionar al menos un correo electrónico o número de teléfono.");
      return;
    }

    emailjs
      .sendForm(
        "service_w7vb0zv",
        "template_pgyg1ee",
        form.current,
        "afvGr4RdG0TUlqiNu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setError(""); // Reinicia el mensaje de error si la operación fue exitosa
          setSuccessMessage("Formulario enviado con éxito! Nos pondremos en contacto a la brevedad, gracias.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    let timeout;

    if (successMessage) {
      timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [successMessage]);
  return (
    <>
      <HeaderGeneral />
      <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div className="ceje-bg">

        <form className="ceje-contacto-form" ref={form} onSubmit={sendEmail}>
        
        <div>
          <h3 className="ceje-contacto-form--h3">Formulario de Contacto</h3>
          <p className="ceje-contacto-form--p">
            Al completar este formulario de contacto, encontrarás soluciones para
            cualquier pregunta o consulta relacionada con nuestros servicios.</p>
          <p className="ceje-contacto-form--p"> Asimismo, podrás solicitar un presupuesto sin compromiso de manera
            sencilla y rápida mediante este formulario.</p>
            <p className="ceje-contacto-form--p1">Nuestro equipo de atención al cliente se encargará de proporcionarte una respuesta rápida en el
            menor tiempo posible. Estamos aquí para ayudarte.</p> 
          
        </div>
        <div className="ceje-contacto-form__formulario">
        <div className="ceje-contacto-form__formulario__izquierda">
          <div className="ceje-contacto-form__container">
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_name"
              placeholder="Nombre o Empresa"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Correo Electrónico
            </label> */}
            <input
              className="ceje-contacto-form__container--input"
              type="email"
              name="user_email"
              placeholder="Correo Electrónico"
              
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Teléfono o Móvil
            </label> */}
            <input
              className="ceje-contacto-form__container--input"
              type="number"
              name="user_number"
              placeholder="Número de teléfono"
              
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Maquinaria
            </label> */}
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_machinery"
              placeholder="¿Qué máquina desea alquilar?"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Población
            </label> */}
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_city"
              placeholder="Ciudad y población"
              required
            />
          </div>
          </div>
          <div className="ceje-contacto-form__formulario__derecha">
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Fecha de alquiler
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="date"
              name="user_rentalDate"
              placeholder="Fecha de alquiler"
              
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Días de alquiler
            </label> */}
            <input
              className="ceje-contacto-form__container--input"
              type="number"
              name="user_rentalDays"
              placeholder="Días de alquiler"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            {/* <label className="ceje-contacto-form__container--label">
              Comentarios
            </label> */}
            <textarea
              className="ceje-contacto-form__container--input--comentarios"
              name="user_comments"
              placeholder="Información adicional"
              />
          </div>
          </div>
          </div>
          <div className="ceje-contacto-form__container">
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
            <input
              className="ceje-contacto-form__container--submit"
              type="submit"
              value="Enviar"
            />
            <small className="small">Al pulsar en el botón 'Enviar', confirma que ha leído y acepta nuestra <Link to={'/politica-de-privacidad'}>Política de Privacidad</Link></small>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
