import { useState } from "react";
import "./MenuMaquinaria.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';



export default function MenuMaquinaria() {
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
    {/* <div className="container"> */}
      <nav className="vertical-navbar">
        <h2>MAQUINARIA EN ALQUILER</h2>
        <div className="menu-list">
        <div className="menu-item">
              <Link to='/maquinaria/dumpers'>
                <h4
                  className={`menu-header ${menuItems.dumpers ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("dumpers")}
                >
                  DUMPERS{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.dumpers ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {menuItems.dumpers && (
                <div className="submenu">
                  <a className='a-none' href='/maquinaria/dumpers/dumper-2000'><p>Hidroestático 2000Kg sin pala</p></a>
                  <a className='a-none' href='/maquinaria/dumpers/dumper-2000p'><p>Hidroestático 2000Kg con pala</p></a>
                  <a className='a-none'  href='/maquinaria/dumpers/dumper-2500'><p>Giratorio 2500Kg</p></a>
                  <a className='a-none' href='/maquinaria/dumpers/dumper-3500'><p>Giratorio 3500Kg</p></a>
                  <a className='a-none' href='/maquinaria/dumpers/dumper-6000'><p>Hidroestático 6000Kg</p></a>
                </div>
              )}
            </div>
            <div className="menu-item">
              <Link to='/maquinaria/grupos-electrogenos'>
                <h4
                  className={`menu-header ${menuItems.gruposElectrogenos ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("gruposElectrogenos")}
                >
                  GRUPOS ELECTROGENOS{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.gruposElectrogenos ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {menuItems.gruposElectrogenos && (
                <div className="submenu">
                  <Link className='a-none' to='/maquinaria/grupos-electrogenos/generador-25kv'><p>Generador 25kv</p></Link> 
                  <Link className='a-none' to='/maquinaria/grupos-electrogenos/generador-ayerbe-1000'><p>Ayerbe 1000</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-3800'><p>Ayerbe 3800kte</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-5000'><p>Ayerbe 5000kt</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-8000'><p>Ayerbe 8000</p></Link> 
                </div>
              )}
            </div>
            <div className="menu-item">
              <Link to='/maquinaria/martillos-electricos'>
                <h4
                  className={`menu-header ${menuItems.martillosElectricos ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("martillosElectricos")}
                >
                  MARTILLOS ELECTRICOS{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.martillosElectricos ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {menuItems.martillosElectricos && (
                <div className="submenu">
                  <Link  className='a-none' to='/maquinaria/martillos-electricos/hilti-t100'> <p>Hilti t100 Demolición</p></Link>
                  <Link className='a-none' to='/maquinaria/martillos-electricos/hilti-t70'><p>Hilti te70 Perforación</p></Link>
                  <Link className='a-none' to='/maquinaria/martillos-electricos/hilti-t500'><p>Hilti t500</p></Link>
                  <Link className='a-none' to='/maquinaria/martillos-electricos/taladros'><p>Taladros</p></Link>
                  <Link className='a-none' to='/maquinaria/martillos-electricos/taladros-martillo'><p>Taladro Martillo</p></Link>
                </div>
              )}
            </div>
            <div className="menu-item1">
  <Link to='/maquinaria/maquinaria-corte'>
    <h4
      className={`menu-header ${menuItems.maquinariaCorte ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("maquinariaCorte")}
    >
      MAQUINARIA DE CORTE{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.maquinariaCorte ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.maquinariaCorte && (
    <div className="submenu">
      <Link className='a-none' to='maquinaria/maquinaria-corte/cortadora-juntas-45'><p>Cortadora de Juntas 45d.</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/cortadora-juntas-35'><p>Cortadora de Juntas 35d.</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/rubi'><p>Rubi 0.60 / 1.20 m.</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/virutex'><p>Virutex (Corta Parqué)</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/corte-humedo'> <p>Mesa de Corte Húmedo</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/corte-seco'><p>Mesa de Corte Seco</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/sierra-circular'><p>Sierra Circular (madera)</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/radial-gasolina'><p>Radial Gasolina</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/radial-electrica-230'><p>Radial Eléctrica 230mm.</p></Link>
      <Link className='a-none' to='maquinaria/maquinaria-corte/radial-electrica-115'><p>Radial Eléctrica 115mm.</p></Link>
    </div>
  )}
</div>
            <div className="menu-item">
  <Link to='/maquinaria/vallas'>
    <h4
      className={`menu-header ${menuItems.vallas ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("vallas")}
    >
      VALLAS{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.vallas ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.vallas && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/vallas-metalicas'><p>Vallas Metálicas</p></Link>
      <Link className='a-none' to='/maquinaria/vallas-proteccion'><p>Vallas de Protección</p></Link>
      <Link className='a-none' to='/maquinaria/senal-obras'><p>Señales de Obra</p></Link>
    </div>
  )}
</div>
<div className="menu-item1">
 <Link to='/maquinaria/senalizacion'> <h4
    className={`menu-header ${menuItems.semaforos ? "menu-header--open" : ""}`}
    onClick={() => toggleMenu("semaforos")}
  >
    SEÑALIZACION{' '}
    <span className="arrow-icon"></span>
  </h4> </Link>
  {menuItems.semaforos && (
    <div className="submenu">
      <p className='a-none'>Semáforos</p>
      <p className='a-none'>Señales de Obra</p>
    </div>
  )}
</div>
<div className="menu-item">
  <Link to='/maquinaria/compactadoras'>
    <h4
      className={`menu-header ${menuItems.compactadoras ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("compactadoras")}
    >
      COMPACTADORAS{' '}
      <FontAwesomeIcon  className='a-none' icon={menuItems.compactadoras ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.compactadoras && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/pison' ><p>Pisón</p></Link>
      <Link className='a-none' to='/maquinaria/bandeja' ><p>Bandeja Compactadora</p></Link>
      <Link className='a-none' to='/maquinaria/rodillo-650' ><p>Rodillo 650kg</p></Link>
      <Link className='a-none' to='/maquinaria/rodillo-3000' ><p>Rodillo 3000kg</p></Link>
    </div>
  )}
</div>

<div className="menu-item">
  <Link to='/maquinaria/excavadoras'>
    <h4
      className={`menu-header ${menuItems.excavadoras ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("excavadoras")}
    >
      EXCAVADORAS{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.excavadoras ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.excavadoras && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/mini-1'> <p>Minigiratoria 1 t</p></Link>
      <Link className='a-none' to='/maquinaria/mini-3'><p>Minigiratoria 3.5 t</p></Link>
      <Link className='a-none' to='/maquinaria/mini-5'><p>Minigiratoria 5.5 t</p></Link>
    </div>
  )}
</div>
<div className="menu-item">
  <Link to='/maquinaria/plataformas-articuladas'>
    <h4
      className={`menu-header ${menuItems.plataformasArticuladas ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasArticuladas")}
    >
      PLATAFORMAS ARTICULADAS{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasArticuladas ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.plataformasArticuladas && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/articulada-11'> <p>11 m. electrica</p></Link>
      <Link className='a-none' to='/maquinaria/articulada-12'> <p>12 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/articulada-16'><p>16 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/articulada-20'> <p>20 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/articulada-23'> <p>23 m. telescopica diesel</p></Link>
    </div>
  )}
</div>

          <div className="menu-item">
  <Link to='/maquinaria/plataformas-tijera'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      PLATAFORMAS DE TIJERA{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {menuItems.plataformasTijera && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/tijera-6'> <p>6 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/tijera-8'><p>8 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/tijera-10'> <p>10 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/tijera-12e'> <p>12 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/tijera-12d'> <p>12 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/tijera-18'> <p>18 m. diesel</p></Link>
    </div>
  )}
</div>
                 <div className="menu-item">
  <Link to='/maquinaria/limpieza'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      LIMPIEZA{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link className='a-none' to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link className='a-none' to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link className='a-none' to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link className='a-none' to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link className='a-none' to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/bombas-agua'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      BOMBAS DE AGUA{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/compresor-aire'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      COMPRESOR DE AIRE{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/sistema-secado'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      SISTEMAS DE SECADO{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
            <h4
              className={`menu-header ${
                menuItems.carretillasElevadoras ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("carretillasElevadoras")}
            >
              CARRETILLAS ELEVADORAS
              <span className="arrow-icon"></span>
            </h4>
            {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )}
          </div>
        
          <div className="menu-item">
            <h4
              className={`menu-header ${
                menuItems.carretillasElevadoras ? "menu-header--open" : ""
              }`}
              onClick={() => toggleMenu("carretillasElevadoras")}
            >
              CARRETILLAS ELEVADORAS
              <span className="arrow-icon"></span>
            </h4>
            {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )}
          </div>
          </div>   
                
      </nav>
      {/* </div> */}
    </>
  );
}

