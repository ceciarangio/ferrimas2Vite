

import "./MenuTiendaD.scss"; // Asegúrate de tener la ruta correcta

export default function MenuTiendaD() {
  return (
    <>
      <div className="vertical-navbarTienda">
        <h2 className="name-Tienda">TIENDA</h2>

        <a href="/herramientas">
         <h3 className="h3-MenuTiendad"> HERRAMIENTAS en GENERAL</h3>
         <h3 className="h3-MenuTienda">HERRAMIENTAS</h3>
        </a>
        <a href="/carteleria">
          <h3>CARTELERIA</h3>
        </a>
        <a href="/elementos-seguridad">
          <h3 className="h3-MenuTiendad">ELEMENTOS DE SEGURIDAD</h3>
          <h3 className="h3-MenuTienda">SEGURIDAD</h3>
        </a>
        <a href="/iluminacion">
          <h3>ILUMINACION</h3>
        </a>
        <a href="/aceites">
          <h3>ACEITES / LIMPIAPARABRISAS</h3>
        </a>
        <a href="/capazos">
          <h3>CAPAZOS</h3>
        </a>
      </div>
    </>
  );
}
