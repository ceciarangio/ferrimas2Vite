import './Footer.scss';
import { Link } from "react-router-dom";

export default function Footer() {



    return <>
        <div className="ceje-footer">
            <div className="ceje-footer__delegacion">
                <ul className="ceje-footer__delegacion__direccion">
                    <li>
                        <h2 className="ceje-footer__delegacion__direccion--h2">Dirección:</h2>
                    </li>
                    <li>
                        <p className="ceje-footer__delegacion__direccion--p">Polígono Industrial l'Alberca, C/ Benifato, 27, 03530 La Nucia (Alicante)</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="ceje-footer__delegacion__contacto">
                    <li>
                        <h2 className="ceje-footer__delegacion__contacto--h2">Contacto:</h2>
                    </li>
                    <li>
                        <p className="ceje-footer__delegacion__contacto--p">ferrimas2@gmail.com</p>
                    </li>
                    <li>
                        <p className="ceje-footer__delegacion__contacto--p">(+34)96.689.61.13</p>
                    </li>
                    <li>
                        <p className="ceje-footer__delegacion__contacto--p">647.834.593</p>
                    </li>
                </ul>
            </div>
            <div className='ceje-footer__avisos'>
            <p className='ceje-footer__avisos--p'><Link to='/politica-de-privacidad' >Política de privacidad</Link> - <Link to='/politica-de-cookies'> Política de cookies</Link> - <Link to='/aviso-legal'>Aviso legal</Link></p>

        </div>
        </div>

    </>
}