import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import MenuMaquinaria from "../../components/MenuMaquinaria/MenuMaquinaria";
import './CarretillasElevadoras.scss';
import carret1500e from '../../public/assets/carretilla-elevadora/carret-1500-electr.png';
import carret1500d from '../../public/assets/carretilla-elevadora/carret-1500kg-diesel.png';
import carret1600 from '../../public/assets/carretilla-elevadora/carret-1600-electrica.png';
import carret2000 from '../../public/assets/carretilla-elevadora/carret-2000-diesel.png';
import carret2500 from '../../public/assets/carretilla-elevadora/carret-2500kg-diesel.png';



export default function PlataformasArticuladas(){

    return <>
        <HeaderGeneral/>
        <MenuMaquinaria/>
        <div className="ceje-carretillas">
            <div>
                <h3>1500kg Eléctrica</h3>
                <img src={carret1500e} alt="carretillas 1500e"/>
            </div>
            <div>
                <h3>1500kg Diesel</h3>
                <img src={carret1500d} alt="carretillas 1500d"/>
            </div>
            <div>
                <h3>1600kg Eléctrica</h3>
                <img src={carret1600} alt="carretillas 1600"/>
            </div>
            <div>
                <h3>2000kg Diesel 4x4</h3>
                <img src={carret2000} alt="carretillas 2000"/>
            </div>
            <div>
                <h3>2500kg Diesel</h3>
                <img src={carret2500} alt="carretillas 2500"/>
            </div>
           
        </div>
    </>
}