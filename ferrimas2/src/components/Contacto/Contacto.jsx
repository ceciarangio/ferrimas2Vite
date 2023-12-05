import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w7vb0zv', 'template_pgyg1ee', form.current, 'afvGr4RdG0TUlqiNu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Nombre o Empresa</label>
            <input type="text" name="user_name" placeholder='Introduzca Nombre o Empresa' />
            <label>Correo Electrónico</label>
            <input type="email" name="user_email" placeholder="Introduzca su e-mail" />
            <label>Teléfono o Móvil</label>
            <input type="number" name="user_number" placeholder="Introduzca su teléfono" />
            <label>Maquinaria</label>
            <input type="text" name="user_machinery" placeholder="Introduzca la maquina que desea alquilar" />
            <label>Población</label>
            <input type="text" name="user_city" placeholder="Introduzca su población" />
            <label>Fecha de alquiler</label>
            <input type="date" name="user_rentalDate" placeholder="Fecha que desea alquilar" />
            <label>Días de alquiler</label>
            <input type="number" name="user_rentalDays" placeholder="Días de alquiler" />
            <label>Comentarios</label>
            <input type="text" name="user_comments" placeholder="información adicional" />
            <input type="submit" value="Send" />
        </form>
    );
};
