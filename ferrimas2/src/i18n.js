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
            
            // Inicio traducción Politica Privacidad
            "translated-polpriv-titulo": "POLÍTICA DE PRIVACIDAD DE FERRI MAS 2 S.L.",
            "translated-polpriv-contenido": "<p> Fecha de última actualización: 30 de Noviembre de 2023 <p>La presente política de privacidad describe cómo Ferri Mas 2 S.L. ('nosotros', 'nuestra' o 'la Empresa') recoge, utiliza y protege la información personal de los usuarios ('usted' o 'el Usuario') en el sitio web y en todas las interacciones relacionadas con Ferri Mas 2 S.L. Su privacidad es de suma importancia para nosotros, y nos comprometemos a proteger la confidencialidad y seguridad de sus datos personales. Al utilizar nuestro sitio web y proporcionar información personal, usted acepta los términos de esta política de privacidad.</p><p> 1. RESPONSABLE DEL TRATAMIENTO</p>Razón Social: FERRI MAS 2 S.L. CIF: B53980124 Domicilio: Polígono Industrial l'Alberca, C / Benifato nº 27, 03530 La Nucia (Alicante) Teléfonos: 966896113 o 647834593. Email para comunicaciones en materia de Protección de datos: ferrimas2@gmail.com En adelante, la 'Empresa' o el 'Responsable'.<p>2. FINALIDADES DEL TRATAMIENTO </p><p>Ferri Mas 2 S.L. recogerá y tratará sus datos personales para las siguientes finalidades: Atender sus consultas y enviar información relacionada con sus solicitudes. Cumplir con las obligaciones contractuales en el caso de adquisición de productos y/o servicios, así como realizar la gestión administrativa, fiscal y contable derivada de los trabajos realizados. Enviar información comercial periódica sobre nuestros productos y/o servicios, incluyendo newsletters, o información de terceros con los que mantengamos colaboraciones comerciales. Gestionar publicaciones en redes sociales y en nuestro sitio web, en caso de que decida seguirnos en nuestras páginas o permita la publicación de sus datos. Participar en procesos de selección de personal en caso de envío de su curriculum vitae. </p> <p>3. LEGITIMACIÓN DEL TRATAMIENTO </p><p>Consentimiento del interesado para las finalidades 1, 3 y 4. Ejecución del contrato suscrito para la finalidad 2. Interés legítimo en el caso de la finalidad 3 cuando exista  una relación contractual previa.</p> <p> 4. CONSERVACIÓN DE LOS DATOS</p>            <p>Conservaremos los datos mientras sea necesario para cumplir con las finalidades mencionadas y durante el periodo de prescripción de las obligaciones legales. Los currículos recibidos serán destruidos en caso de descarte, conservándolos máximo un año.</p> <p>5. DERECHOS DE LOS INTERESADOS </p> <p>Usted tiene derecho a: Acceder a sus datos personales. Solicitar la rectificación o supresión de los datos inexactos. Solicitar la limitación del tratamiento de sus datos. Oponerse al tratamiento de sus datos en determinadas circunstancias. Retirar el consentimiento en cualquier momento, cuando sea la base legal del tratamiento. Para ejercer sus derechos, puede dirigirse a la Empresa a través de las direcciones y medios indicados en la sección 'DÓNDE PUEDE EJERCER LOS DERECHOS'.</p><p>6. DESTINATARIOS DE LA INFORMACIÓN</p><p> No cederemos información a terceros salvo obligación legal y las necesarias para prestar los servicios, o bien en el caso de que usted preste su consentimiento expreso e inequívoco.</p><p>  7. ACTUALIZACIÓN DE DATOS PERSONALES</p><p>Usted garantiza que los datos personales proporcionados son veraces, correctos, actuales y completos. Debe comunicar cualquier modificación o actualización de los mismos a través de los medios indicados en 'DÓNDE PUEDE EJERCER LOS DERECHOS'. </p> <p>8. COOKIES Y MEDIDAS DE SEGURIDAD </p><p>Ferri Mas 2 S.L. podrá utilizar cookies durante la prestación de servicios del sitio web. Consulte nuestra política de cookies para más información. Asimismo, hemos implementado medidas de seguridad técnicas y organizativas para proteger sus datos.</p><p>9. ACEPTACIÓN Y CONSENTIMIENTO</p>Al utilizar nuestro sitio web y proporcionar información personal, usted manifiesta haber sido informado sobre nuestra política de protección de datos y consiente el tratamiento de sus datos de acuerdo con los términos expuestos. </p><p>10. CONTACTO Y EJERCICIO DE DERECHOS</p><p>Para ejercer sus derechos o realizar consultas sobre esta política de privacidad, puede dirigirse a: FERRI MAS 2 S.L. Polígono Industrial l'Alberca, C/ Benifato nº 27, 03530 La Nucia (Alicante) Teléfonos: 966896113 o 647834593. Email: ferrimas2@gmail.com </p><p>Fecha de última actualización: 30 de Noviembre de 2023</p>",

            // Fin traducción Política Privacidad

            // Inicio traducción Política Cookies
            "translated-polcookies-titulo": "POLÍTICA DE COOKIES DE FERRI MAS 2 S.L.",
            "translated-polcookies-contenido": "1. ANTECEDENTES <br/> De acuerdo con la normativa española que regula el uso de cookies en relación con la prestación de servicios de comunicaciones electrónicas, conforme al Real Decreto Ley 13/2012 del 30 de marzo, la presente política informa sobre las cookies utilizadas en el sitio web de Ferri Mas 2 S.L. y su finalidad. Al navegar en el Sitio Web, el usuario presta su consentimiento para el uso de cookies. </p>  <p>2. ¿QUÉ SON LAS COOKIES? <br/>Una cookie es un archivo que se descarga en el ordenador al acceder a ciertas páginas web. Permiten almacenar y recuperar información sobre los hábitos de navegación del usuario. Las cookies se asocian únicamente a un usuario anónimo y su dispositivo, sin proporcionar referencias que permitan conocer datos personales. </p><p>3. TIPOS DE COOKIES<br/> Cookies Técnicas: Permiten la navegación y utilización de las opciones o servicios de la web. Ejemplos incluyen control de tráfico, identificación de sesión y elementos de seguridad.<br/> Cookies de Personalización: Ofrecen servicios con características generales predefinidas en función de criterios como idioma o tipo de navegador.<br/>Cookies de Análisis: Cuantifican el número de usuarios para realizar análisis estadísticos y mejorar la oferta de productos o servicios.<br/> Cookies Publicitarias: Gestionan eficazmente los espacios publicitarios, adaptando el contenido al servicio solicitado o al uso del sitio web.<br/>Cookies de Publicidad Comportamental: Permiten gestionar los espacios publicitarios en función del comportamiento de los usuarios.<br/> Cookies de Terceros: Se utilizan servicios de terceros para recopilar información estadística y mejorar la experiencia del usuario. </p><p> 4. COOKIES UTILIZADAS POR ESTE SITIO WEB<br/> Las cookies utilizadas son de sesión y de terceros. Permiten almacenar información sobre idioma, tipo de navegador, y otras características generales predefinidas por el usuario. También se emplean cookies publicitarias. La utilización de cookies mejora la navegación, el acceso a servicios y facilita el análisis para introducir mejoras.</p>           <p>5. REVOCACIÓN Y ELIMINACIÓN DE COOKIES<br/> El usuario puede configurar su navegador para aceptar o rechazar cookies. Los siguientes enlaces proporcionan información detallada según el navegador utilizado:<br/>            Google Chrome:  https://support.google.com/chrome/answer/95647?hl=es <br/>  Microsoft Internet Explorer: http://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-9 <br/> Firefox: http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we <br/> Safari: http://www.apple.com/es/privacy/use-of-cookies/ <br/> Opera: http://help.opera.com/Linux/10.60/es-ES/cookies.html  </p><p> 6. TERCEROS PRESTADORES DE SERVICIOS Se han contratado servicios de terceros que utilizan cookies. En particular, se utiliza Google Analytics para el análisis estadístico del sitio web. Puede obtener más información sobre el tratamiento de datos por parte de Google en Política de Privacidad de Google http://www.google.es/intl/es/policies/privacy/. </p><h4> DATOS DE LA EMPRESA: <br/>Razón Social: <br/>Ferri Mas 2 S.L.</h4><p>Fecha de Última Actualización: 30 de Noviembre de 2023.",
            // Fin traducción Política Cookies

            // Inicio traducción Aviso Legal
            "translated-avisolegal": "<h2>Aviso Legal</h2><p>Última modificación: 30 de Noviembre de 2023 Este documento regula el uso del sitio web de Ferri Mas 2 S.L. (en adelante, 'el si tio web'). La utilización del sitio web otorga la condición de usuario, implicando la aceptación plena y sin reservas de todas las disposiciones.</p><p>Condiciones de Uso</p>        <p>Ferri Mas 2 S.L. se reserva el derecho de modificar estas condiciones en cualquier momento sin notificación previa. Los cambios se anunciarán en esta página con razonable antelación a su implementación. Se recomienda revisar periódicamente las condiciones. La utilización del sitio web después de los cambios implica la aceptación de las nuevas condiciones. Si en algún momento no acepta las condiciones, debe dejar de usar el sitio web. Cualquier propuesta, comunicación o cláusula que modifique estas condiciones no será considerada ni tendrá efecto.</p>        <p>0. Definiciones</p>        <p>Sitio web: Todas las características, contenidos y servicios ofrecidos a través de aplicaciones móviles/de escritorio y el sitio web ferrimas2.com o sitios afiliados. Usuario: Persona, dispositivo, servicio, API, aplicación, robot, alienígena o inteligencia artificial que accede al sitio web.</p><p>1. Aceptación de las Condiciones de Uso</p> <p>El usuario declara haber leído y aceptado las condiciones. Asegura tener la capacidad jurídica para formar parte del acuerdo, no utilizará derechos de forma ilícita y usará el servicio según lo descrito.</p><p>2. Derechos de Autor</p> <p>El sitio web, incluyendo diseño, textos, logotipos, imágenes, código fuente, pertenece a Ferri Mas 2 S.L. No se puede usar sin permiso. Contenidos no originales indican la fuente y licencia original.</p><p>3. Restricciones de Uso</p> <p>No se puede utilizar el sitio web para actividades ilícitas o contradictorias. El servicio es solo para uso personal no lucrativo. Usted reconoce que el servicio ha sido desarrollado por Ferri Mas 2 S.L.</p><p>4. Exclusión de Garantías y Responsabilidad</p><p>El usuario utiliza el sitio bajo su responsabilidad. El sitio web no garantiza el acceso sin errores ni se hace responsable de daños causados por elementos destructivos. Se excluye responsabilidad por daños derivados del acceso al sitio.</p><p>5. Enlaces y Framing</p> <p>Se pueden incluir enlaces a cualquier página o contenido del sitio web, excluyendo archivos no HTML. No se puede enlazar desde sitios con temas inapropiados o ilegales. No se permite framing que altere la integridad del sitio web.</p> <p>6. Jurisdicción</p><p>Las condiciones se rigen por las leyes del Reino de España. Cualquier acción legal se presentará en los tribunales de Alicante</p><p>7. Finalización</p><p>Ambas partes pueden finalizar la relación por incumplimiento. En caso de incumplimiento, el usuario debe dejar de usar el servicio y destruir todo material obtenido del sitio web.</p>"



            // Fin traducción Aviso Legal
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

            // Inicio traducción Politica Privacidad

            "translated-polpriv-titulo": "PRIVACY POLICY OF FERRI MAS 2 S.L.",
            "translated-polpriv-contenido": "<p>Last Update Date: November 30, 2023</p>" + "<p>This privacy policy describes how Ferri Mas 2 S.L. ('we,' 'our,' or 'the Company') collects, uses, and protects personal information of users ('you' or 'the User') on the website and in all interactions related to Ferri Mas 2 S.L. Your privacy is of utmost importance to us, and we are committed to protecting the confidentiality and security of your personal data. By using our website and providing personal information, you agree to the terms of this privacy policy.</p>" + "<p>1. DATA CONTROLLER</p>Company Name: FERRI MAS 2 S.L. VAT ID: B53980124 Address: Industrial Estate l'Alberca, C / Benifato No. 27, 03530 La Nucia (Alicante) Phones: 966896113 or 647834593. Email for data protection communications: ferrimas2@gmail.com Hereinafter, the 'Company' or the 'Controller.'</p>" + "<p>2. PURPOSES OF PROCESSING</p>" + "<p>Ferri Mas 2 S.L. will collect and process your personal data for the following purposes: Respond to your inquiries and send information related to your requests. Fulfill contractual obligations in the case of product and/or service acquisition, as well as carry out the administrative, fiscal, and accounting management derived from the work performed. Send periodic commercial information about our products and/or services, including newsletters, or information from third parties with whom we have commercial collaborations. Manage posts on social networks and on our website if you decide to follow us on our pages or allow the publication of your data. Participate in personnel selection processes in case of submitting your curriculum vitae.</p>" + "<p>3. LEGAL BASIS FOR PROCESSING</p>" + "<p>Consent of the data subject for purposes 1, 3, and 4. Execution of the contract signed for purpose 2. Legitimate interest in the case of purpose 3 when there is a previous contractual relationship.</p><p>4. DATA RETENTION</p>" + "<p>We will keep the data as long as necessary to fulfill the mentioned purposes and during the prescription period of legal obligations. Resumes received will be destroyed in case of rejection, keeping them for a maximum of one year.</p>" + "<p>5. RIGHTS OF THE DATA SUBJECTS</p>" + "<p>You have the right to: Access your personal data. Request the rectification or deletion of inaccurate data. Request the limitation of the processing of your data. Object to the processing of your data in certain circumstances. Withdraw consent at any time, when it is the legal basis for processing. To exercise your rights, you can contact the Company through the addresses and means indicated in the 'WHERE YOU CAN EXERCISE YOUR RIGHTS' section.</p>" + "<p>6. RECIPIENTS OF THE INFORMATION</p>" + "<p>We will not transfer information to third parties except legal obligation and those necessary to provide services, or in the case that you give your express and unequivocal consent.</p>" + "<p>7. UPDATE OF PERSONAL DATA</p>" + "<p>You guarantee that the personal data provided is true, correct, current, and complete. You must communicate any modification or update of them through the means indicated in 'WHERE YOU CAN EXERCISE YOUR RIGHTS.'</p>" + "<p>8. COOKIES AND SECURITY MEASURES</p>" + "<p>Ferri Mas 2 S.L. may use cookies during the provision of website services. See our cookie policy for more information. Likewise, we have implemented technical and organizational security measures to protect your data.</p>" + "<p>9. ACCEPTANCE AND CONSENT</p>By using our website and providing personal information, you acknowledge having been informed about our data protection policy and consent to the processing of your data in accordance with the terms outlined.</p>" + "<p>10. CONTACT AND EXERCISE OF RIGHTS</p>" + "<p>To exercise your rights or make inquiries about this privacy policy, you can contact: FERRI MAS 2 S.L. Industrial Estate l'Alberca, C/ Benifato No. 27, 03530 La Nucia (Alicante) Phones: 966896113 or 647834593. Email: ferrimas2@gmail.com</p>" + "<p>Last Update Date: November 30, 2023</p>",

            // Fin traducción Política Privacidad

            // Inicio traducción Política Cookies
            "translated-polcookies-titulo": "COOKIES POLICY OF FERRI MAS 2 S.L.",
            "translated-polcookies-contenido": "1. BACKGROUND <br/> In accordance with Spanish regulations governing the use of cookies in relation to the provision of electronic communications services, as established by Royal Decree-Law 13/2012 of March 30, this policy provides information about the cookies used on the Ferri Mas 2 S.L. website and their purpose. By browsing the website, the user gives consent to the use of cookies.</p> <p>2. WHAT ARE COOKIES? <br/> A cookie is a file that is downloaded to the computer when accessing certain websites. They allow storing and retrieving information about the user's browsing habits. Cookies are associated only with an anonymous user and their device, without providing references that allow identifying personal data.</p> <p>3. TYPES OF COOKIES <br/> Technical Cookies: Allow navigation and use of the options or services on the website. Examples include traffic control, session identification, and security elements.<br/> Customization Cookies: Offer services with predefined general features based on criteria such as language or type of browser.<br/> Analytics Cookies: Quantify the number of users for statistical analysis and improve the offer of products or services.<br/> Advertising Cookies: Efficiently manage advertising spaces, adapting content to the requested service or the use of the website.<br/> Behavioral Advertising Cookies: Allow managing advertising spaces based on user behavior.<br/> Third-Party Cookies: Third-party services are used to collect statistical information and improve the user experience.</p> <p>4. COOKIES USED BY THIS WEBSITE <br/> The cookies used are session and third-party cookies. They allow storing information about language, type of browser, and other general features predefined by the user. Advertising cookies are also used. The use of cookies improves navigation, access to services, and facilitates analysis for introducing improvements.</p> <p>5. REVOCATION AND REMOVAL OF COOKIES <br/> The user can configure their browser to accept or reject cookies. The following links provide detailed information depending on the browser used:<br/> Google Chrome:  https://support.google.com/chrome/answer/95647?hl=en <br/> Microsoft Internet Explorer: http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies#ie=ie-9 <br/> Firefox: http://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences <br/> Safari: http://www.apple.com/privacy/use-of-cookies/ <br/> Opera: http://help.opera.com/Linux/10.60/en/cookies.html </p> <p>6. THIRD-PARTY SERVICE PROVIDERS <br/> Third-party services that use cookies have been contracted. In particular, Google Analytics is used for the statistical analysis of the website. You can get more information about the data processing by Google in the Google Privacy Policy http://www.google.com/intl/en/policies/privacy/. </p> <h4> COMPANY DETAILS: <br/> Company Name: <br/> Ferri Mas 2 S.L.</h4> <p>Last Update Date: November 30, 2023.",
            // Fin traducción Política Cookies

            // Inicio traducción Aviso Legal
            "translated-avisolegal": "<h2>Legal Notice</h2><p>Last Modified: November 30, 2023 This document regulates the use of the Ferri Mas 2 S.L. website (hereinafter, 'the website'). The use of the website grants the user status, implying full and unconditional acceptance of all provisions.</p><p>Terms of Use</p> <p>Ferri Mas 2 S.L. reserves the right to modify these conditions at any time without prior notice. Changes will be announced on this page reasonably in advance of their implementation. It is recommended to periodically review the conditions. The use of the website after changes implies acceptance of the new conditions. If, at any time, you do not accept the conditions, you must stop using the website. Any proposal, communication, or clause modifying these conditions will not be considered or have effect.</p> <p>0. Definitions</p> <p>Website: All features, content, and services offered through mobile/desktop applications and the website ferrimas2.com or affiliated sites. User: Person, device, service, API, application, robot, alien, or artificial intelligence accessing the website.</p><p>1. Acceptance of Terms of Use</p> <p>The user declares to have read and accepted the conditions. Ensures having the legal capacity to be part of the agreement, will not use rights unlawfully, and will use the service as described.</p><p>2. Copyright</p> <p>The website, including design, texts, logos, images, source code, belongs to Ferri Mas 2 S.L. It cannot be used without permission. Non-original content indicates the source and original license.</p><p>3. Use Restrictions</p> <p>The website cannot be used for unlawful or contradictory activities. The service is for personal non-profit use only. You acknowledge that the service has been developed by Ferri Mas 2 S.L.</p><p>4. Disclaimer and Liability Exclusion</p> <p>The user uses the site at their own risk. The website does not guarantee error-free access and is not responsible for damage caused by destructive elements. Liability for damages arising from access to the site is excluded.</p><p>5. Links and Framing</p> <p>Links to any page or content of the website may be included, excluding non-HTML files. Linking from sites with inappropriate or illegal themes is not allowed. Framing that alters the integrity of the website is not permitted.</p><p>6. Jurisdiction</p> <p>The conditions are governed by the laws of the Kingdom of Spain. Any legal action will be filed in the courts of Alicante.</p><p>7. Termination</p> <p>Both parties may terminate the relationship for breach. In case of breach, the user must stop using the service and destroy all material obtained from the website.</p>"

            // Fin traducción Aviso Legal
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

            // Inicio traducción Politica Privacidad
            "translated-polpriv-titulo": "POLÍTICA DE PRIVACITAT DE FERRI MAS 2 S.L.",
            "translated-polpriv-contenido": "<p>Data de última actualització: 30 de novembre de 2023 </p><p>Aquesta política de privadesa descriu com Ferri Mas 2 S.L. ('nosaltres', 'la nostra' o 'l'Empresa') recull, utilitza i protegeix la informació personal dels usuaris ('vosté' o 'l'Usuari') al lloc web i en totes les interaccions relacionades amb Ferri Mas 2 S.L. La seua privadesa és de suma importància per a nosaltres, i ens comprometem a protegir la confidencialitat i seguretat de les seues dades personals. En utilitzar el nostre lloc web i proporcionar informació personal, vosté accepta els termes d'aquesta política de privadesa.</p><p>1. RESPONSABLE DEL TRACTAMENT</p>Raó Social: FERRI MAS 2 S.L. CIF: B53980124 Domicili: Polígon Industrial l'Alberca, C / Benifato nº 27, 03530 La Nucia (Alacant) Telèfons: 966896113 o 647834593. Correu electrònic per a comunicacions en matèria de Protecció de dades: ferrimas2@gmail.com D'ara endavant, l''Empresa' o el 'Responsable'.</p><p>2. FINALITATS DEL TRACTAMENT </p><p>Ferri Mas 2 S.L. recollirà i tractarà les seues dades personals per a les següents finalitats: Atendre les seues consultes i enviar informació relacionada amb les seues sol·licituds. Complir amb les obligacions contractuales en el cas d'adquisició de productes i/o serveis, així com realitzar la gestió administrativa, fiscal i comptable derivada dels treballs realitzats. Enviar informació comercial periòdica sobre els nostres productes i/o serveis, incloent newsletters, o informació de tercers amb els quals mantinguem col·laboracions comercials. Gestionar publicacions en xarxes socials i en el nostre lloc web, en cas que decideixi seguir-nos a les nostres pàgines o permeti la publicació de les seues dades. Participar en processos de selecció de personal en cas d'enviament del seu currículum vitae. </p> <p>3. LEGITIMACIÓ DEL TRACTAMENT </p><p>Consentiment de l'interessat per a les finalitats 1, 3 i 4. Execució del contracte subscrit per a la finalitat 2. Interès legítim en el cas de la finalitat 3 quan existeixi una relació contractual prèvia.</p> <p> 4. CONSERVACIÓ DE LES DADES</p> <p>Conservarem les dades mentre siga necessari per a complir amb les finalitats esmentades i durant el període de prescripció de les obligacions legals. Els currículums rebuts seran destruïts en cas de rebutjar-los, conservant-los com a màxim un any.</p> <p>5. DRETS DE ELS INTERESSATS </p> <p>Vosté té dret a: Accedir a les seues dades personals. Sol·licitar la rectificació o supressió de les dades inexactes. Sol·licitar la limitació del tractament de les seues dades. Oposar-se al tractament de les seues dades en determinades circumstàncies. Retirar el consentiment en qualsevol moment, quan siga la base legal del tractament. Per exercir els seus drets, pot dirigir-se a l'Empresa a través de les adreces i mitjans indicats a la secció 'ON POT EXERCIR ELS DRETS'.</p><p>6. DESTINATARIS DE LA INFORMACIÓ</p><p>No cedirem informació a tercers llevat d'obligació legal i les necessàries per a prestar els serveis, o bé en el cas que vosté preste el seu consentiment exprés i inequívoc.</p><p>  7. ACTUALITZACIÓ DE LES DADES PERSONALS</p><p>Vosté garanteix que les dades personals proporcionades són veraces, correctes, actuals i completes. Ha de comunicar qualsevol modificació o actualització de les mateixes a través dels mitjans indicats en 'ON POT EXERCIR ELS DRETS'. </p> <p>8. GALETES I MESURES DE SEGURETAT </p><p>Ferri Mas 2 S.L. podrà utilitzar galetes durant la prestació de serveis del lloc web. Consulte la nostra política de galetes per a més informació. Així mateix, hem implementat mesures de seguretat tècniques i organitzatives per a protegir les seues dades.</p><p>9. ACCEPTACIÓ I CONSENTIMENT</p>En utilitzar el nostre lloc web i proporcionar informació personal, vosté manifesta haver sigut informat sobre la nostra política de protecció de dades i consentir el tractament de les seues dades d'acord amb els termes exposats. </p><p>10. CONTACTE I EXERCICI DE DRETS</p><p>Per a exercir els seus drets o realitzar consultes sobre aquesta política de privadesa, pot dirigir-se a: FERRI MAS 2 S.L. Polígon Industrial l'Alberca, C/ Benifato nº 27, 03530 La Nucia (Alacant) Telèfons: 966896113 o 647834593. Correu electrònic: ferrimas2@gmail.com </p><p>Data de última actualització: 30 de novembre de 2023</p>",

            // Fin traducción Política Privacidad

            // Inicio traducción Política Cookies
            "translated-polcookies-titulo": "POLÍTICA DE COOKIES DE FERRI MAS 2 S.L.",
            "translated-polcookies-contenido": "1. ANTECEDENTS <br/> D'acord amb la normativa espanyola que regula l'ús de galetes en relació amb la prestació de serveis de comunicacions electròniques, conforme al Reial decret Llei 13/2012 del 30 de març, la present política informa sobre les galetes utilitzades al lloc web de Ferri Mas 2 S.L. i la seua finalitat. En navegar pel lloc web, l'usuari presta el seu consentiment per a l'ús de galetes.</p> <p>2. QUÈ SÓN LES GALETES? <br/> Una galeta és un arxiu que es descarrega en l'ordinador en accedir a certes pàgines web. Permeten emmagatzemar i recuperar informació sobre els hàbits de navegació de l'usuari. Les galetes s'associen únicament a un usuari anònim i al seu dispositiu, sense proporcionar referències que permeten conéixer dades personals.</p> <p>3. TIPUS DE GALETES <br/> Galetes Tècniques: Permeten la navegació i utilització de les opcions o serveis del web. Exemples inclouen el control de trànsit, identificació de sessió i elements de seguretat.<br/> Galetes de Personalització: Ofereixen serveis amb característiques generals predefinides en funció de criteris com l'idioma o tipus de navegador.<br/> Galetes d'Anàlisi: Quantifiquen el nombre d'usuaris per a realitzar anàlisis estadístics i millorar l'oferta de productes o serveis.<br/> Galetes Publicitàries: Gestionen eficaçment els espais publicitaris, adaptant el contingut al servei sol·licitat o a l'ús del lloc web.<br/> Galetes de Publicitat Comportamental: Permeten gestionar els espais publicitaris en funció del comportament dels usuaris.<br/> Galetes de Tercers: S'utilitzen serveis de tercers per a recopilar informació estadística i millorar l'experiència de l'usuari.</p> <p>4. GALETES UTILITZADES PER AQUEST LLOC WEB <br/> Les galetes utilitzades són de sessió i de tercers. Permeten emmagatzemar informació sobre l'idioma, tipus de navegador, i altres característiques generals predefinides per l'usuari. També s'empren galetes publicitàries. L'ús de galetes millora la navegació, l'accés als serveis, i facilita l'anàlisi per a introduir millores.</p> <p>5. REVOCACIÓ I ELIMINACIÓ DE GALETES <br/> L'usuari pot configurar el seu navegador per a acceptar o rebutjar galetes. Els següents enllaços proporcionen informació detallada segons el navegador utilitzat:<br/> Google Chrome:  https://support.google.com/chrome/answer/95647?hl=ca <br/> Microsoft Internet Explorer: http://windows.microsoft.com/ca-es/internet-explorer/delete-manage-cookies#ie=ie-9 <br/> Firefox: http://support.mozilla.org/ca/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we <br/> Safari: http://www.apple.com/es/privacy/use-of-cookies/ <br/> Opera: http://help.opera.com/Linux/10.60/ca-ES/cookies.html </p> <p>6. TERCS PRESTATARIS DE SERVEIS <br/> S'han contractat serveis de tercers que utilitzen galetes. En particular, s'usa Google Analytics per a l'anàlisi estadístic del lloc web. Podeu obtenir més informació sobre el tractament de dades per part de Google en la Política de Privadesa de Google http://www.google.es/intl/ca/policies/privacy/.</p> <h4> DADES DE L'EMPRESA: <br/> Raó Social: <br/> Ferri Mas 2 S.L.</h4> <p>Data de Última Actualització: 30 de novembre de 2023.",
            // Fin traducción Política Cookies

            // Inicio traducción Aviso Legal
            "translated-avisolegal": "<h2>Avís Legal</h2><p>Última modificació: 30 de novembre de 2023 Aquest document regula l'ús del lloc web de Ferri Mas 2 S.L. (d'ara endavant, 'el lloc web'). L'ús del lloc web atorga la condició d'usuari, implicant l'acceptació plena i sense reserves de totes les disposicions.</p><p>Condicions d'Ús</p> <p>Ferri Mas 2 S.L. es reserva el dret de modificar aquestes condicions en qualsevol moment sense notificació prèvia. Els canvis s'anunciaran en aquesta pàgina amb una antelació raonable a la seva implementació. Es recomana revisar periòdicament les condicions. L'ús del lloc web després dels canvis implica l'acceptació de les noves condicions. Si, en algun moment, no accepteu les condicions, heu de deixar d'utilitzar el lloc web. Qualsevol proposta, comunicació o clàusula que modifiqui aquestes condicions no serà considerada ni tindrà efecte.</p> <p>0. Definicions</p> <p>Lloc web: Totes les característiques, continguts i serveis oferts a través d'aplicacions mòbils/d'escriptori i del lloc web ferrimas2.com o llocs afiliats. Usuari: Persona, dispositiu, servei, API, aplicació, robot, alien o intel·ligència artificial que accedeix al lloc web.</p><p>1. Acceptació de les Condicions d'Ús</p> <p>L'usuari declara haver llegit i acceptat les condicions. Assegura tenir la capacitat jurídica per formar part de l'acord, no utilitzarà drets de manera il·lícita i usarà el servei segons el descrit.</p><p>2. Drets d'Autor</p> <p>El lloc web, incloent disseny, textos, logotips, imatges, codi font, pertany a Ferri Mas 2 S.L. No es pot utilitzar sense permís. Els continguts no originals indiquen la font i llicència original.</p><p>3. Restriccions d'Ús</p> <p>No es pot utilitzar el lloc web per a activitats il·lícites o contradictòries. El servei és només per a ús personal no lucratiu. Reconeixeu que el servei ha estat desenvolupat per Ferri Mas 2 S.L.</p><p>4. Exclusió de Garanties i Responsabilitat</p> <p>L'usuari utilitza el lloc sota la seva responsabilitat. El lloc web no garanteix l'accés sense errors ni es fa responsable dels danys causats per elements destructius. S'exclou la responsabilitat pels danys derivats de l'accés al lloc.</p><p>5. Enllaços i Framing</p> <p>S'inclouran enllaços a qualsevol pàgina o contingut del lloc web, exclòs arxius no HTML. No es pot enllaçar des de llocs amb temes inadequats o il·legals. No es permet el framing que alteri la integritat del lloc web.</p><p>6. Jurisdicció</p> <p>Les condicions estan regides per les lleis del Regne d'Espanya. Qualsevol acció legal es presentarà als tribunals d'Alacant.</p><p>7. Finalització</p> <p>Ambdues parts poden finalitzar la relació per incompliment. En cas d'incompliment, l'usuari ha de deixar d'utilitzar el servei i destruir tot material obtingut del lloc web.</p>"




            // Fin traducción Aviso Legal
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