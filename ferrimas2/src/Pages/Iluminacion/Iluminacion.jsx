import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Iluminacion.scss'; // Asegúrate de tener la ruta correcta
import Footer from '../../components/Footer/Footer';

const Iluminacion = () => {
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
      <div className="iluminacion-container">
        <h2>Iluminación</h2>
        <div className='iluminacion-row'>
        {iluminacion && iluminacion.length > 0 ? (
          iluminacion.map((iluminaciones, index) => (
            <div key={index} className='iluminacion'>
              <p>{iluminaciones.nombre}</p>
              <img src={iluminaciones.foto} alt="lala" />
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
