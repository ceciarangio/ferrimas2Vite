import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuTiendaD from '../../components/MenuTiendaD/MenuTiendaD';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import './Aceites.scss';
import Footer from '../../components/Footer/Footer';

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

  return (<>
    <HeaderGeneral/>
    <MenuTiendaD/>
    <div className="aceites-container">
      <h2>Aceites y Limpiaparabrisas</h2>
      <div className="aceites-row">
        {aceites && aceites.length > 0 ? (
            aceites.map((aceite, index) => (
            <div key={index} className="aceites">
             <p> {aceite.nombre}</p>
        <img src={aceite.foto} alt="lala"/>
            </div>
          ))
        ) : (
          <p>Cargando ...</p>
        )}
    </div>
    </div>
    <div className='footer-aceites'>
      <Footer/>
    </div>
    </>);
};

export default Aceites;
