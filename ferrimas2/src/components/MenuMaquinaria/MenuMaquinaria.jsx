import { useState } from "react";
import "./MenuMaquinaria.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';




export default function MenuMaquinaria() {

  const { t } = useTranslation();

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
        <h2>{t("translated-contacto-menumaq-titular")}</h2>
        <div className="menu-list">
        <div className="menu-item">
              <Link to='/maquinaria/alquiler-dumpers'>
                <h4
                  className={`menu-header ${menuItems.dumpers ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("dumpers")}
                >
                  {t("translated-contacto-menumaq-dumpers")}{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.dumpers ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {/* {menuItems.dumpers && (
                <div className="submenu">
                  <a className='a-none' href='/maquinaria/alquiler-dumpers/dumper-2000'><p>Hidroestático 2000Kg sin pala</p></a>
                  <a className='a-none' href='/maquinaria/alquiler-dumpers/dumper-2000p'><p>Hidroestático 2000Kg con pala</p></a>
                  <a className='a-none'  href='/maquinaria/alquiler-dumpers/dumper-2500'><p>Giratorio 2500Kg</p></a>
                  <a className='a-none' href='/maquinaria/alquiler-dumpers/dumper-3500'><p>Giratorio 3500Kg</p></a>
                  <a className='a-none' href='/maquinaria/alquiler-dumpers/dumper-6000'><p>Hidroestático 6000Kg</p></a>
                </div>
              )} */}
            </div>
            <div className="menu-item">
              <Link to='/maquinaria/alquiler-grupos-electrogenos'>
                <h4
                  className={`menu-header ${menuItems.gruposElectrogenos ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("gruposElectrogenos")}
                >
                  {t("translated-contacto-menumaq-gruposelectrogenos")}{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.gruposElectrogenos ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {/* {menuItems.gruposElectrogenos && (
                <div className="submenu">
                  <Link className='a-none' to='/maquinaria/alquiler-grupos-electrogenos/generador-25kv'><p>Generador 25kv</p></Link> 
                  <Link className='a-none' to='/maquinaria/alquiler-grupos-electrogenos/generador-ayerbe-1000'><p>Ayerbe 1000</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-3800'><p>Ayerbe 3800kte</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-5000'><p>Ayerbe 5000kt</p></Link> 
                  <Link className='a-none' to='maquinaria/grupos-electrogenos/generador-ayerbe-8000'><p>Ayerbe 8000</p></Link> 
                </div>
              )} */}
            </div>
            <div className="menu-item">
              <Link to='/maquinaria/alquiler-martillos-electricos'>
                <h4
                  className={`menu-header ${menuItems.martillosElectricos ? "menu-header--open" : ""}`}
                  onClick={() => toggleMenu("martillosElectricos")}
                >
                  {t("translated-contacto-menumaq-martilloselectricos")}{' '}
                  <FontAwesomeIcon className='a-none' icon={menuItems.martillosElectricos ? faChevronDown : faChevronRight} />
                </h4>
              </Link>
              {/* {menuItems.martillosElectricos && (
                <div className="submenu">
                  <Link  className='a-none' to='/maquinaria/alquiler-martillos-electricos/hilti-t100'> <p>Hilti t100 Demolición</p></Link>
                  <Link className='a-none' to='/maquinaria/alquiler-martillos-electricos/hilti-t70'><p>Hilti te70 Perforación</p></Link>
                  <Link className='a-none' to='/maquinaria/alquiler-martillos-electricos/hilti-t500'><p>Hilti t500</p></Link>
                  <Link className='a-none' to='/maquinaria/alquiler-martillos-electricos/taladros'><p>Taladros</p></Link>
                  <Link className='a-none' to='/maquinaria/alquiler-martillos-electricos/taladros-martillo'><p>Taladro Martillo</p></Link>
                </div>
              )} */}
            </div>
            <div className="menu-item">
  <Link to='/maquinaria/alquiler-maquinaria-corte'>
    <h4
      className={`menu-header ${menuItems.maquinariaCorte ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("maquinariaCorte")}
    >
      {t("translated-contacto-menumaq-maquinariacorte")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.maquinariaCorte ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.maquinariaCorte && (
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
  )} */}
</div>
            <div className="menu-item">
  <Link to='/maquinaria/alquiler-vallas'>
    <h4
      className={`menu-header ${menuItems.vallas ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("vallas")}
    >
      {t("translated-contacto-menumaq-vallas")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.vallas ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.vallas && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/alquiler-vallas-metalicas'><p>Vallas Metálicas</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-vallas-proteccion'><p>Vallas de Protección</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-senal-obras'><p>Señales de Obra</p></Link>
    </div>
  )} */}
</div>
<div className="menu-item">
 <Link to='/maquinaria/alquiler-senalizacion'> <h4
    className={`menu-header ${menuItems.semaforos ? "menu-header--open" : ""}`}
    onClick={() => toggleMenu("semaforos")}
  >
    {t("translated-contacto-menumaq-senalizacion")}{' '}
    <span className="arrow-icon"></span>
  </h4> </Link>
  {/* {menuItems.semaforos && (
    <div className="submenu">
      <p className='a-none'>Semáforos</p>
      <p className='a-none'>Señales de Obra</p>
    </div>
  )}*/}
</div> 
<div className="menu-item">
  <Link to='/maquinaria/alquiler-compactadoras'>
    <h4
      className={`menu-header ${menuItems.compactadoras ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("compactadoras")}
    >
      {t("translated-contacto-menumaq-compactadoras")}{' '}
      <FontAwesomeIcon  className='a-none' icon={menuItems.compactadoras ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.compactadoras && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/alquiler-pison' ><p>Pisón</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-bandeja' ><p>Bandeja Compactadora</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-rodillo-650' ><p>Rodillo 650kg</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-rodillo-3000' ><p>Rodillo 3000kg</p></Link>
    </div>
  )}*/}
</div> 

<div className="menu-item">
  <Link to='/maquinaria/alquiler-excavadoras'>
    <h4
      className={`menu-header ${menuItems.excavadoras ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("excavadoras")}
    >
      {t("translated-contacto-menumaq-excavadoras")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.excavadoras ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.excavadoras && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/alquiler-mini-1'> <p>Minigiratoria 1 t</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-mini-3'><p>Minigiratoria 3.5 t</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-mini-5'><p>Minigiratoria 5.5 t</p></Link>
    </div>
  )}*/}
</div> 
<div className="menu-item">
  <Link to='/maquinaria/alquiler-plataformas-articuladas'>
    <h4
      className={`menu-header ${menuItems.plataformasArticuladas ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasArticuladas")}
    >
      {t("translated-contacto-menumaq-plataformasarticuladas")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasArticuladas ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.plataformasArticuladas && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/alquiler-articulada-11'> <p>11 m. electrica</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-articulada-12'> <p>12 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-articulada-16'><p>16 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-articulada-20'> <p>20 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-articulada-23'> <p>23 m. telescopica diesel</p></Link>
    </div>
  )}*/}
</div> 

          <div className="menu-item">
  <Link to='/maquinaria/alquiler-plataformas-tijera'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      {t("translated-contacto-menumaq-plataformastijera")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  {/* {menuItems.plataformasTijera && (
    <div className="submenu">
      <Link className='a-none' to='/maquinaria/alquiler-tijera-6'> <p>6 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-tijera-8'><p>8 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-tijera-10'> <p>10 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-tijera-12e'> <p>12 m. eléctrica</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-tijera-12d'> <p>12 m. diesel</p></Link>
      <Link className='a-none' to='/maquinaria/alquiler-tijera-18'> <p>18 m. diesel</p></Link>
    </div>
  )}*/}
</div> 
                 <div className="menu-item">
  <Link to='/maquinaria/alquiler-limpieza'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      {t("translated-contacto-menumaq-limpieza")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link className='a-none' to='/maquinaria/alquiler-carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link className='a-none' to='/maquinaria/alquiler-carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link className='a-none' to='/maquinaria/alquiler-carretillaelev-1600'><p>1600kg</p></Link>
                <Link className='a-none' to='/maquinaria/alquiler-carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link className='a-none' to='/maquinaria/alquiler-carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/alquiler-bombas-agua'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      {t("translated-contacto-menumaq-bombasagua")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/alquiler-carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/alquiler-compresor-aire'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      {t("translated-contacto-menumaq-compresoraire")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/alquiler-carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
  <Link to='/maquinaria/alquiler-sistema-secado'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >
      {t("translated-contacto-menumaq-sistemassecado")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/alquiler-carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )} */}
          </div>
          <div className="menu-item">
          <Link to='/maquinaria/alquiler-hormigoneras'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >{t("translated-contacto-menumaq-hormigoneras")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>

  </div>
  <div className="menu-item">
     <Link to='/maquinaria/alquiler-carretillas-elevadoras'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >{t("translated-contacto-menumaq-carretillaselevadoras")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
            {/* {menuItems.carretillasElevadoras && (
              <div className="submenu">
                <Link to='/maquinaria/alquiler-carretillaelev-1500e'><p>1500kg eléctrica</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1500d'><p>1500kg diesel</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-1600'><p>1600kg</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2000'><p>2000kg 4x4</p></Link>
                <Link to='/maquinaria/alquiler-carretillaelev-2500'> <p>2500kg</p></Link>
              </div>
            )}*/}
 
            </div> 
            <div className="menu-item">
     <Link to='/maquinaria/alquiler-jardineria'>
    <h4
      className={`menu-header ${menuItems.plataformasTijera ? "menu-header--open" : ""}`}
      onClick={() => toggleMenu("plataformasTijera")}
    >{t("translated-contacto-menumaq-maqjardineria")}{' '}
      <FontAwesomeIcon className='a-none' icon={menuItems.plataformasTijera ? faChevronDown : faChevronRight} />
    </h4>
  </Link>
  </div>
            </div>
      </nav>
      {/* </div> */}
    </>
  );
}

