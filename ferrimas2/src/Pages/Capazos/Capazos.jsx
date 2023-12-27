
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Capazos.scss';
import Footer from '../../components/Footer/Footer';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';
import { useTranslation } from 'react-i18next';

const Herramientas = () => {
  const {t} = useTranslation();
  const [capazos, setCapazos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setCapazos(response.data.capazos);
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
      <div className="capazos-container">
        <h2>{t("translated-shop-capazos-0")}</h2>
        <div className="capazos-row">
          {capazos && capazos.length > 0 ? (
            capazos.map((capazo, index) => (
              <div key={index} className="capazo">
                <h3>{t(capazo.nombre)}</h3>
                <img src={capazo.foto} alt={t(capazo.nombre)} />
                
              </div>
            ))
          ) : (
            <p>Cargando herramientas...</p>
          )}
        </div>
      </div>
      <div className='footer-capazos'>
        <Footer/>
      </div>
    </>
  );
 }

export default Herramientas;
