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

            "translated-header-shop": 'Tienda',

            "translated-header-aboutUs": 'Sobre nosotros',

            "translated-header-ventajas": 'Nuestras ventajas',

            "translated-header-training": 'Formación',

            "translated-header-rental": 'Alquiler de maquinaria',

            "translated-header-rental-conditions": 'Condiciones de alquiler',

            "translated-header-faq": 'Preguntas frecuentes (F.A.Q.)',

            "translated-header-contact": 'Contacto',

            
            
        }
    },
    en: {
        translation: {
            "translated-bienvenido": 'Welcome',
            "translated-contamos_amplia_gama": 'We have a broad range of high-quality equipment, thanks to our partnerships with renowned brands such as Kubota, Hilti, Hikoki, Ayerbe, Haulotte, Sima, among others.',
            "translated-ademas_alquiler": 'In addition to rentals, we invite you to explore our store where you can purchase tools and machinery for your projects. Our team, known for its human and personalized approach, is here to assist you with enthusiasm and find the ideal solution for your needs, without compromises.',
            "translated-agradecemos_sinceramente": 'We sincerely appreciate your trust in us.',
            "translated-descubrenos": 'Discover us!',
            "translated-header-shop": 'Shop',
            "translated-header-aboutUs": 'About Us',
            "translated-header-ventajas": 'Our advantages',
            "translated-header-training": 'Training',
            "translated-header-rental": 'Machinery rental',
            "translated-header-rental-conditions": 'Rental conditions',
            "translated-header-faq": 'F.A.Q. (Frequently Asked Questions)',
            "translated-header-contact": 'Contact',
        }
    },
    val: {
        translation: {
            "translated-bienvenido": 'Benvingud@',
            "translated-contamos_amplia_gama": "Contem amb una àmplia gamma d'equips d'alta qualitat, gràcies a les nostres associacions amb marques de renom com Kubota, Hilti, Hikoki, Ayerbe, Haulotte, Sima, entre altres.",
            "translated-ademas_alquiler": 'A més del lloguer, us convidem a explorar la nostra botiga, on podeu adquirir eines i màquines per als vostres projectes. El nostre equip, conegut pel seu tracte humà i personalitzat, està ací per a assistir-vos amb entusiasme i trobar la solució ideal per a les vostres necessitats, sense compromisos.',
            "translated-agradecemos_sinceramente": 'Agraïm sincerament la vostra confiança en nosaltres.',
            "translated-descubrenos": 'Descobreix-nos!',
            "translated-header-shop": 'Botiga',
            "translated-header-aboutUs": 'Sobre nosaltres',
            "translated-header-ventajas": 'Les nostres avantatges',
            "translated-header-training": 'Formació',
            "translated-header-rental": 'Lloguer de maquinària',
            "translated-header-rental-conditions": 'Condicions de lloguer',
            "translated-header-faq": 'Preguntes freqüents (F.A.Q.)',
            "translated-header-contact": 'Contacte',
        }
    }



};
i18n
.use(initReactI18next)
.init({
    resources,
    lng: "es",
    fallbackLng: "es",
});

export default i18n;