// Herramientas.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Herramientas.scss';

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
    <>
      <HeaderGeneral />
      <MenuTiendaD />
      <div className="herramientas-container">

        <div className="herramientas-row">
          {herramientas && herramientas.length > 0 ? (
            herramientas.map((herramienta, index) => (
              <div key={index} className="herramienta">
                <h3>{herramienta.nombre}</h3>
                <img src={herramienta.foto} alt={herramienta.nombre} />
                <p>{/* Agrega aquí cualquier información adicional que desees mostrar */}</p>
              </div>
            ))
          ) : (
            <p>Cargando herramientas...</p>
          )}
        </div>
      </div>
    </>
  );
 }

export default Herramientas;
