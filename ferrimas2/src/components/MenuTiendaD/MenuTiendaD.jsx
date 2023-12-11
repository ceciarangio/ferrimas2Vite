
// import { useState } from "react";
// import "./Testeo1.scss"; // Ajusta el nombre del archivo CSS

// export default function MenuTiendaD() {
//   const [menuItems, setMenuItems] = useState({
//     herramientas: false,
//     carteleria: false,
//     seguridad: false,
//     iluminacion: false,
//     aceites: false,
//   });

//   const toggleMenu = (section) => {
//     setMenuItems((prevItems) => ({
//       ...prevItems,
//       [section]: !prevItems[section],
//     }));
//   };

//   return (
//     <>
//       <nav className="vertical-navbar">
//         <h2>TIENDA</h2>
//         <ul className="menu-list">
//           <li className="menu-item">
//             <h3
//               className={`menu-header ${
//                 menuItems.herramientas ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("herramientas")}
//             >
//               HERRAMIENTAS en GENERAL
//               <span className="arrow-icon"></span>
//             </h3>
//             {menuItems.herramientas && (
//               <ul className="submenu">
//                 <li>Pilas</li>
//                 <li>Baterías</li>
//                 <li>Bidones de Gasolina</li>
//                 <li>Bomba de Engrase</li>
//                 <li>Bomba de Presion</li>
//                 <li>Botas para Agua</li>
//                 <li>Brocas</li>
//                 <li>Carracas</li>
//                 <li>Carretillas</li>
//                 <li>Discos</li>
//                 <li>Artículos de Limpieza</li>
//                 <li>Niveladores, Espátulas</li>
//                 <li>Espumas</li>
//                 <li>Generadores</li>
//                 <li>Grasas</li>
//                 <li>Hachas</li>
//                 <li>Llaves</li>
//                 <li>Mangos</li>
//                 <li>Picos, Rastrillos</li>
//                 <li>Sogas</li>
//                 <li>Tacos Fisher</li>
//                 <li>Talochas</li>
//                 <li>Trensillas</li>
//               </ul>
//             )}
//           </li>
//           {/* Repite el patrón para las otras secciones */}
//           <li className="menu-item">
//             <h3
//               className={`menu-header ${
//                 menuItems.carteleria ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("carteleria")}
//             >
//               CARTELERIA
//               <span className="arrow-icon"></span>
//             </h3>
//             {menuItems.carteleria && (
//               <ul className="submenu">
//                 <li>Peligro</li>
//                 <li>Prohibido el paso</li>
//                 <li>Señal de Stop</li>
//                 <li>Uso obligatorio de Gafas de Seguridad</li>
//                 <li>Señales de velocidad</li>
//                 <li>Señalización en general</li>
//               </ul>
//             )}
//           </li>
//           <li className="menu-item">
//             <h3
//               className={`menu-header ${
//                 menuItems.seguridad ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("seguridad")}
//             >
//               ELEMENTOS DE SEGURIDAD
//               <span className="arrow-icon"></span>
//             </h3>
//             {menuItems.seguridad && (
//               <ul className="submenu">
//                 <li>Calzado de Seguridad</li>
//                 <li>Cascos de Obra</li>
//                 <li>Faja Lumbar</li>
//                 <li>Rodilleras</li>
//                 <li>Chalecos reflectantes</li>
//                 <li>Guantes</li>
//               </ul>
//             )}
//           </li>
//           <li className="menu-item" onClick={() => toggleMenu("iluminacion")}>
//             <h3
//               className={`menu-header ${
//                 menuItems.iluminacion ? "menu-header--open" : ""
//               }`}
//             >
//               ILUMINACION
//               <span className="arrow-icon"></span>
//             </h3>
//             {menuItems.iluminacion && (
//               <ul className="submenu">
//                 <li>Focos de Luz</li>
//                 <li>Luz de Obra</li>
//                 <li>Valisas</li>
//               </ul>
//             )}
//           </li>
//           <li className="menu-item" onClick={() => toggleMenu("aceites")}>
//             <h3
//               className={`menu-header ${
//                 menuItems.aceites ? "menu-header--open" : ""
//               }`}
//             >
//               ACEITES / LIMPIAPARABRISAS
//               <span className="arrow-icon"></span>
//             </h3>
//             {menuItems.aceites && (
//               <ul className="submenu">
//                 <li>Aceites Repsol</li>
//                 <li>Limpiaparabrisas</li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }


