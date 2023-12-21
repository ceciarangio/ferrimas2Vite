import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import dum2000 from "../../public/assets/Dumpers/dump-2000kg-pala.png";
import dum2000p from "../../public/assets/Dumpers/dump-2000kg.png";
import dum2500 from "../../public/assets/Dumpers/dump-2500kg.png";
import dump3500 from "../../public/assets/Dumpers/3500KG-dump.png";
import dump6500 from "../../public/assets/Dumpers/dump-6000kg.png";
import './Dumpers.scss';
import Footer from "../../components/Footer/Footer";

export default function Dumpers(){

    return<>
    <HeaderGeneral/>
    <MenuMaquinaria/>
    <div className="ceje-dumpers">
        <div>
            {/* <h3>Dúmper 2000kg</h3>
            <p>Hidroestático, 4x4 , con pala</p> */}
            <img src={dum2000} alt="dumper-2000-pala"/>
            <h3>Dúmper 2000kg</h3>
            <p>Hidroestático, 4x4 , con pala</p>
        </div>
        <div>
            {/* <h3>Dúmper 2000kg</h3>
            <p>Hidroestático, 4x4 , sin pala</p> */}
            <img src={dum2000p} alt="dumper-2000"/>
            <h3>Dúmper 2000kg</h3>
            <p>Hidroestático, 4x4 , sin pala</p>
        </div>
        <div>
            {/* <h3>Dúmper 2500kg</h3>
            <p>Hidroestático, 4x4 , giratorio</p> */}
            <img src={dum2500} alt="dumper-2500"/>
            <h3>Dúmper 2500kg</h3>
            <p>Hidroestático, 4x4 , giratorio</p>
        </div>
        <div>
            {/* <h3>Dúmper 3500kg</h3>
            <p>Hidroestático, 4x4 , con pala</p> */}
            <img src={dump3500} alt="dumper3500"/>
            <h3>Dúmper 3500kg</h3>
            <p>Hidroestático, 4x4 , con pala</p>
        </div>
        <div>
            {/* <h3>Dúmper 6000kg</h3>
            <p>Hidroestático, 4x4 , con pala</p> */}
            <img src={dump6500} alt="dumper-6000"/>
            <h3>Dúmper 6000kg</h3>
            <p>Hidroestático, 4x4 , con pala</p>
        </div>
        </div>
        <div className="footer-dumpers">
            <Footer/>
        </div>
    </>
}