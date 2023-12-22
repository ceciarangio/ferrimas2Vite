import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
import "./Contacto.scss";
import WhatsAppLink from "../WhatsAppLink/WhatsAppLink";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            cualquier pregunta o consulta relacionada con nuestros servicios.
           <p> Asimismo, podrás solicitar un presupuesto sin compromiso de manera
            sencilla y rápida mediante este formulario.</p>
            <p>Nuestro equipo de atención al cliente se encargará de proporcionarte una respuesta rápida en el
            menor tiempo posible. Estamos aquí para ayudarte.</p> 
          </p>
        </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Nombre o Empresa
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_name"
              placeholder="Introduzca Nombre o Empresa"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Correo Electrónico
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="email"
              name="user_email"
              placeholder="Introduzca su e-mail"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Teléfono o Móvil
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="number"
              name="user_number"
              placeholder="Introduzca su teléfono"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Maquinaria
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_machinery"
              placeholder="¿Qué máquina desea alquilar?"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Población
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_city"
              placeholder="Introduzca su población"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Fecha de alquiler
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="date"
              name="user_rentalDate"
              placeholder="Fecha que desea alquilar"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Días de alquiler
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="number"
              name="user_rentalDays"
              placeholder="Días de alquiler"
              required
            />
          </div>
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
              Comentarios
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_comments"
              placeholder="Información adicional"
            />
          </div>
          <div className="ceje-contacto-form__container">
            <input
              className="ceje-contacto-form__container--submit"
              type="submit"
              value="Enviar"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
