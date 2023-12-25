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
            "translated-Home-more": 'Ver más',
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
            // Inicio traducción ventajas
            "translated-ventajas-titular": "Descubre las ventajas de alquilar con FerriMas2.",
            "translated-ventajas-titulo1": "FLEXIBILIDAD DE ACTUALIZACIÓN",
            "translated-ventajas-texto1": "La opción de alquiler permite a su empresa adaptarse rápidamente a las últimas tecnologías y modelos, sin quedar atrapada con equipos obsoletos.",
            "translated-ventajas-titulo2": "GESTIÓN AMBIENTAL",
            "translated-ventajas-texto2": "Contribuye a la sostenibilidad al reducir la producción de residuos asociada con la obsolescencia de equipos y fomenta la reutilización.",
            "translated-ventajas-titulo3": "LIBERACIÓN DE CAPITAL",
            "translated-ventajas-texto3": "Al no inmovilizar recursos financieros en la compra de maquinaria, se libera capital que puede destinarse a otras áreas estratégicas del negocio.",
            "translated-ventajas-titulo4": "SERVICIO TÉCNICO INCLUIDO",
            "translated-ventajas-texto4": "Muchas empresas de alquiler ofrecen servicios técnicos especializados, lo que garantiza un mantenimiento adecuado y reduce el tiempo de inactividad.",
            "translated-ventajas-titulo5": "RENTABILIDAD A CORTO PLAZO",
            "translated-ventajas-texto5": "El alquiler permite a las empresas beneficiarse de la maquinaria sin compromisos financieros a largo plazo, lo que puede ser especialmente ventajoso en proyectos temporales.",
            "translated-ventajas-titulo6": "ASESORAMIENTO PROFESIONAL",
            "translated-ventajas-texto6": "Alquilando, se puede obtener asesoramiento de expertos en la selección de equipos que se ajusten específicamente a las necesidades de cada proyecto.",
            "translated-ventajas-titulo7": "LIBERTAD GEOGRÁFICA",
            "translated-ventajas-texto7": "Facilita la movilidad de la maquinaria según las necesidades de los proyectos, sin estar limitado a un solo lugar de operación.",
            "translated-ventajas-titulo8": "RESPONSABILIDAD DEL PROVEEDOR",
            "translated-ventajas-texto8": "Los costes asociados con problemas técnicos o de mantenimiento recaen en el proveedor de alquiler, aliviando a la empresa de estas responsabilidades.",
            // Fin traducción ventajas

            // Inicio traducción Contacto
            "translated-contacto-titular": "Formulario de Contacto",
            "translated-contacto-alCompletar": "Al completar este formulario de contacto, encontrarás soluciones para cualquier pregunta o consulta relacionada con nuestros servicios.",
            "translated-contacto-asimismo": "Asimismo, podrás solicitar un presupuesto sin compromiso de manera sencilla y rápida mediante este formulario.",
            "translated-contacto-nuestroEquipo": "Nuestro equipo de atención al cliente se encargará de proporcionarte una respuesta rápida en el menor tiempo posible. Estamos aquí para ayudarte.",
            "translated-contacto-placeholder-nombre": "Nombre o Empresa",
            "translated-contacto-placeholder-email": "Correo Electrónico",
            "translated-contacto-placeholder-phonenumber": "Número de teléfono",
            "translated-contacto-placeholder-machine": "¿Qué máquina desea alquilar?",
            "translated-contacto-placeholder-ciudad": "Ciudad y población",
            "translated-contacto-placeholder-fechaAlquiler": "Fecha de alquiler",
            "translated-contacto-placeholder-diasAlquiler": "Días de alquiler",
            "translated-contacto-placeholder-infoAdicional": "Información adicional",
            "translated-contacto-placeholder-enviar": "Enviar",
            "translated-contacto-placeholder-alpulsar": "Al pulsar en el botón 'Enviar', confirma que ha leído y acepta nuestra",
            "translated-contacto-placeholder-polipriv": "Política de Privacidad",
            "translated-contacto-placeholder-successMessage": "Formulario enviado con éxito! Nos pondremos en contacto a la brevedad, gracias.",

            // Fin traducción Contacto
            // Inicio traducción Formación
            "translated-contacto-formacion-titular": "FORMACION",
            "translated-contacto-formacion-colaboramos": "Colaboramos con Autoescuela Eurovial para proporcionar capacitación en el manejo de:",
            "translated-contacto-formacion-list1": "Carretillas Elevadoras",
            "translated-contacto-formacion-list2": "Plataformas Elevadoras",
            "translated-contacto-formacion-list3": "Manipulador telescópico",
            "translated-contacto-formacion-paramasinfo": "Para más Información puedes contactar al",
            "translated-contacto-formacion-oatraves": "o a travès de su página web",

            // Fin traducción Formación

            // Inicio traducción Maquinaria
            "translated-contacto-maquinaria-titulo": "MAQUINARIA DE ALQUILER",
            "translated-contacto-maquinaria-dumpers": "DUMPERS",
            "translated-contacto-maquinaria-compactadoras": "COMPACTADORAS",
            "translated-contacto-maquinaria-excavadoras": "EXCAVADORAS",
            "translated-contacto-maquinaria-platarticuladas": "PLATAFORMAS ARTICULADAS",
            "translated-contacto-maquinaria-plattijera": "PLATAFORMAS DE TIJERA",
            "translated-contacto-maquinaria-maqcorte": "MAQUINARIA DE CORTE",

            // Fin traducción Maquinaria

            // Inicio traducción Menu Maquinaria
            "translated-contacto-menumaq-titular": "MAQUINARIA EN ALQUILER",
            "translated-contacto-menumaq-dumpers": "DUMPERS",
            "translated-contacto-menumaq-gruposelectrogenos": "GRUPOS ELECTROGENOS",
            "translated-contacto-menumaq-martilloselectricos": "MARTILLOS ELECTRICOS",
            "translated-contacto-menumaq-maquinariacorte": "MAQUINARIA DE CORTE",
            "translated-contacto-menumaq-vallas": "VALLAS",
            "translated-contacto-menumaq-senalizacion": "SEÑALIZACION",
            "translated-contacto-menumaq-compactadoras": "COMPACTADORAS",
            "translated-contacto-menumaq-excavadoras": "EXCAVADORAS",
            "translated-contacto-menumaq-plataformasarticuladas": "PLATAFORMAS ARTICULADAS",
            "translated-contacto-menumaq-plataformastijera": "PLATAFORMAS DE TIJERA",
            "translated-contacto-menumaq-limpieza": "LIMPIEZA",
            "translated-contacto-menumaq-bombasagua": "BOMBAS DE AGUA",
            "translated-contacto-menumaq-compresoraire": "COMPRESOR DE AIRE",
            "translated-contacto-menumaq-sistemassecado": "SISTEMAS DE SECADO",
            "translated-contacto-menumaq-hormigoneras": "HORMIGONERAS",
            "translated-contacto-menumaq-carretillaselevadoras": "CARRETILLAS ELEVADORAS",
            "translated-contacto-menumaq-maqjardineria": "MAQUINARIA DE JARDINERIA",

            // Fin traducción Menu Maquinaria

            // Inicio traducción FAQ
            "translated-faq-titulo": "Preguntas Frecuentes",
            "translated-faq-titulo-2": "¿Cuáles son los beneficios de alquilar maquinaria en lugar de comprar?",
            "translated-faq-p1": "¿Cuáles son los beneficios de alquilar maquinaria en lugar de comprar?",
            "translated-faq-r1": "Si quieres saber cuáles son los beneficios de alquilar maquinaria en lugar de comprar, visita ",
            "translated-faq-r1-1": "este enlace",
            "translated-faq-p2": "¿Qué tipos de maquinaria de obra tienen disponible para alquilar?",
            "translated-faq-r2": "Disponemos de multiples tipos de maquinaria, como Dumpers, Plataformas elevadoras ó excavadoras. Puedes ver la lista completa de maquinaria",
            "translated-faq-r2-1": " AQUÍ",
            "translated-faq-p3": "¿Cuál es la duración mínima de alquiler de la maquinaria?",
            "translated-faq-r3": "La duración mínima de alquiler es de 1 (un) día.",
            "translated-faq-p4": "¿Cómo se determinan los costos de alquiler?.",
            "translated-faq-r4": "Los costos de alquiler variarán en función de la maquinaria y cantidad de días. Para saber más, rellene el formulario de contacto que puede encontrar en ",
            "translated-faq-r4-1": "este enlace",
            "translated-faq-p5": "¿Ofrecen entrega y recogida de la maquinaria en el lugar de trabajo?",
            "translated-faq-r5": "Sí. En estos casos al precio se le añaden los portes de la maquinaria, que variarán en función de la distancia.",
            "translated-faq-p6": "¿Puedo alquilar maquinaria para proyectos a largo plazo?",
            "translated-faq-r6": "Sí, no hay ningún problema.",
            "translated-faq-p7": "¿Se proporciona asesoramiento técnico para la selección de maquinaria?",
            "translated-faq-r7": "Sí. En caso de necesitar asesoramiento, estaremos encantamos de ayudarle.",
            "translated-faq-p8": "¿Ofrecen opciones de alquiler con operador?",
            "translated-faq-r8": "No. El alquiler es solamente de la maquinaria.",
            "translated-faq-p9": "¿Cuál es el proceso para reservar y confirmar un alquiler?",
            "translated-faq-r9": "Para reservar un alquiler, hay que ponerse en contacto con nuestras oficinas. Desde allí le asesorarán y le guiarán en el proceso de alquiler y confirmación del mismo. También puede contactar con nosotros a través de email o con nuestro ",
            "translated-faq-r9-1": "formulario",
            "translated-faq-r9-2": " y le contactaremos a la mayor brevedad posible.",
            "translated-faq-p10": "¿Qué sucede si la maquinaria se avería durante el período de alquiler?",
            "translated-faq-r10": "En caso de avería, debe ponerse en contacto con nosotros tan pronto le sea posible con el fin de solucionar esa avería de la forma más rápida posible.",
            "translated-faq-p11": "¿Cómo puedo realizar el pago del alquiler?",
            "translated-faq-r11": "El pago del alquiler se puede realizar en efectivo, tarjeta o transferéncia bancaria.",
            "translated-faq-p12": "¿Cuál es el horario de atención al cliente para consultas y asistencia?",
            "translated-faq-r12": "Nuestro horario de oficina es de 7:30h a 13:30h y de 15:30h a 18:30h.",



            // Fin traducción FAQ
            
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
            "translated-Home-more": 'See more',
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
            // Inicio traducción ventajas
            "translated-ventajas-titular": "Discover the advantages of renting with FerriMas2.",
            "translated-ventajas-titulo1": "FLEXIBILITY OF UPGRADING",
            "translated-ventajas-texto1": "The rental option allows your company to quickly adapt to the latest technologies and models, avoiding being stuck with outdated equipment.",
            "translated-ventajas-titulo2": "ENVIRONMENTAL MANAGEMENT",
            "translated-ventajas-texto2": "Contributes to sustainability by reducing waste production associated with equipment obsolescence and promoting reuse.",
            "translated-ventajas-titulo3": "CAPITAL RELEASE",
            "translated-ventajas-texto3": "By not tying up financial resources in machinery purchases, capital is freed up for allocation to other strategic areas of the business.",
            "translated-ventajas-titulo4": "INCLUDED TECHNICAL SERVICE",
            "translated-ventajas-texto4": "Many rental companies provide specialized technical services, ensuring proper maintenance and minimizing downtime.",
            "translated-ventajas-titulo5": "SHORT-TERM PROFITABILITY",
            "translated-ventajas-texto5": "Renting allows companies to benefit from machinery without long-term financial commitments, which can be especially advantageous for temporary projects.",
            "translated-ventajas-titulo6": "PROFESSIONAL ADVICE",
            "translated-ventajas-texto6": "Through renting, expert advice on equipment selection tailored to the specific needs of each project can be obtained.",
            "translated-ventajas-titulo7": "GEOGRAPHICAL FREEDOM",
            "translated-ventajas-texto7": "Facilitates machinery mobility based on project needs, without being restricted to a single operating location.",
            "translated-ventajas-titulo8": "SUPPLIER RESPONSIBILITY",
            "translated-ventajas-texto8": "Costs associated with technical or maintenance issues fall on the rental provider, relieving the company of these responsibilities.",

            // Fin traducción ventajas

            // Inicio traducción Contacto
            "translated-contacto-titular": "Contact Form",
            "translated-contacto-alCompletar": "By completing this contact form, you will find solutions for any questions or inquiries related to our services.",
            "translated-contacto-asimismo": "You can also request a non-binding quote easily and quickly through this form.",
            "translated-contacto-nuestroEquipo": "Our customer service team will take care of providing you with a quick response as soon as possible. We are here to help you.",
            "translated-contacto-placeholder-nombre": "Name or Company",
            "translated-contacto-placeholder-email": "Email",
            "translated-contacto-placeholder-phonenumber": "Phone Number",
            "translated-contacto-placeholder-machine": "Which machine do you want to rent?",
            "translated-contacto-placeholder-ciudad": "City and Town",
            "translated-contacto-placeholder-fechaAlquiler": "Rental Date",
            "translated-contacto-placeholder-diasAlquiler": "Rental Days",
            "translated-contacto-placeholder-infoAdicional": "Additional Information",
            "translated-contacto-placeholder-enviar": "Send",
            "translated-contacto-placeholder-alpulsar": "By clicking the 'Send' button, you confirm that you have read and accept our",
            "translated-contacto-placeholder-polipriv": "Privacy Policy",
            "translated-contacto-placeholder-successMessage": "Form submitted successfully! We will contact you shortly, thank you.",
            // Fin traducción Contacto

            // Inicio traducción Formación
            "translated-contacto-formacion-titular": "TRAINING",
            "translated-contacto-formacion-colaboramos": "We collaborate with Autoescuela Eurovial to provide training in the handling of:",
            "translated-contacto-formacion-list1": "Forklifts",
            "translated-contacto-formacion-list2": "Elevated Platforms",
            "translated-contacto-formacion-list3": "Telescopic Handler",
            "translated-contacto-formacion-paramasinfo": "For more information, you can contact them at",
            "translated-contacto-formacion-oatraves": "or through their website",

            // Fin traducción Formación    
            
            // Inicio traducción Maquinaria
            "translated-contacto-maquinaria-titulo": "RENTAL MACHINERY",
            "translated-contacto-maquinaria-dumpers": "DUMPERS",
            "translated-contacto-maquinaria-compactadoras": "COMPACTORS",
            "translated-contacto-maquinaria-excavadoras": "EXCAVATORS",
            "translated-contacto-maquinaria-platarticuladas": "ARTICULATED PLATFORMS",
            "translated-contacto-maquinaria-plattijera": "SCISSOR LIFTS",
            "translated-contacto-maquinaria-maqcorte": "CUTTING MACHINERY",

            // Fin traducción Maquinaria
            // Inicio traducción Menu Maquinaria
            "translated-contacto-menumaq-titular": "MACHINERY FOR RENT",
            "translated-contacto-menumaq-dumpers": "DUMPERS",
            "translated-contacto-menumaq-gruposelectrogenos": "POWER GENERATORS",
            "translated-contacto-menumaq-martilloselectricos": "ELECTRIC HAMMERS",
            "translated-contacto-menumaq-maquinariacorte": "CUTTING MACHINERY",
            "translated-contacto-menumaq-vallas": "FENCES",
            "translated-contacto-menumaq-senalizacion": "SIGNALIZATION",
            "translated-contacto-menumaq-compactadoras": "COMPACTORS",
            "translated-contacto-menumaq-excavadoras": "EXCAVATORS",
            "translated-contacto-menumaq-plataformasarticuladas": "ARTICULATED PLATFORMS",
            "translated-contacto-menumaq-plataformastijera": "SCISSOR LIFTS",
            "translated-contacto-menumaq-limpieza": "CLEANING",
            "translated-contacto-menumaq-bombasagua": "WATER PUMPS",
            "translated-contacto-menumaq-compresoraire": "AIR COMPRESSOR",
            "translated-contacto-menumaq-sistemassecado": "DRYING SYSTEMS",
            "translated-contacto-menumaq-hormigoneras": "CONCRETE MIXERS",
            "translated-contacto-menumaq-carretillaselevadoras": "FORKLIFTS",
            "translated-contacto-menumaq-maqjardineria": "GARDENING MACHINERY",

            // Fin traducción Menu Maquinaria

            // Inicio traducción FAQ
            "translated-faq-titulo": "Frequently Asked Questions",
            "translated-faq-titulo-2": "What are the benefits of renting machinery instead of buying?",
            "translated-faq-titulo-3": "If you want to know the benefits of renting machinery instead of buying, visit",
            "translated-faq-titulo-3-1": "this link",
            "translated-faq-p1": "What are the benefits of renting machinery instead of buying?",
            "translated-faq-r1": "If you want to know the benefits of renting machinery instead of buying, visit ",
            "translated-faq-r1-1": "this link",
            "translated-faq-p2": "What types of construction machinery do you have available for rent?",
            "translated-faq-r2": "We have various types of machinery, such as Dumpers, Lift Platforms, and Excavators. You can see the complete list of machinery ",
            "translated-faq-r2-1": "HERE",
            "translated-faq-p3": "What is the minimum rental duration for machinery?",
            "translated-faq-r3": "The minimum rental duration is 1 (one) day.",
            "translated-faq-p4": "How are rental costs determined?",
            "translated-faq-r4": "Rental costs will vary depending on the machinery and the number of days. To learn more, fill out the contact form that you can find at ",
            "translated-faq-r4-1": "this link",
            "translated-faq-p5": "Do you offer delivery and pickup of machinery at the worksite?",
            "translated-faq-r5": "Yes. In these cases, the price includes the transportation of the machinery, which will vary depending on the distance.",
            "translated-faq-p6": "Can I rent machinery for long-term projects?",
            "translated-faq-r6": "Yes, there is no problem.",
            "translated-faq-p7": "Is technical advice provided for the selection of machinery?",
            "translated-faq-r7": "Yes. In case you need advice, we will be happy to help.",
            "translated-faq-p8": "Do you offer rental options with an operator?",
            "translated-faq-r8": "No. The rental is only for the machinery.",
            "translated-faq-p9": "What is the process for booking and confirming a rental?",
            "translated-faq-r9": "To book a rental, you need to contact our offices. From there, they will advise and guide you through the rental and confirmation process. You can also contact us via email or through our ",
            "translated-faq-r9-1": "form",
            "translated-faq-r9-2": " and we will contact you as soon as possible.",
            "translated-faq-p10": "What happens if the machinery breaks down during the rental period?",
            "translated-faq-r10": "In case of a breakdown, you should contact us as soon as possible to resolve the issue as quickly as possible.",
            "translated-faq-p11": "How can I make the payment for the rental?",
            "translated-faq-r11": "Payment for the rental can be made in cash, by card, or by bank transfer.",
            "translated-faq-p12": "What is the customer service hours for inquiries and assistance?",
            "translated-faq-r12": "Our office hours are from 7:30 am to 1:30 pm and from 3:30 pm to 6:30 pm.",



            // Fin traducción FAQ
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
            "translated-Home-more": 'Veure mes',
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
            // Inicio traducción ventajas
            "translated-ventajas-titular": "Descobreix els avantatges de llogar amb FerriMas2.",
            "translated-ventajas-titulo1": "FLEXIBILITAT D'ACTUALITZACIÓ",
            "translated-ventajas-texto1": "L'opció de lloguer permet a la teua empresa adaptar-se ràpidament a les últimes tecnologies i models, sense quedar atrapada amb equips obsolets.",
            "translated-ventajas-titulo2": "GESTIÓ AMBIENTAL",
            "translated-ventajas-texto2": "Contribueix a la sostenibilitat al reduir la producció de residus associada a l'obsolescència d'equips i fomenta la reutilització.",
            "translated-ventajas-titulo3": "ALLIBERAMENT DE CAPITAL",
            "translated-ventajas-texto3": "Al no immobilitzar recursos financers en la compra de maquinària, es llibera capital que pot destinar-se a altres àrees estratègiques del negoci.",
            "translated-ventajas-titulo4": "SERVEI TÈCNIC INCLOS",
            "translated-ventajas-texto4": "Moltes empreses de lloguer ofereixen serveis tècnics especialitzats, garantint un manteniment adequat i reduint el temps d'inactivitat.",
            "translated-ventajas-titulo5": "RENTABILITAT A CURT TERMINI",
            "translated-ventajas-texto5": "El lloguer permet a les empreses beneficiar-se de la maquinària sense compromisos financers a llarg termini, la qual cosa pot ser especialment avantatjosa en projectes temporals.",
            "translated-ventajas-titulo6": "ASSESSORAMENT PROFESSIONAL",
            "translated-ventajas-texto6": "Llogant, es pot obtenir assessorament d'experts en la selecció d'equips que s'ajusten específicament a les necessitats de cada projecte.",
            "translated-ventajas-titulo7": "LLIBERTAT GEOGRÀFICA",
            "translated-ventajas-texto7": "Facilita la mobilitat de la maquinària segons les necessitats dels projectes, sense estar limitat a un sol lloc d'operació.",
            "translated-ventajas-titulo8": "RESPONSABILITAT DEL PROVEÏDOR",
            "translated-ventajas-texto8": "Els costos associats a problemes tècnics o de manteniment recauen en el proveïdor de lloguer, alleujant l'empresa d'aquestes responsabilitats.",

            // Fin traducción ventajas
            // Inicio traducción Contacto

            "translated-contacto-titular": "Formulari de Contacte",
            "translated-contacto-alCompletar": "En completar aquest formulari de contacte, trobaràs solucions per a qualsevol pregunta o consulta relacionada amb els nostres serveis.",
            "translated-contacto-asimismo": "A més, podràs sol·licitar un pressupost sense compromís de manera senzilla i ràpida mitjançant aquest formulari.",
            "translated-contacto-nuestroEquipo": "El nostre equip d'atenció al client es responsabilitzarà de proporcionar-te una resposta ràpida en el menor temps possible. Estem aquí per ajudar-te.",
            "translated-contacto-placeholder-nombre": "Nom o Empresa",
            "translated-contacto-placeholder-email": "Correu Electrònic",
            "translated-contacto-placeholder-phonenumber": "Número de Telèfon",
            "translated-contacto-placeholder-machine": "Quina màquina vols llogar?",
            "translated-contacto-placeholder-ciudad": "Ciutat i Població",
            "translated-contacto-placeholder-fechaAlquiler": "Data de Lloguer",
            "translated-contacto-placeholder-diasAlquiler": "Dies de Lloguer",
            "translated-contacto-placeholder-infoAdicional": "Informació Addicional",
            "translated-contacto-placeholder-enviar": "Enviar",
            "translated-contacto-placeholder-alpulsar": "En prémer el botó 'Enviar', confirmes que has llegit i acceptes la nostra",
            "translated-contacto-placeholder-polipriv": "Política de Privacitat",
            "translated-contacto-placeholder-successMessage": "Formulari enviat amb èxit! Ens posarem en contacte aviat, gràcies.",
            // Fin traducción Contacto

            // Inicio traducción Formación

            "translated-contacto-formacion-titular": "FORMACIÓ",
            "translated-contacto-formacion-colaboramos": "Col·laborem amb Autoescola Eurovial per proporcionar formació en la manipulació de:",
            "translated-contacto-formacion-list1": "Carretons Elevadors",
            "translated-contacto-formacion-list2": "Plataformes Elevadores",
            "translated-contacto-formacion-list3": "Manipulador telescòpic",
            "translated-contacto-formacion-paramasinfo": "Per a més informació, podeu contactar amb ells a",
            "translated-contacto-formacion-oatraves": "o a través del seu lloc web",

            // Fin traducción Formación     
            
            // Inicio traducción Maquinaria

            "translated-contacto-maquinaria-titulo": "MAQUINÀRIA DE LLOGUER",
            "translated-contacto-maquinaria-dumpers": "DUMPERS",
            "translated-contacto-maquinaria-compactadoras": "COMPACTADORES",
            "translated-contacto-maquinaria-excavadoras": "EXCAVADORES",
            "translated-contacto-maquinaria-platarticuladas": "PLATAFORMES ARTICULADES",
            "translated-contacto-maquinaria-plattijera": "PLATAFORMES DE TISORES",
            "translated-contacto-maquinaria-maqcorte": "MAQUINÀRIA DE TALL",

            // Fin traducción Maquinaria

            // Inicio traducción Menu Maquinaria

            "translated-contacto-menumaq-titular": "MAQUINÀRIA EN LLOGUER",
            "translated-contacto-menumaq-dumpers": "DUMPERS",
            "translated-contacto-menumaq-gruposelectrogenos": "GRUPS ELECTRÒGENS",
            "translated-contacto-menumaq-martilloselectricos": "MARTELLS ELÈCTRICS",
            "translated-contacto-menumaq-maquinariacorte": "MAQUINÀRIA DE TALL",
            "translated-contacto-menumaq-vallas": "VALLES",
            "translated-contacto-menumaq-senalizacion": "SIGNALITZACIÓ",
            "translated-contacto-menumaq-compactadoras": "COMPACTADORES",
            "translated-contacto-menumaq-excavadoras": "EXCAVADORES",
            "translated-contacto-menumaq-plataformasarticuladas": "PLATAFORMES ARTICULADES",
            "translated-contacto-menumaq-plataformastijera": "PLATAFORMES DE TIJERA",
            "translated-contacto-menumaq-limpieza": "NETEJA",
            "translated-contacto-menumaq-bombasagua": "BOMBES D'AIGUA",
            "translated-contacto-menumaq-compresoraire": "COMPRESSOR D'AIRE",
            "translated-contacto-menumaq-sistemassecado": "SISTEMES DE SEQUEDAT",
            "translated-contacto-menumaq-hormigoneras": "HORMIGONERES",
            "translated-contacto-menumaq-carretillaselevadoras": "CARRETILLES ELEVADORES",
            "translated-contacto-menumaq-maqjardineria": "MAQUINÀRIA DE JARDINERIA",

            // Fin traducción Menu Maquinaria

            // Inicio traducción FAQ
            "translated-faq-titulo": "Preguntes Freqüents",
            "translated-faq-titulo-2": "Quins són els beneficis de llogar maquinària en lloc de comprar-la?",
            "translated-faq-titulo-3": "Si vols conèixer els beneficis de llogar maquinària en lloc de comprar-la, visita",
            "translated-faq-titulo-3-1": "aquest enllaç",
            "translated-faq-p1": "Quins són els beneficis de llogar maquinària en lloc de comprar-la?",
            "translated-faq-r1": "Si vols conèixer els beneficis de llogar maquinària en lloc de comprar-la, visita ",
            "translated-faq-r1-1": "aquest enllaç",
            "translated-faq-p2": "Quins tipus de maquinària de construcció teniu disponible per llogar?",
            "translated-faq-r2": "Disposem de diversos tipus de maquinària, com ara Dumpers, Plataformes elevadores i Excavadores. Pots veure la llista completa de maquinària",
            "translated-faq-r2-1": " ACÍ",
            "translated-faq-p3": "Quina és la durada mínima de lloguer de la maquinària?",
            "translated-faq-r3": "La durada mínima de lloguer és d'1 (un) dia.",
            "translated-faq-p4": "Com es determinen els costos de lloguer?",
            "translated-faq-r4": "Els costos de lloguer varien en funció de la maquinària i del nombre de dies. Per a obtenir més informació, ompli el formulari de contacte que pot trobar a ",
            "translated-faq-r4-1": "aquest enllaç",
            "translated-faq-p5": "Oferiu lliurament i recollida de la maquinària al lloc de treball?",
            "translated-faq-r5": "Sí. En aquests casos, el preu inclou el transport de la maquinària, que variarà en funció de la distància.",
            "translated-faq-p6": "Puc llogar maquinària per a projectes a llarg termini?",
            "translated-faq-r6": "Sí, no hi ha cap problema.",
            "translated-faq-p7": "Es proporciona assessorament tècnic per a la selecció de maquinària?",
            "translated-faq-r7": "Sí. En cas que necessitis assessorament, estarem encantats d'ajudar-te.",
            "translated-faq-p8": "Oferiu opcions de lloguer amb operador?",
            "translated-faq-r8": "No. El lloguer és només de la maquinària.",
            "translated-faq-p9": "Quin és el procés per a reservar i confirmar un lloguer?",
            "translated-faq-r9": "Per a reservar un lloguer, has de posar-te en contacte amb les nostres oficines. Des d'allà, t'assessoraran i t'orientaran en el procés de lloguer i confirmació del mateix. També pots posar-te en contacte amb nosaltres per correu electrònic o a través del nostre ",
            "translated-faq-r9-1": "formulari ",
            "translated-faq-r9-2": "i ens posarem en contacte amb tu el més aviat possible.",
            "translated-faq-p10": "Què passa si la maquinària es trenca durant el període de lloguer?",
            "translated-faq-r10": "En cas de trencament, has de posar-te en contacte amb nosaltres tan aviat com sigui possible per resoldre el problema el més ràpidament possible.",
            "translated-faq-p11": "Com puc fer el pagament del lloguer?",
            "translated-faq-r11": "El pagament del lloguer es pot fer en efectiu, amb targeta o per transferència bancària.",
            "translated-faq-p12": "Quin és l'horari d'atenció al client per a consultes i assistència?",
            "translated-faq-r12": "El nostre horari d'oficina és de 7:30h a 13:30h i de 15:30h a 18:30h.",



            // Fin traducción FAQ
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