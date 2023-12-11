import { useState, useEffect } from 'react';
import axios from 'axios';


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

  return (
    <div>
      <h2>Elementos de seguridad</h2>
      <ul>
        {seguridad && seguridad.length > 0 ? (
            seguridad.map((elemSeguridad, index) => (
            <li key={index}>
             <h3> {elemSeguridad.nombre}</h3>
        <img src={elemSeguridad.foto} alt="lala"/>
            </li>
          ))
        ) : (
          <p>Cargando ...</p>
        )}
      </ul>

    </div>
  );
};

export default Seguridad;
