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