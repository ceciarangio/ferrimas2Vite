import { useState } from "react";
import "./Testeo1.scss";
import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
import { Link } from "react-router-dom";

export default function MenuTiendaD() {
  const [menuItems, setMenuItems] = useState({
    dumpers: false,
    gruposElectrogenos: false,
    martillosElectricos: false,
    maquinariaCorte: false,
    vallas: false,
    semaforos: false,
    compactadoras: false,
    excavadoras: false,
    carretillasElevadoras: false,
    plataformasArticuladas: false,
    plataformasTijera: false,
  });

  const toggleMenu = (section) => {
    setMenuItems((prevItems) => ({
      ...prevItems,
      [section]: !prevItems[section],
    }));
  };

  return (
    <>
    <div className="container">
      <HeaderGeneral />
      <nav className="vertical-navbar">
        <h2>MAQUINARIA EN ALQUILER</h2>
        <div className="menu-list">
          <div className="menu-item">
            <Link to='/maquinaria/dumpers'> <h4
              className={`menu-header ${
                menuItems.dumpers ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("dumpers")}
            >
              DUMPERS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.dumpers && (
              <div className="submenu">
                <Link to='/maquinaria/dumper-2000'><p>Hidroestático 2000Kg sin pala</p></Link>
                <Link to='/maquinaria/dumper-2000p'><p>Hidroestático 2000Kg con pala</p></Link>
                <Link to='/maquinaria/dumper-2500'><p>Giratorio 2500Kg</p></Link>
                <Link to='/maquinaria/dumper-3500'><p>Giratorio 3500Kg</p></Link>
                <Link to='/maquinaria/dumper-6000'><p>Hidroestático 6000Kg</p></Link>
                
              </div>
            )}
          </div>
          <div className="menu-item">
            <Link to='/maquinaria/grupos-electrogenos'><h4
              className={`menu-header ${
                menuItems.gruposElectrogenos ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("gruposElectrogenos")}
            >
              GRUPOS ELECTROGENOS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.gruposElectrogenos && (
              <div className="submenu">
               <Link to='/maquinaria/grupos-electrogenos/generador-25kv'><p>Generador 25kv</p></Link> 
               <Link to='/maquinaria/grupos-electrogenos/generador-ayerbe-1000'><p>Ayerbe 1000</p></Link> 
               <Link to='/maquinaria/grupos-electrogenos/generador-ayerbe-3800'><p>Ayerbe 3800kte</p></Link> 
               <Link to='/maquinaria/grupos-electrogenos/generador-ayerbe-5000'><p>Ayerbe 5000kt</p></Link> 
               <Link to='/maquinaria/grupos-electrogenos/generador-ayerbe-8000'><p>Ayerbe 8000</p></Link> 

              </div>
            )}
          </div>
          <div className="menu-item">
          <Link to='/maquinaria/martillos-electricos'> <h4
              className={`menu-header ${
                menuItems.martillosElectricos ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("martillosElectricos")}
            >
              MARTILLOS ELECTRICOS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.martillosElectricos && (
              <div className="submenu">
               <Link to='/maquinaria/martillos-electricos/hilti-t100'> <p>Hilti t100 Demolición</p></Link>
               <Link to='/maquinaria/martillos-electricos/hilti-t70'><p>Hilti te70 Perforación</p></Link>
               <Link to='/maquinaria/martillos-electricos/hilti-t500'><p>Hilti t500</p></Link>
               <Link to='/maquinaria/martillos-electricos/taladros'><p>Taladros</p></Link>
               <Link to='/maquinaria/martillos-electricos/taladros-martillo'><p>Taladro Martillo</p></Link>

              </div>
            )}
          </div>
          <div className="menu-item">
           <Link to='/maquinaria/maquinaria-corte'> <h4
              className={`menu-header ${
                menuItems.maquinariaCorte ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("maquinariaCorte")}
            >
             MAQUINARIA DE CORTE
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.maquinariaCorte && (
              <div className="submenu">
                <Link to='/maquinaria/maquinaria-corte/cortadora-juntas-45'><p>Cortadora de Juntas 45d.</p></Link>
                <Link to='/maquinaria/maquinaria-corte/cortadora-juntas-35'><p>Cortadora de Juntas 35d.</p></Link>
                <Link to='/maquinaria/maquinaria-corte/rubi'><p>Rubi 0.60 / 1.20 m.</p></Link>
                <Link to='/maquinaria/maquinaria-corte/virutex'><p>Virutex (Corta Parqué)</p></Link>
                <Link to='/maquinaria/maquinaria-corte/corte-humedo'> <p>Mesa de Corte Húmedo</p></Link>
                <Link to='/maquinaria/maquinaria-corte/corte-seco'><p>Mesa de Corte Seco</p></Link>
                <Link to='/maquinaria/maquinaria-corte/sierra-circular'><p>Sierra Circular (madera)</p></Link>
                <Link to='/maquinaria/maquinaria-corte/radial-gasolina'><p>Radial Gasolina</p></Link>
                <Link to='/maquinaria/maquinaria-corte/radial-electrica-230'><p>Radial Eléctrica 230mm.</p></Link>
                <Link to='/maquinaria/maquinaria-corte/radial-electrica-115'><p>Radial Eléctrica 115mm.</p></Link>

              </div>
            )}
          </div>
          <div className="menu-item">
           <Link to='/maquinaria/vallas'> <h4
              className={`menu-header ${
                menuItems.vallas ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("vallas")}
            >
              VALLAS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.vallas && (
              <div className="submenu">
                <Link to='/maquinaria/vallas/vallas-metalicas' ><p>Vallas Metálicas</p></Link>
                <Link to='/maquinaria/vallas/vallas-proteccion'><p>Vallas de Protección</p></Link>
                <Link to='/maquinaria/vallas/senal-obras'><p>Señales de Obra</p></Link>
              </div>
            )}
          </div>
          <div className="menu-item">
            <Link to='/maquinaria/senalizacion'><h4
              className={`menu-header ${
                menuItems.semaforos ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("semaforos")}
            >
              SEMAFOROS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.semaforos && (
              <div className="submenu">
                <Link to='/maquinaria/senalizacion/semaforos'><p>Semáforos</p></Link>
                <Link to='/maquinaria/senalizacion/senales-obra'><p>Señales de Obra</p></Link>
              </div>
            )}
          </div>
          <div className="menu-item">
           <Link to='/maquinaria/compactadoras'> <h4
              className={`menu-header ${
                menuItems.compactadoras ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("compactadoras")}
            >
              COMPACTADORAS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.compactadoras && (
              <div className="submenu">
                <Link to='/maquinaria/compactadoras/pison' ><p>Pisón</p></Link>
                <Link to='/maquinaria/compactadoras/bandeja' ><p>Bandeja Compactadora</p></Link>
                <Link to='/maquinaria/compactadoras/rodillo-650' ><p>Rodillo 650kg</p></Link>
                <Link to='/maquinaria/compactadoras/rodillo-3000' ><p>Rodillo 3000kg</p></Link>

              </div>
            )}
          </div>
          <div className="menu-item">
            <Link to='/maquinaria/excavadoras'><h4
              className={`menu-header ${
                menuItems.excavadoras ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("excavadoras")}
            >
              EXCAVADORAS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.excavadoras && (
              <div className="submenu">
               <Link to='/maquinaria/excavadoras/mini-1'> <p>Minigiratoria 1 t</p></Link>
               <Link to='/maquinaria/excavadoras/mini-3'><p>Minigiratoria 3.5 t</p></Link>
               <Link to='/maquinaria/excavadoras/mini-5'><p>Minigiratoria 5.5 t</p></Link>

              </div>
            )}
          </div>
          <div className="menu-item">
           <Link to='/maquinaria/plataformas-articuladas'><h4
              className={`menu-header ${
                menuItems.plataformasArticuladas ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("plataformasArticuladas")}
            >
              PLATAFORMAS ARTICULADAS
              <span className="arrow-icon"></span>
            </h4></Link> 
            {menuItems.plataformasArticuladas && (
              <div className="submenu">
              <Link to='/maquinaria/plataformas-articuladas/articulada-11'> <p>11 m. electrica</p></Link>
              <Link to='/maquinaria/plataformas-articuladas/articulada-12'> <p>12 m. diesel</p></Link>
              <Link to='/maquinaria/plataformas-articuladas/articulada-16'><p>16 m. diesel</p></Link>
              <Link to='/maquinaria/plataformas-articuladas/articulada-20'> <p>20 m. diesel</p></Link>
              <Link to='/maquinaria/plataformas-articuladas/articulada-23'> <p>23 m. telescopica diesel</p></Link>

              </div>
            )}
          </div>
          <div className="menu-item">
            <h4
              className={`menu-header ${
                menuItems.plataformasTijera ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("plataformasTijera")}
            >
              PLATAFORMAS DE TIJERA
              <span className="arrow-icon"></span>
            </h4>
            {menuItems.plataformasTijera && (
              <div className="submenu">
               <Link to='/maquinaria/plataformas-articuladas/tijera-6'> <p>6 m. eléctrica</p></Link>
               <Link to='/maquinaria/plataformas-articuladas/tijera-8'><p>8 m. eléctrica</p></Link>
               <Link to='/maquinaria/plataformas-articuladas/tijera-10'> <p>10 m. eléctrica</p></Link>
               <Link to='/maquinaria/plataformas-articuladas/tijera-12e'> <p>12 m. eléctrica</p></Link>
               <Link to='/maquinaria/plataformas-articuladas/tijera-12d'> <p>12 m. diesel</p></Link>
               <Link to='/maquinaria/plataformas-articuladas/tijera-18'> <p>18 m. diesel</p></Link>
              </div>
            )}
          </div>
          <div className="menu-item">
           <Link to='/maquinaria/plataformas-tijera'> <h4
              className={`menu-header ${
                menuItems.carretillasElevadoras ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("carretillasElevadoras")}
            >
              CARRETILLAS ELEVADORAS
              <span className="arrow-icon"></span>
            </h4></Link>
            {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/plataformas-tijera/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/plataformas-tijera/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/plataformas-tijera/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/plataformas-tijera/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/plataformas-tijera/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}
