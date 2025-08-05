import './Footer.scss';
import { Link } from "react-router-dom";
import moves from '../../LOGOS-tesla/moves.png';
import idae from '../../LOGOS-tesla/Logotipo_IDAE.svg.png';
import union from '../../LOGOS-tesla/logo-union-europea.png';
import plan from '../../LOGOS-tesla/Logotipo_del_Plan_de_Recuperación,_Transformación_y_Resiliencia.svg.png';
import financiado from '../../LOGOS-tesla/es_financiado_por_la_union_europea_pos.png';


export default function Footer() {





    return <>
        <div className="ceje-footer">
            <div className="ceje-footer__delegacion">
                <ul className="ceje-footer__delegacion__direccion">
                    <li className="ceje-footer__delegacion__direccion__li">
                        <h2 className="ceje-footer__delegacion__direccion--h2">Dirección:</h2>
                    </li>
                    <li className="ceje-footer__delegacion__direccion__li">
                        <p className="ceje-footer__delegacion__direccion--p">Polígono Industrial l'Alberca, C/ Benifato, 27, 03530 La Nucia (Alicante)</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="ceje-footer__delegacion__contacto">
                    <li className="ceje-footer__delegacion__direccion__li">
                        <h2 className="ceje-footer__delegacion__contacto--h2">Contacto:</h2>
                    </li>
                    <li className="ceje-footer__delegacion__direccion__li">
                        <p className="ceje-footer__delegacion__contacto--p">ferrimas2@gmail.com</p>
                    </li>
                    <li className="ceje-footer__delegacion__direccion__li">
                        <p className="ceje-footer__delegacion__contacto--p">(+34)966896113</p>
                    </li>
                    <li className="ceje-footer__delegacion__direccion__li">
                        <p className="ceje-footer__delegacion__contacto--p">647834593</p>
                    </li>
                </ul>
            </div>

        <div className="ceje-footer__subvencion">
            <p className="ceje-footer__subvencion--p">
                Ferrimas2 S.L. ha recibido una ayuda de 2.900 € para la adquisición de un vehículo eléctrico Tesla Model 3 de la Unión Europea con cargo al Fondo NextGenerationEU, en el marco del Plan de Recuperación, Transformación y Resiliencia, para la adquisición de vehículos eléctricos “enchufables” y de pila combustible dentro del Programa de incentivos a la movilidad eficiente y sostenible (Programa MOVES III Vehículos Comunitat Valenciana) del Ministerio para la Transición Ecológica y el Reto Demográfico a través del IDAE, gestionado por el Instituto Valenciano de Competitividad Empresarial (IVACE).
            </p>
            <p className="ceje-footer__subvencion--p">
                En el marco del Plan de Recuperación, Transformación y Resiliencia - Financiado por la Unión Europea – NextGenerationEU.
            </p>
<div className="ceje-footer__subvencion-logos">
  <img src={moves} alt="Programa MOVES III" />
  <img src={idae} alt="IDAE" />
  <img src={union} alt="Unión Europea" />
  <img src={plan} alt="Plan de Recuperación" />
  <img src={financiado} alt="Financiado por la Unión Europea" />
</div>



        </div>


        </div>
        <div className='flex-footer'>
        <div className='ceje-footer__avisos'>
            <p className='ceje-footer__avisos--p'><Link to='/politica-de-privacidad' >Política de privacidad</Link> - <Link to='/politica-de-cookies'> Política de cookies</Link> - <Link to='/aviso-legal'>Aviso legal</Link></p>

        </div>
        <div className='ceje-footer__avisos'>
            <p className='ceje-footer__avisos--p'><a href='https://www.linkedin.com/in/cecilia-arangio-miori/'>Ce</a>--<a href='https://www.linkedin.com/in/jes%C3%BAs-s%C3%A1nchez-vilches-164319b0/'>Je</a> Diseño Web.</p>
        </div>
</div>
    </>
}