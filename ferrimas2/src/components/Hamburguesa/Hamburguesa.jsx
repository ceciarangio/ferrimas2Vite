import { useState } from 'react';
import './Hamburguesa.scss';
import 'animate.css';
import burguerButton from '../../public/assets/burguerButton.png';
import { Link } from 'react-router-dom';



export default function Hamburguesa() {



    const [buttonIsActivated, setButtonIsActivated] = useState(false);



    let toggleButton = function(){
            setButtonIsActivated(!buttonIsActivated);
            console.log(buttonIsActivated);
        }

    


    return(<>
        {buttonIsActivated && <div className='haFondoGris'> </div> }

        {buttonIsActivated && 
        <div className="haMenu animate__animated animate__fadeInRight">
            <div className='haMenu__div'>
                <button onClick={toggleButton} className='haMenu__div--button'> <img className='haMenu__div--button--img' src='https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/9419C1A3-4787-4177-B727-B2338C933115.png' alt=''/> </button>
            </div>
            <Link to={'/tienda'}><p className="haMenu--a">Tienda</p></Link>
            {/* <Link to='/sobre-nosotros'><p className="haMenu--a">Sobre nosotros</p></Link> */}
            <Link to='/ventajas'><p className="haMenu--a">Nuestras ventajas</p></Link>
            <p className="haMenu--a">Formación</p>
            <Link to='/maquinaria'><p className="haMenu--a">Alquiler de maquinaria</p></Link>
            <Link to='/condiciones-alquiler'><p className="haMenu--a">Condiciones de alquiler</p></Link>
            <p className="haMenu--a">Preguntas frecuentes (F.A.Q.)</p>
            <Link to='/contacto'><p className="haMenu--a">Contacto</p></Link>
        </div>}

        <div className="Hamburguesa">
            <button className='Hamburguesa__toggleButton' onClick={toggleButton}> <img className='Hamburguesa__toggleButton--img' src={burguerButton} alt='threelinesbutton'></img> </button>
        </div>        
</>
    )
}