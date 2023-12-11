import { useState, useEffect } from 'react';
import axios from 'axios';


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
    <div>
      <h2>Ilumianción</h2>
      <ul>
        {iluminacion && iluminacion.length > 0 ? (
            iluminacion.map((iluminaciones, index) => (
            <li key={index}>
             <h3> {iluminaciones.nombre}</h3>
        <img src={iluminaciones.foto} alt="lala"/>
            </li>
          ))
        ) : (
          <p>Cargando iluminacion...</p>
        )}
      </ul>

    </div>
  );
};

export default Iluminacion;
