

import "./MenuTiendaD.scss"; // Asegúrate de tener la ruta correcta

export default function MenuTiendaD() {
  return (
    <>
      <div className="vertical-navbar">
        <h2>TIENDA</h2>

        <a href="/herramientas">
         <h3> HERRAMIENTAS en GENERAL</h3>
        </a>
        <a href="/carteleria">
          <h3>CARTELERIA</h3>
        </a>
        <a href="/elementos-seguridad">
          <h3>ELEMENTOS DE SEGURIDAD</h3>
        </a>
        <a href="/iluminacion">
          <h3>ILUMINACION</h3>
        </a>
        <a href="/aceites">
          <h3>ACEITES / LIMPIAPARABRISAS</h3>
        </a>
      </div>
    </>
  );
}
