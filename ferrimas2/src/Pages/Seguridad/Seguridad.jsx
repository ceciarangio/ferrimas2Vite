// Carteleria.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Seguridad.scss';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import Footer from '../../components/Footer/Footer';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';
import { useTranslation } from 'react-i18next';

const Seguridad = () => {
  const {t} = useTranslation();
  const [seguridad, setSeguridad] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setSeguridad(response.data.seguridad);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  // Función para dividir los carteles en filas de 3
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const seguridadRows = chunkArray(seguridad, 3);

  return (
    <>
      <HeaderGeneral />
      <MenuTiendaD />
      <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
      <div>
        <div className="seguridad-container">
          <h2>{t("translated-shop-segu-0")}</h2>
          {seguridadRows.map((row, rowIndex) => (
            <div key={rowIndex} className="seguridad-row">
              {row.map((seguridad, index) => (
                <div key={index} className="seguridad">
                <p>{t(seguridad.nombre)}</p>
                  <img src={seguridad.foto} alt={t(seguridad.nombre)} />
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='footer-seguridad'>
        <Footer/>
      </div>
    </>
  );
};

export default Seguridad;
