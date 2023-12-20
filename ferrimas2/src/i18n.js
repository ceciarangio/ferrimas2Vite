import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            "translated-bienvenido": 'Bienvenid@',

            "translated-contamos_amplia_gama": 'Contamos con una amplia gama de equipos de alta calidad, gracias a nuestras asociaciones con marcas de renombre como Kubota, Hilti, Hikoki, Ayerbe, Haulotte, Sima, entre otras.',

            "translated-ademas_alquiler": 'Además del alquiler, le invitamos a explorar nuestra tienda, donde puede adquirir herramientas y máquinas para sus proyectos. Nuestro equipo, conocido por su trato humano y personalizado, está aquí para asistirle con entusiasmo y encontrar la solución ideal para sus necesidades, sin compromisos.',

            "translated-agradecemos_sinceramente": 'Agradecemos sinceramente su confianza en nosotros.',

            "translated-descubrenos": '¡Descúbrenos!',
            // traducciones header
            "translated-header-shop": 'Tienda',
            "translated-header-aboutUs": 'Sobre nosotros',
            "translated-header-ventajas": 'Nuestras ventajas',
            "translated-header-training": 'Formación',
            "translated-header-rental": 'Alquiler de maquinaria',
            "translated-header-rental-conditions": 'Condiciones de alquiler',
            "translated-header-faq": 'Preguntas frecuentes (F.A.Q.)',
            "translated-header-contact": 'Contacto',
            // fin traducciones header

            //traducciones Home
            "translated-Home-exploraNuestraGama": 'Explora nuestra completa gama de maquinaria de obra, disponible para alquiler.',
            "translated-Home-botonOpcionesMaquinaria": 'Ver opciones de maquinaria',
            "translated-Home-ventajasFerriMas2": 'DESCUBRE LAS VENTAJAS CON FERRIMAS2',
            "translated-Home-seguridad": 'SEGURIDAD',
            "translated-Home-seguridad-descripción": 'Optar por el alquiler de maquinaria para construcción con <span>FerriMas2</span> te garantiza la solución más segura, completa y rentable para impulsar tu obra o proyecto. Nuestra maquinaria siempre se encuentra en condiciones óptimas, asegurando un entorno de trabajo seguro.',
            "translated-Home-ahorro": 'AHORRO',
            "translated-Home-ahorro-descripción": 'Al elegir el alquiler, tienes el control total sobre los costes de mantenimiento, incluyendo seguro de responsabilidad civil, transporte, almacenamiento y mantenimiento mecánico. Esto significa un ahorro significativo, ya que no tienes que preocuparte por estos aspectos.',
            "translated-Home-eficiencia": 'EFICIENCIA',
            "translated-Home-eficiencia-descripción": 'Seleccionar la máquina adecuada para cada trabajo, proyecto o evento garantiza eficiencia tanto en tiempo como en costes adicionales. El alquiler de maquinaria te permite adaptar tus recursos según las necesidades específicas de cada tarea, optimizando el rendimiento.',
            "translated-Home-tranquilidad": "Descubre la tranquilidad de trabajar con maquinaria en perfectas condiciones, controla tus gastos y maximiza la eficiencia con el alquiler de <span>FerriMas2</span>.<br/>¡Haz avanzar tu obra de manera segura y eficiente!",
            "translated-Home-maquinaria-alquiler": 'Maquinaria en Alquiler',
            "translated-Home-masveinteanos": 'Más de 20 años trabajando junto a profesionales y particulares',
            "translated-Home-plataformas-elevadoras": 'Plataformas Elevadoras',
            "translated-Home-dumpers": 'Dumpers',
            "translated-Home-vallas": 'Vallas',
            "translated-Home-generadores": 'Generadores',
            "translated-Home-carretillas-elevadoras": 'Carretillas Elevadoras',
            "translated-Home-excavadoras": 'Excavadoras',
            "translated-Home-consigue-presupuesto": '¡CONSIGUE TU PRESUPUESTO HOY MISMO!',
            "translated-Home-rentabilidad-garantizada": '<span>Rentabilidad Garantizada:</span><br></br> Alquilar nuestras máquinas para obras brinda un control de los gastos de manera eficiente y efectiva.',
            "translated-Home-soluciones-adaptadas": '<span> Soluciones Adaptadas a tus Necesidades:</span><br></br> Proporcionamos soluciones personalizadas que se ajustan específicamente a los requisitos de cada cliente.',
            "translated-Home-atencion-cliente": '<span>Atención al cliente: </span><br></br>Nos esforzamos por ofrecer un servicio al cliente excepcional, asegurando una experiencia satisfactoria para cada uno de nuestros clientes.',
            "translated-Home-pide-presupuesto": '¡Pide ya tu presupuesto!',
            // fin traducciones Home
            // Traducciones Condiciones Alquiler
            "translated-CondicionesAlquiler-titular": "Condiciones de Alquiler FerriMas2",
            "translated-CondicionesAlquiler-condicion1": "<span className='colorRed'>1. </span>El alquiler mínimo de cualquier máquina será de un (1) día, se facturará por días, incluyendo los fines de semana.",
            "translated-CondicionesAlquiler-condicion2": "<span className='colorRed'>2. </span>Las averías derivadas por el mal manejo del arrendatario no están incluidas e irán a cargo del mismo.",
            "translated-CondicionesAlquiler-condicion3": "<span className='colorRed'>3. </span>El arrendatario se compromete a hacer buen uso del material que se le entregue y a su conservación; si al retirar el material faltase alguina pieza o presente desperfectos, se obliga a satisfacer su importe al precio vigente.",
            "translated-CondicionesAlquiler-condicion4": "<span className='colorRed'>4. </span>El transporte de la maquinaria alquilada no está incluido en el precio del alquiler de la misma.",
            "translated-CondicionesAlquiler-condicion5": "<span className='colorRed'>5. </span>El alquiler empieza a devengarse en el momento en que la máquina es retirada.",
            "translated-CondicionesAlquiler-condicion6": "<span className='colorRed'>6. </span>El combustible no está incluido en el precio del alquiler de las máquinas.",
            "translated-CondicionesAlquiler-condicion7": "<span className='colorRed'>7. </span>La maquinaria de FerriMas2 está asegurada con responsabilidad civil, en ningún caso por robo o hurto.",
            "translated-CondicionesAlquiler-condicion8": "<span className='colorRed'>8. </span>En caso de robo o hurto de la máquina arrendada al arrendatario mientras este la tenga alquilada, este último abonará a FerriMas2 la maquinaria a precio vigente. Para tales casos, el arrendador queda facultado para expedir, a cargo de la arrendataria, la correpondiente factura comprensiva del precio de los materiales perdidos.",
            "translated-CondicionesAlquiler-condicion9": "<span className='colorRed'>9. </span>En el caso de que el arrendatario no devolviese la máquina, FerriMas2, S.L. presentará la correspondiente denuncia por robo contra el arrendatario.",
            "translated-CondicionesAlquiler-condicion10": "<span className='colorRed'>10. </span>Para alquilar cualquier máquina, se tendrás que depositar una fianza. La cantidad quedará estipulada por la empresa, en relación al valor de la misma.",
            // Fin traduccion Condiciones alquiler

            
            
        }
    },
    en: {
        translation: {
            "translated-bienvenido": 'Welcome',
            "translated-contamos_amplia_gama": 'We have a broad range of high-quality equipment, thanks to our partnerships with renowned brands such as Kubota, Hilti, Hikoki, Ayerbe, Haulotte, Sima, among others.',
            "translated-ademas_alquiler": 'In addition to rentals, we invite you to explore our store where you can purchase tools and machinery for your projects. Our team, known for its human and personalized approach, is here to assist you with enthusiasm and find the ideal solution for your needs, without compromises.',
            "translated-agradecemos_sinceramente": 'We sincerely appreciate your trust in us.',
            "translated-descubrenos": 'Discover us!',
            // traducciones header
            "translated-header-shop": 'Shop',
            "translated-header-aboutUs": 'About Us',
            "translated-header-ventajas": 'Our advantages',
            "translated-header-training": 'Training',
            "translated-header-rental": 'Machinery rental',
            "translated-header-rental-conditions": 'Rental conditions',
            "translated-header-faq": 'F.A.Q. (Frequently Asked Questions)',
            "translated-header-contact": 'Contact',
            // fin traducciones header
            // traducciones Home
            "translated-Home-exploraNuestraGama": 'Explore our complete range of construction machinery, available for rent.',
            "translated-Home-botonOpcionesMaquinaria": 'See machinery options',
            "translated-Home-ventajasFerriMas2": 'DISCOVER THE ADVANTAGES WITH FERRIMAS2',
            "translated-Home-seguridad": 'SECURITY',
            "translated-Home-seguridad-descripción": 'Opting for construction machinery rental with <span>FerriMas2</span> guarantees you the safest, most complete and cost-effective solution to boost your construction project. Our machinery is always in optimal conditions, ensuring a safe working environment.',
            "translated-Home-ahorro": 'SAVINGS',
            "translated-Home-ahorro-descripción": 'By choosing rental, you have total control over maintenance costs, including liability insurance, transportation, storage and mechanical maintenance. This means significant savings, as you don\'t have to worry about these aspects.',
            "translated-Home-eficiencia": 'EFFICIENCY',
            "translated-Home-eficiencia-descripción": 'Selecting the right machine for each job, project or event guarantees efficiency in both time and additional costs. Machinery rental allows you to adapt your resources according to the specific needs of each task, optimizing performance.',
            "translated-Home-tranquilidad": 'Discover the peace of mind of working with machinery in perfect condition, control your expenses and maximize efficiency with <span>FerriMas2</span> rental. <br/> Move your project forward safely and efficiently!',
            "translated-Home-maquinaria-alquiler": 'Machinery for Rent',
            "translated-Home-masveinteanos": 'More than 20 years working with professionals and individuals',
            "translated-Home-plataformas-elevadoras": 'Elevating Platforms',
            "translated-Home-dumpers": 'Dumpers',
            "translated-Home-vallas": 'Fences',
            "translated-Home-generadores": 'Generators',
            "translated-Home-carretillas-elevadoras": 'Forklifts',
            "translated-Home-excavadoras": 'Excavators',
            "translated-Home-consigue-presupuesto": 'GET YOUR QUOTE TODAY!',
            "translated-Home-rentabilidad-garantizada": '<span>Guaranteed Profitability:</span><br></br> Renting our construction machinery provides efficient and effective control of expenses.',
            "translated-Home-soluciones-adaptadas": '<span>Customized Solutions for your Needs:</span><br></br> We provide customized solutions that specifically fit the requirements of each client.',
            "translated-Home-atencion-cliente": '<span>Customer Service: </span><br></br>We strive to provide exceptional customer service, ensuring a satisfactory experience for each of our clients.',
            "translated-Home-pide-presupuesto": 'Get your quote now!',
            // fin traducciones Home

            // Traducciones Condiciones Alquiler
            "translated-CondicionesAlquiler-titular": "Rental Conditions FerriMas2",
            "translated-CondicionesAlquiler-condicion1": `<span className='colorRed'>1. </span>The minimum rental period for any machine will be one (1) day, billed on a daily basis, including weekends.`,
            "translated-CondicionesAlquiler-condicion2": 
            `<span className='colorRed'>2. </span>Breakdowns resulting from improper handling by the lessee are not included and will be the lessee's responsibility.`,
            "translated-CondicionesAlquiler-condicion3": "<span className='colorRed'>3. </span>The lessee undertakes to make proper use of the equipment delivered and to ensure its conservation. If any piece is missing or if there is any damage upon return, the lessee agrees to pay for its replacement at the current price.",
            "translated-CondicionesAlquiler-condicion4": "<span className='colorRed'>4. </span>The transportation of the rented machinery is not included in the rental price.",
            "translated-CondicionesAlquiler-condicion5": "<span className='colorRed'>5. </span>Rental charges begin to accrue from the moment the machine is removed.",
            "translated-CondicionesAlquiler-condicion6": "<span className='colorRed'>6. </span>Fuel is not included in the rental price of the machines.",
            "translated-CondicionesAlquiler-condicion7": "<span className='colorRed'>7. </span>FerriMas2's machinery is insured for civil liability, but not in any case for theft.",
            "translated-CondicionesAlquiler-condicion8": "<span className='colorRed'>8. </span>In case of theft of the rented machine while in the lessee's possession, the lessee will pay FerriMas2 the current price of the machinery. In such cases, the lessor is authorized to issue, at the expense of the lessee, the corresponding invoice including the price of the lost materials.",
            "translated-CondicionesAlquiler-condicion9": "<span className='colorRed'>9. </span>In case that the lessee fails to return the machine, FerriMas2, S.L. will file the corresponding theft report against the lessee.",
            "translated-CondicionesAlquiler-condicion10": "<span className='colorRed'>10. </span>To rent any machine, a security deposit must be paid. The amount will be determined by the company, in relation to the value of the machine.",
            // Fin traduccion Condiciones alquiler
        }
    },
    val: {
        translation: {
            "translated-bienvenido": 'Benvingud@',
            "translated-contamos_amplia_gama": "Contem amb una àmplia gamma d'equips d'alta qualitat, gràcies a les nostres associacions amb marques de renom com Kubota, Hilti, Hikoki, Ayerbe, Haulotte, Sima, entre altres.",
            "translated-ademas_alquiler": 'A més del lloguer, us convidem a explorar la nostra botiga, on podeu adquirir eines i màquines per als vostres projectes. El nostre equip, conegut pel seu tracte humà i personalitzat, està ací per a assistir-vos amb entusiasme i trobar la solució ideal per a les vostres necessitats, sense compromisos.',
            "translated-agradecemos_sinceramente": 'Agraïm sincerament la vostra confiança en nosaltres.',
            "translated-descubrenos": 'Descobreix-nos!',
            // traducciones header
            "translated-header-shop": 'Botiga',
            "translated-header-aboutUs": 'Sobre nosaltres',
            "translated-header-ventajas": 'Les nostres avantatges',
            "translated-header-training": 'Formació',
            "translated-header-rental": 'Lloguer de maquinària',
            "translated-header-rental-conditions": 'Condicions de lloguer',
            "translated-header-faq": 'Preguntes freqüents (F.A.Q.)',
            "translated-header-contact": 'Contacte',
            // fin traducciones header

            // traducciones Home
            "translated-Home-exploraNuestraGama": 'Explora la nostra completa gamma de maquinària d\'obra, disponible per a lloguer.',
            "translated-Home-botonOpcionesMaquinaria": 'Veure opcions de maquinària',
            "translated-Home-ventajasFerriMas2": 'DESCOBRE LES AVANTATGES AMB FERRIMAS2',
            "translated-Home-seguridad": 'SEGURETAT',
            "translated-Home-seguridad-descripción": 'Optar pel lloguer de maquinària per a construcció amb <span>FerriMas2</span> et garanteix la solució més segura, completa i rendible per a impulsar la teua obra o projecte. La nostra maquinària sempre es troba en condicions òptimes, assegurant un entorn de treball segur.',
            "translated-Home-ahorro": 'ESTALVI',
            "translated-Home-ahorro-descripción": 'En triar el lloguer, tens el control total sobre els costos de manteniment, incloent assegurança de responsabilitat civil, transport, emmagatzematge i manteniment mecànic. Això significa un estalvi significatiu, ja que no has de preocupar-te per aquests aspectes.',
            "translated-Home-eficiencia": 'EFICIÈNCIA',
            "translated-Home-eficiencia-descripción": 'Seleccionar la màquina adequada per a cada treball, projecte o esdeveniment garanteix eficiència tant en temps com en costos addicionals. El lloguer de maquinària et permet adaptar els teus recursos segons les necessitats específiques de cada tasca, optimitzant el rendiment.',
            "translated-Home-tranquilidad": 'Descobreix la tranquil·litat de treballar amb maquinària en perfectes condicions, controla les teues despeses i maximitza l\'eficiència amb el lloguer de <span>FerriMas2</span>.<br/> Fes avançar la teua obra de manera segura i eficient!',
            "translated-Home-maquinaria-alquiler": 'Maquinària en Lloguer',
            "translated-Home-masveinteanos": 'Més de 20 anys treballant amb professionals i particulars',
            "translated-Home-plataformas-elevadoras": 'Plataformes Elevadores',
            "translated-Home-dumpers": 'Dumpers',
            "translated-Home-vallas": 'Valls',
            "translated-Home-generadores": 'Generadors',
            "translated-Home-carretillas-elevadoras": 'Carretons Elevadors',
            "translated-Home-excavadoras": 'Excavadores',
            "translated-Home-consigue-presupuesto": 'CONSEGUEIX EL TEU PRESSUPOST AVUI MATEIX!',
            "translated-Home-rentabilidad-garantizada": '<span>Rentabilitat Garantida:</span><br></br> Llogar les nostres màquines per a obres brinda un control de les despeses de manera eficient i efectiva.',
            "translated-Home-soluciones-adaptadas": '<span> Solucions Adaptades a les teues Necessitats:</span><br></br> Proporcionem solucions personalitzades que s\'ajusten específicament als requisits de cada client.',
            "translated-Home-atencion-cliente": '<span>Atenció al client: </span><br></br>Ens esforcem per a oferir un servei al client excepcional, assegurant una experiència satisfactòria per a cadascun dels nostres clients.',
            "translated-Home-pide-presupuesto": 'Demana ja el teu pressupost!',
            // fin traducciones Home

            // Traducciones Condiciones Alquiler
            "translated-CondicionesAlquiler-titular": "Condicions de Lloguer FerriMas2",
            "translated-CondicionesAlquiler-condicion1": "<span className='colorRed'>1. </span>El lloguer mínim de qualsevol màquina serà d'un (1) dia, facturat per dies, incloent els caps de setmana.",
            "translated-CondicionesAlquiler-condicion2": "<span className='colorRed'>2. </span>Les avaries derivades del mal ús per part del llogater no estan incloses i aniran a càrrec del mateix.",
            "translated-CondicionesAlquiler-condicion3": "<span className='colorRed'>3. </span>El llogater es compromet a fer un bon ús del material que se li entrega i a conservar-lo; si en retirar el material faltara alguna peça o presentara desperfectes, es compromet a satisfer el seu import al preu vigent.",
            "translated-CondicionesAlquiler-condicion4": "<span className='colorRed'>4. </span>El transport de la maquinària llogada no està inclòs en el preu del lloguer de la mateixa.",
            "translated-CondicionesAlquiler-condicion5": "<span className='colorRed'>5. </span>El lloguer comença a devengar-se en el moment en què la màquina és retirada.",
            "translated-CondicionesAlquiler-condicion6": "<span className='colorRed'>6. </span>El combustible no està inclòs en el preu del lloguer de les màquines.",
            "translated-CondicionesAlquiler-condicion7": "<span className='colorRed'>7. </span>La maquinària de FerriMas2 està assegurada amb responsabilitat civil, en cap cas per robatori o furt.",
            "translated-CondicionesAlquiler-condicion8": "<span className='colorRed'>8. </span>En cas de robatori de la màquina llogada mentre estigui en possessió del llogater, aquest últim abonarà a FerriMas2 la maquinària al preu vigent. Per a aquests casos, el llogater queda facultat per a expedir, a càrrec del llogater, la corresponent factura comprensiva del preu dels materials perduts.",
            "translated-CondicionesAlquiler-condicion9": "<span className='colorRed'>9. </span>En el cas que el llogater no tornara la màquina, FerriMas2, S.L. presentarà la corresponent denúncia per robatori contra el llogater.",
            "translated-CondicionesAlquiler-condicion10": "<span className='colorRed'>10. </span>Per llogar qualsevol màquina, caldrà dipositar una fiança. La quantitat serà estipulada per l'empresa, en relació amb el valor de la mateixa.",
            // Fin traduccion Condiciones alquiler
        }
    }



};
i18n
.use(initReactI18next)
.init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
        escapeValue: false, // No es necesario escapar las cadenas traducidas
    },
});

export default i18n;