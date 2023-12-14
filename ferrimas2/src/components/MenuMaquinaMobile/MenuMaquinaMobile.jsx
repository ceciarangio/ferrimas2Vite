// import { useState } from "react";
// import "./MenuMaquinaMobile.scss";
// import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
// import { Link } from "react-router-dom";

// export default function MenuMaquinaMobile() {
//   const [menuItems, setMenuItems] = useState({
//     dumpers: false,
//     gruposElectrogenos: false,
//     martillosElectricos: false,
//     maquinariaCorte: false,
//     vallas: false,
//     semaforos: false,
//     compactadoras: false,
//     excavadoras: false,
//     carretillasElevadoras: false,
//     plataformasArticuladas: false,
//     plataformasTijera: false,
//   });

//   const toggleMenu = (section) => {
//     setMenuItems((prevItems) => ({
//       ...prevItems,
//       [section]: !prevItems[section],
//     }));
//   };

//   return (
//     <>
//     <div className="container">
//       <HeaderGeneral />
//       <nav className="vertical-navbar">
//         <h2>MAQUINARIA EN ALQUILER</h2>
//         <div className="menu-list">
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.dumpers ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("dumpers")}
//             >
//               DUMPERS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.dumpers && (
//               <div className="submenu">
//                 <Link to='/maquinaria/dumper-2000'><p>Hidroestático 2000Kg sin pala</p></Link>
//                 <Link to='/maquinaria/dumper-2000p'><p>Hidroestático 2000Kg con pala</p></Link>
//                 <Link to='/maquinaria/dumper-2500'><p>Giratorio 2500Kg</p></Link>
//                 <Link to='/maquinaria/dumper-3500'><p>Giratorio 3500Kg</p></Link>
//                 <Link to='/maquinaria/dumper-6000'><p>Hidroestático 6000Kg</p></Link>
//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.gruposElectrogenos ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("gruposElectrogenos")}
//             >
//               GRUPOS ELECTROGENOS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.gruposElectrogenos && (
//               <div className="submenu">
//                <Link to='/maquinaria/generador-25kv'><p>Generador 25kv</p></Link> 
//                <Link to='/maquinaria/generador-ayerbe-1000'><p>Ayerbe 1000</p></Link> 
//                <Link to='maquinaria/generador-ayerbe-3800'><p>Ayerbe 3800kte</p></Link> 
//                <Link to='maquinaria/generador-ayerbe-5000'><p>Ayerbe 5000kt</p></Link> 
//                <Link to='maquinaria/generador-ayerbe-8000'><p>Ayerbe 8000</p></Link> 

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.martillosElectricos ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("martillosElectricos")}
//             >
//               MARTILLOS ELECTRICOS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.martillosElectricos && (
//               <div className="submenu">
//                <Link to='/maquinaria/hilti-t100'> <p>Hilti t100 Demolición</p></Link>
//                <Link to='/maquinaria/hilti-t70'><p>Hilti te70 Perforación</p></Link>
//                <Link to='/maquinaria/hilti-t500'><p>Hilti t500</p></Link>
//                <Link to='/maquinaria/taladros'><p>Taladros</p></Link>
//                <Link to='/maquinaria/taladros-martillo'><p>Taladro Martillo</p></Link>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.maquinariaCorte ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("maquinariaCorte")}
//             >
//              MAQUINARIA DE CORTE
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.maquinariaCorte && (
//               <div className="submenu">
//                 <Link to='/maquinaria/cortadora-juntas-45'><p>Cortadora de Juntas 45d.</p></Link>
//                 <Link to='/maquinaria/cortadora-juntas-35'><p>Cortadora de Juntas 35d.</p></Link>
//                 <Link to='/maquinaria/rubi'><p>Rubi 0.60 / 1.20 m.</p></Link>
//                 <Link to='/maquinaria/virutex'><p>Virutex (Corta Parqué)</p></Link>
//                 <Link to='/maquinaria/corte-humedo'> <p>Mesa de Corte Húmedo</p></Link>
//                 <Link to='/maquinaria/corte-seco'><p>Mesa de Corte Seco</p></Link>
//                 <Link to='/maquinaria/sierra-circular'><p>Sierra Circular (madera)</p></Link>
//                 <Link to='/maquinaria/radial-gasolina'><p>Radial Gasolina</p></Link>
//                 <Link to='/maquinaria/radial-electrica-230'><p>Radial Eléctrica 230mm.</p></Link>
//                 <Link to='/maquinaria/radial-electrica-115'><p>Radial Eléctrica 115mm.</p></Link>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.vallas ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("vallas")}
//             >
//               VALLAS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.vallas && (
//               <div className="submenu">
//                 <Link to='/maquinaria/vallas-metalicas' ><p>Vallas Metálicas</p></Link>
//                 <Link to='/maquinaria/vallas-proteccion'><p>Vallas de Protección</p></Link>
//                 <Link to='/maquinaria/senal-obras'><p>Señales de Obra</p></Link>
//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.semaforos ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("semaforos")}
//             >
//               SEMAFOROS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.semaforos && (
//               <div className="submenu">
//                 <p>Peligro</p>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.compactadoras ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("compactadoras")}
//             >
//               COMPACTADORAS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.compactadoras && (
//               <div className="submenu">
//                 <Link to='/maquinaria/pison' ><p>Pisón</p></Link>
//                 <Link to='/maquinaria/bandeja' ><p>Bandeja Compactadora</p></Link>
//                 <Link to='/maquinaria/rodillo-650' ><p>Rodillo 650kg</p></Link>
//                 <Link to='/maquinaria/rodillo-3000' ><p>Rodillo 3000kg</p></Link>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.excavadoras ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("excavadoras")}
//             >
//               EXCAVADORAS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.excavadoras && (
//               <div className="submenu">
//                <Link to='/maquinaria/mini-1'> <p>Minigiratoria 1 t</p></Link>
//                <Link to='/maquinaria/mini-3'><p>Minigiratoria 3.5 t</p></Link>
//                <Link to='/maquinaria/mini-5'><p>Minigiratoria 5.5 t</p></Link>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.plataformasArticuladas ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("plataformasArticuladas")}
//             >
//               PLATAFORMAS ARTICULADAS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.plataformasArticuladas && (
//               <div className="submenu">
//               <Link to='/maquinaria/articulada-11'> <p>11 m. electrica</p></Link>
//               <Link to='/maquinaria/articulada-12'> <p>12 m. diesel</p></Link>
//               <Link to='/maquinaria/articulada-16'><p>16 m. diesel</p></Link>
//               <Link to='/maquinaria/articulada-20'> <p>20 m. diesel</p></Link>
//               <Link to='/maquinaria/articulada-23'> <p>23 m. telescopica diesel</p></Link>

//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.plataformasTijera ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("plataformasTijera")}
//             >
//               PLATAFORMAS DE TIJERA
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.plataformasTijera && (
//               <div className="submenu">
//                <Link to='/maquinaria/tijera-6'> <p>6 m. eléctrica</p></Link>
//                <Link to='/maquinaria/tijera-8'><p>8 m. eléctrica</p></Link>
//                <Link to='/maquinaria/tijera-10'> <p>10 m. eléctrica</p></Link>
//                <Link to='/maquinaria/tijera-12e'> <p>12 m. eléctrica</p></Link>
//                <Link to='/maquinaria/tijera-12d'> <p>12 m. diesel</p></Link>
//                <Link to='/maquinaria/tijera-18'> <p>18 m. diesel</p></Link>
//               </div>
//             )}
//           </div>
//           <div className="menu-item">
//             <h4
//               className={`menu-header ${
//                 menuItems.carretillasElevadoras ? "menu-header--open" : ""
//               }`}
//               onClick={() => toggleMenu("carretillasElevadoras")}
//             >
//               CARRETILLAS ELEVADORAS
//               <span className="arrow-icon"></span>
//             </h4>
//             {menuItems.carretillasElevadoras && (
//               <div className="submenu">
//                 <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
//                 <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
//                 <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
//                 <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
//                 <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//       </div>
//     </>
//   );
// }


import { useState } from 'react';
import './MenuMaquinaMobile.scss';
import HeaderGeneral from '../HeaderGeneral/HeaderGeneral';

export default function MenuMaquinaMobile() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
    setSelectedSection(null); // Limpiar la sección seleccionada al colapsar
  };

  const handleSectionClick = (section) => {
    setSelectedSection((prev) => (prev === section ? null : section));
    setIsCollapsed(false); // Descolapsar al hacer clic en una sección
  };

  return (
    <div className="menu-container">
      <HeaderGeneral />

      <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`} id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          {selectedSection ? (
            <p>Contenido de la sección: {selectedSection}</p>
          ) : (
            <>
              <h4
                className="text-body-emphasis"
                onClick={() => handleSectionClick('Section1')}
              >
                Section 1
              </h4>
              <h4
                className="text-body-emphasis"
                onClick={() => handleSectionClick('Section2')}
              >
                Section 2
              </h4>
              <h4
                className="text-body-emphasis"
                onClick={() => handleSectionClick('Section3')}
              >
                Section 3
              </h4>
              <span className="text-body-secondary">
                Toggleable via the navbar brand.
              </span>
            </>
          )}
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
}
