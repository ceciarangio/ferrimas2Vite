// Carteleria.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Carteleria.scss';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import Footer from '../../components/Footer/Footer';

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
    <>
      <HeaderGeneral />
      <MenuTiendaD />
      <div>
        <div className="carteleria-container">
          <h2>Carteles en general</h2>
            <div className="carteles-row">
              {carteleria.map((cartel, index) => (
                <div key={index} className="cartel">
                <p>{cartel.nombre}</p>
                  <img className='img-carteleria' src={cartel.foto} alt={cartel.nombre} />
                  
                </div>
              ))}
            </div>
          
        </div>
      </div>
      <div className='footer-carteles'>
        <Footer/>
      </div>
    </>
  );
};

export default Carteleria;
