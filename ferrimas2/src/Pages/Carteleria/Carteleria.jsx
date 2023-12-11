import { useState, useEffect } from 'react';
import axios from 'axios';


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

  return (
    <div>
      <h2>Carteles en general</h2>
      <ul>
        {carteleria && carteleria.length > 0 ? (
            carteleria.map((carteles, index) => (
            <li key={index}>
             <h3> {carteles.nombre}</h3>
        <img src={carteles.foto} alt="lala"/>
            </li>
          ))
        ) : (
          <p>Cargando ...</p>
        )}
      </ul>

    </div>
  );
};

export default Carteleria;
