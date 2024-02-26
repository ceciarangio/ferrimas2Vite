import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import './Aceites.scss';
import Footer from '../../components/Footer/Footer';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';
import { useTranslation } from 'react-i18next';

const Aceites = () => {
  const {t} = useTranslation();
  const [aceites, setAceites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setAceites(response.data.aceites);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (<>
    <HeaderGeneral/>
    <MenuTiendaD/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
    <div className="aceites-container">
      <h2>{t("translated-shop-aceit-0")}</h2>
      <div className="aceites-row">
        {aceites && aceites.length > 0 ? (
            aceites.map((aceite, index) => (
            <div key={index} className="aceites">
            <p> {t(aceite.nombre)}</p>
        <img src={aceite.foto} alt={t(aceite.nombre)}/>
            </div>
          ))
        ) : (
          <p>Cargando ...</p>
        )}
    </div>
    </div>
    <div className='footer-aceites'>
      <Footer/>
    </div>
    </>);
};

export default Aceites;
