import { useState, useEffect } from 'react';
import axios from 'axios';

const Testeo1 = () => {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setTiendas(response.data.tienda);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Tiendas</h2>
      <ul>
        {tiendas.map((tienda, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {tienda.nombre}<br />
            <strong>Dirección:</strong> {tienda.direccion}<br />
            <strong>Teléfono:</strong> {tienda.telefono}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Testeo1;