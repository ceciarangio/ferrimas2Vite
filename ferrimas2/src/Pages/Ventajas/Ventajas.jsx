import Footer from '../../components/Footer/Footer';
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral';
import WhatsAppLink from '../../components/WhatsAppLink/WhatsAppLink';
import './Ventajas.scss';

export default function Ventajas(){







    return <>
    <HeaderGeneral/>
    <div className="whatsapp">
        <WhatsAppLink phoneNumber="+34647834593" message={"Buenos días, estaría interesado/a en saber más sobre el alquiler de maquinaria."}/>
      </div>
    <h1 className='ceje-ventajas-h1'>Descubre las ventajas de alquilar con FerriMas2.</h1>
    <div className="ceje-ventajasContainer">
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>FLEXIBILIDAD DE ACTUALIZACIÓN</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>La opción de alquiler permite a su empresa adaptarse rápidamente a las últimas tecnologías y modelos, sin quedar atrapada con equipos obsoletos.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>GESTIÓN AMBIENTAL</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Contribuye a la sostenibilidad al reducir la producción de residuos asociada con la obsolescencia de equipos y fomenta la reutilización.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>LIBERACIÓN DE CAPITAL</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Al no inmovilizar recursos financieros en la compra de maquinaria, se libera capital que puede destinarse a otras áreas estratégicas del negocio.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>SERVICIO TÉCNICO INCLUIDO</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Muchas empresas de alquiler ofrecen servicios técnicos especializados, lo que garantiza un mantenimiento adecuado y reduce el tiempo de inactividad.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>NO DEPRECIACIÓN DEL ACTIVO</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Al evitar la propiedad del equipo, se elimina la preocupación por la depreciación del activo, lo que puede afectar positivamente a la contabilidad de la empresa.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>RENTABILIDAD A CORTO PLAZO</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>El alquiler permite a las empresas beneficiarse de la maquinaria sin compromisos financieros a largo plazo, lo que puede ser especialmente ventajoso en proyectos temporales.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>ASESORAMIENTO PROFESIONAL</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Alquilando, se puede obtener asesoramiento de expertos en la selección de equipos que se ajusten específicamente a las necesidades de cada proyecto.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>LIBERTAD GEOGRÁFICA</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Facilita la movilidad de la maquinaria según las necesidades de los proyectos, sin estar limitado a un solo lugar de operación.</p>
        </div>
        <div className='ceje-ventajasContainer__ventajas'>
            <h2 className='ceje-ventajasContainer__ventajas--h2'>RESPONSABILIDAD DEL PROVEEDOR</h2>
            <p className='ceje-ventajasContainer__ventajas--p'>Los costes asociados con problemas técnicos o de mantenimiento recaen en el proveedor de alquiler, aliviando a la empresa de estas responsabilidades.</p>
        </div>
    </div>
    <div className='footer'>
        <Footer/>
    </div>
    </>
}