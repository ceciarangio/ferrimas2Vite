
import Footer from '../../components/Footer/Footer';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import camion from '../../public/assets/camionPrueba.jpg';


export default function Nosotros() {
    const { t } = useTranslation();


    return <>
    <header className='ceje-Intro__header'>
        {/* <p className="idiomas">Idiomas</p> */}
        <LanguageSelector/>

    </header>
    <HeaderGeneral/>

    <div className='ceje-Intro__container__div'>
    <h1>{t("translated-bienvenido")}</h1>
    <div className='ceje-Intro__container__div'>

        <p className='ceje-Intro__container__div--p'>
        {t("translated-contamos_amplia_gama")}
        </p>
        <p className='ceje-Intro__container__div--p'>
        {t("translated-ademas_alquiler")}
        </p>
        <h3 className='ceje-Intro__container__div--h3'>
        {t("translated-agradecemos_sinceramente")}
        </h3>
    </div>
    
    </div>
    <div>
        <h3>Camiones propios para el transporte de maquinaria</h3>
        <img src={camion} alt='camion'/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
}
