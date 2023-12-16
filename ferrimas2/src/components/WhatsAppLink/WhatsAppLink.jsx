// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./WhatsAppLink.scss";
import whatsImage from "../../public/assets/whatsapp.png"


// eslint-disable-next-line react/prop-types
export default function WhatsAppLink({ phoneNumber, message }){


        const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        };
        

    return (
        <img className='whatsapp'
            src={whatsImage}
            alt="WhatsApp"
            style={{ cursor: 'pointer' }}
            onClick={handleWhatsAppClick}
        />
        );
}
