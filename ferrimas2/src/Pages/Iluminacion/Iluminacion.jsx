import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Iluminacion.scss'; // Asegúrate de tener la ruta correcta
import Footer from '../../components/Footer/Footer';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';
import { useTranslation } from 'react-i18next';

const Iluminacion = () => {
  const {t} = useTranslation();
  const [iluminacion, setIluminacion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setIluminacion(response.data.iluminacion);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderGeneral />
      <MenuTiendaD />
      <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div className="iluminacion-container">
        <h2>{t("translated-shop-ilum-0")}</h2>
        <div className='iluminacion-row'>
        {iluminacion && iluminacion.length > 0 ? (
          iluminacion.map((iluminaciones, index) => (
            <div key={index} className='iluminacion'>
              <p>{t(iluminaciones.nombre)}</p>
              <img src={iluminaciones.foto} alt={t(iluminaciones.nombre)} />
            </div>
          ))
        ) : (
          <p>Cargando iluminacion...</p>
        )}
        </div>
      </div>
      <div className="footer-iluminacion">
        <Footer/>
      </div>
    </>
  );
};

export default Iluminacion;
