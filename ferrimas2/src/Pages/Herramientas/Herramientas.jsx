import { useState, useEffect } from 'react';
import axios from 'axios';


const Herramientas = () => {
  const [herramientas, setHerramientas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setHerramientas(response.data.herramientas);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>HERRAMIENTAS</h2>
      <ul>
        {herramientas && herramientas.length > 0 ? (
            herramientas.map((herramienta, index) => (
            <li key={index}>
             <h3> {herramienta.nombre}</h3>
        <img src={herramienta.foto} alt="lala"/>
            </li>
          ))
        ) : (
          <p>Cargando herramientas...</p>
        )}
      </ul>

    </div>
  );
};

export default Herramientas;
