import Footer from '../../components/Footer/Footer';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import { useTranslation } from 'react-i18next';

import './Ventajas.scss';

export default function Ventajas(){
    const { t } = useTranslation();

    return <>
    <HeaderGeneral/>
    <h1 className='ceje-ventajas-h1'>{t("translated-ventajas-titular")}</h1>
    <div className="ceje-ventajasContainer">
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo1")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto1")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo2")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto2")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo3")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto3")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo4")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto4")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo5")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto5")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo6")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto6")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo7")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto7")}</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>{t("translated-ventajas-titulo8")}</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>{t("translated-ventajas-texto8")}</p>
        </div>
    </div>
    <div className='footer'>
        <Footer/>
    </div>
    </>
}