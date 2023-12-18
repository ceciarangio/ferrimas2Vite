import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import vallasmet from '../../public/assets/vallas/valla-pie-hormigon.png';
import vallaprot from '../../public/assets/vallas/valla-peatonal.png';
import './Vallas.scss';

export default function Vallas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-vallas">
        <div>
            <h3>Vallas Metalicas</h3>
            <img src={vallasmet} alt="vallas metalicas"/>
        </div>
        <div>
            <h3>Vallas de Protección</h3>
            <img src={vallaprot} alt="vallas de proteccion"/>
        </div>
        </div>
    </>
}