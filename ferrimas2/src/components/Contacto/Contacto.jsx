import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
import "./Contacto.scss";
import { useTranslation } from 'react-i18next';

import { Link } from "react-router-dom";

import WhatsAppLink from "../WhatsAppLink/WhatsAppLink";

export default function Contacto() {
  const { t } = useTranslation();

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
          setSuccessMessage(t("translated-contacto-placeholder-successMessage"));
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
          <h3 className="ceje-contacto-form--h3">{t("translated-contacto-titular")}</h3>
          <p className="ceje-contacto-form--p">
          {t("translated-contacto-alCompletar")}</p>
          <p className="ceje-contacto-form--p"> {t("translated-contacto-asimismo")}</p>
            <p className="ceje-contacto-form--p1">{t("translated-contacto-nuestroEquipo")}</p> 
          
        </div>
        <div className="ceje-contacto-form__formulario">
        <div className="ceje-contacto-form__formulario__izquierda">
          <div className="ceje-contacto-form__container">
            <input
              className="ceje-contacto-form__container--input"
              type="text"
              name="user_name"
              placeholder={t("translated-contacto-placeholder-nombre")}
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
              placeholder={t("translated-contacto-placeholder-email")}
              
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
              placeholder={t("translated-contacto-placeholder-phonenumber")}
              
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
              placeholder={t("translated-contacto-placeholder-machine")}
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
              placeholder={t("translated-contacto-placeholder-ciudad")}
              required
            />
          </div>
          </div>
          <div className="ceje-contacto-form__formulario__derecha">
          <div className="ceje-contacto-form__container">
            <label className="ceje-contacto-form__container--label">
            {t("translated-contacto-placeholder-fechaAlquiler")}
            </label>
            <input
              className="ceje-contacto-form__container--input"
              type="date"
              name="user_rentalDate"
              placeholder={t("translated-contacto-placeholder-fechaAlquiler")}
              
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
              placeholder={t("translated-contacto-placeholder-diasAlquiler")}
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
              placeholder={t("translated-contacto-placeholder-infoAdicional")}
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
              value={t("translated-contacto-placeholder-enviar")}
            />
            <small className="small">{t("translated-contacto-placeholder-alpulsar")} <Link to={'/politica-de-privacidad'}>{t("translated-contacto-placeholder-polipriv")}</Link></small>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
