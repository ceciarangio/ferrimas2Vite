import { useEffect } from "react";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import Footer from "../../components/Footer/Footer";
import './AvisoLegal.scss';

export default function AvisoLegal(){

    useEffect(() => {
        const element = document.getElementById('aviso-legal-top');
        if (element) {
            element.scrollIntoView({ behavior: "smooth"});
        }
    }, []);




    return <>
    <HeaderGeneral/>
    <div className="avisoLegal">
    <div id="aviso-legal-top">
        <h2>Aviso Legal</h2>
        <p>Última modificación: 30 de Noviembre de 2023

Este documento regula el uso del sitio web de Ferri Mas 2 S.L. (en adelante, "el sitio web"). La utilización del sitio web otorga la condición de usuario, implicando la aceptación plena y sin reservas de todas las disposiciones.</p>
    <p>Condiciones de Uso</p>

    <p>Ferri Mas 2 S.L. se reserva el derecho de modificar estas condiciones en cualquier momento sin notificación previa. Los cambios se anunciarán en esta página con razonable antelación a su implementación. Se recomienda revisar periódicamente las condiciones. La utilización del sitio web después de los cambios implica la aceptación de las nuevas condiciones.

Si en algún momento no acepta las condiciones, debe dejar de usar el sitio web. Cualquier propuesta, comunicación o cláusula que modifique estas condiciones no será considerada ni tendrá efecto.</p>
    <p>0. Definiciones</p>

    <p>Sitio web: Todas las características, contenidos y servicios ofrecidos a través de aplicaciones móviles/de escritorio y el sitio web ferrimas2.com o sitios afiliados.

Usuario: Persona, dispositivo, servicio, API, aplicación, robot, alienígena o inteligencia artificial que accede al sitio web.</p>
    <p>1. Aceptación de las Condiciones de Uso</p>

    <p>El usuario declara haber leído y aceptado las condiciones. Asegura tener la capacidad jurídica para formar parte del acuerdo, no utilizará derechos de forma ilícita y usará el servicio según lo descrito.</p>
    <p>2. Derechos de Autor</p>

    <p>El sitio web, incluyendo diseño, textos, logotipos, imágenes, código fuente, pertenece a Ferri Mas 2 S.L. No se puede usar sin permiso. Contenidos no originales indican la fuente y licencia original.</p>
    <p>3. Restricciones de Uso</p>

    <p>No se puede utilizar el sitio web para actividades ilícitas o contradictorias. El servicio es solo para uso personal no lucrativo. Usted reconoce que el servicio ha sido desarrollado por Ferri Mas 2 S.L.</p>
    <p>4. Exclusión de Garantías y Responsabilidad</p>

    <p>El usuario utiliza el sitio bajo su responsabilidad. El sitio web no garantiza el acceso sin errores ni se hace responsable de daños causados por elementos destructivos. Se excluye responsabilidad por daños derivados del acceso al sitio.</p>
    <p>5. Enlaces y Framing</p>

    <p>Se pueden incluir enlaces a cualquier página o contenido del sitio web, excluyendo archivos no HTML. No se puede enlazar desde sitios con temas inapropiados o ilegales. No se permite framing que altere la integridad del sitio web.</p>
    <p>6. Jurisdicción</p>

    <p>Las condiciones se rigen por las leyes del Reino de España. Cualquier acción legal se presentará en los tribunales de Alicante</p>
    <p>7. Finalización</p>

    <p>Ambas partes pueden finalizar la relación por incumplimiento. En caso de incumplimiento, el usuario debe dejar de usar el servicio y destruir todo material obtenido del sitio web.</p>
    </div>
    </div>
    <div className="footer">
        <Footer />
    </div>
    </>
}