import { useState, useEffect } from 'react';
import axios from 'axios';


const Aceites = () => {
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

  return (
    <div>
      <h2>Aceites y Limpiaparabrisas</h2>
      <ul>
        {aceites && aceites.length > 0 ? (
            aceites.map((aceite, index) => (
            <li key={index}>
             <h3> {aceite.nombre}</h3>
        <img src={aceite.foto} alt="lala"/>
            </li>
          ))
        ) : (
          <p>Cargando ...</p>
        )}
      </ul>

    </div>
  );
};

export default Aceites;
