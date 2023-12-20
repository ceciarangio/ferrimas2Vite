import Footer from '../../components/Footer/Footer'
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral'
import './CondicionesAlquiler.scss'
import { useTranslation } from 'react-i18next';


export default function CondicionesAlquiler(){
    const { t } = useTranslation();




    return <>
    <HeaderGeneral/>
    <h2 className='ceje-titularH2'>{t("translated-CondicionesAlquiler-titular")}</h2>
    <div className='ceje-condicionesContainer'>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion1")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion2")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion3")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion4")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion5")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion6")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion7")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion8")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion9")}}></p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p' dangerouslySetInnerHTML={{ __html: t("translated-CondicionesAlquiler-condicion10")}}></p>
        </div>

    </div>

    <div className='footer'>
        <Footer/>
    </div>

    </>
}