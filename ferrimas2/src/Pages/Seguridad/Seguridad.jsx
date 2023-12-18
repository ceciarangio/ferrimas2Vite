// Carteleria.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Seguridad.scss';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import Footer from '../../components/Footer/Footer';

const Seguridad = () => {
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
      <div>
        <div className="seguridad-container">
          <h2>Elementos de Seguridad</h2>
          {seguridadRows.map((row, rowIndex) => (
            <div key={rowIndex} className="seguridad-row">
              {row.map((seguridad, index) => (
                <div key={index} className="seguridad">
                <p>{seguridad.nombre}</p>
                  <img src={seguridad.foto} alt={seguridad.nombre} />
                  
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
