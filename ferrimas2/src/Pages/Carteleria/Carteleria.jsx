// Carteleria.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Carteleria.scss';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';

const Carteleria = () => {
  const [carteleria, setCarteleria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setCarteleria(response.data.carteleria);
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

  const cartelesRows = chunkArray(carteleria, 3);

  return (
    <>
      <HeaderGeneral />
      <MenuTiendaD />
      <div>
        <div className="carteleria-container">
          <h2>Carteles en general</h2>
          {cartelesRows.map((row, rowIndex) => (
            <div key={rowIndex} className="carteles-row">
              {row.map((cartel, index) => (
                <div key={index} className="cartel">
                <p>{cartel.nombre}</p>
                  <img src={cartel.foto} alt={cartel.nombre} />
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carteleria;
