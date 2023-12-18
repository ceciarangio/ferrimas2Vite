import Footer from '../../components/Footer/Footer'
import HeaderGeneral from '../../components/HeaderGeneral/HeaderGeneral'
import './CondicionesAlquiler.scss'

export default function CondicionesAlquiler(){





    return <>
    <HeaderGeneral/>
    <h2 className='ceje-titularH2'>Condiciones de Alquiler FerriMas2</h2>
    <div className='ceje-condicionesContainer'>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>1. </span>El alquiler mínimo de cualquier máquina será de un (1) día, se facturará por días, incluyendo los fines de semana.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>2. </span>Las averías derivadas por el mal manejo del arrendatario no están incluidas e irán a cargo del mismo.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>3. </span>El arrendatario se compromete a hacer buen uso del material que se le entregue y a su conservación; si al retirar el material faltase alguina pieza o presente desperfectos, se obliga a satisfacer su importe al precio vigente.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>4. </span>El transporte de la maquinaria alquilada no está incluido en el precio del alquiler de la misma.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>5. </span>El alquiler empieza a devengarse en el momento en que la máquina es retirada.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>6. </span>El combustible no está incluido en el precio del alquiler de las máquinas.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>7. </span>La maquinaria de FerriMas2 está asegurada con responsabilidad civil, en ningún caso por robo o hurto.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>8. </span>En caso de robo o hurto de la máquina arrendada al arrendatario mientras este la tenga alquilada, este último abonará a FerriMas2 la maquinaria a precio vigente. Para tales casos, el arrendador queda facultado para expedir, a cargo de la arrendataria, la correpondiente factura comprensiva del precio de los materiales perdidos.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>9. </span>En el caso de que el arrendatario no devolviese la máquina, FerriMas2, S.L. presentará la correspondiente denuncia por robo contra el arrendatario.</p>
        </div>
        <div className='ceje-condicionesContainer__condicionesAlquiler'>
            <p className='ceje-condicionesContainer__condicionesAlquiler--p'><span className='colorRed'>10. </span>Para alquilar cualquier máquina, se tendrás que depositar una fianza. La cantidad quedará estipulada por la empresa, en relación al valor de la misma.</p>
        </div>

    </div>

    <div className='footer'>
        <Footer/>
    </div>

    </>
}