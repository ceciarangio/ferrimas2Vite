
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import './Capazos.scss';

const Herramientas = () => {
  const [capazos, setCapazos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/ceciarangio/JsonFerrimas2/main/db.json');
        setCapazos(response.data.capazos);
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
      <div className="capazos-container">

        <div className="capazos-row">
          {capazos && capazos.length > 0 ? (
            capazos.map((capazo, index) => (
              <div key={index} className="capazo">
                <h3>{capazo.nombre}</h3>
                <img src={capazo.foto} alt={capazo.nombre} />
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
