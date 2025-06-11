// src/data.js
// Este archivo contiene toda la información estructurada de la empresa Vision Soluciones.

const companyData = {
    general: {
        name: "Vision Soluciones",
        slogan: "Forjando el Futuro en Metal. Precisión que Impulsa su Éxito.",
        homeNarrative: "Somos su aliado estratégico en Bogotá para soluciones metalmecánicas de alta ingeniería y calidad superior. Donde su visión industrial toma forma y se consolida."
    },
    contact: {
        alexVaron: {
            name: "Alex Varon",
            role: "Director de Producción y Venta",
            email: "visioon.comercial@gmail.com",
            phone: "+57 32124477636",
            whatsapp: "https://wa.me/5732124477636"
        },
        admin: {
            email: "visionsolusas@gmail.com",
            phone: "+57 3228524235"
        },
        location: {
            address: "Bogotá, Colombia (Para dirección exacta, contactar)",
            googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6713028204273!2d-74.07474448574163!3d4.646549296615571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a7a6c0c2a71%3A0x6b7b2b7b2b7b2b7b!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sco!4v1678901234567!5m2!1sen!2sco",
            schedule: "Lunes a Viernes 7:30 AM - 5:00 PM | Sábados 7:30 AM - 12:00 PM"
        },
        social: {
            facebook: "https://www.facebook.com/Visionsolu",
            linkedin: "https://www.linkedin.com/company/visionsolu/"
        }
    },
    about: {
        history: "En Vision Soluciones, nuestra historia se forja en la experiencia y la pasión por la metalmecánica. Con años de dedicación en el sector colombiano, hemos consolidado un equipo de ingenieros, técnicos y artesanos que dominan la precisión y la calidad. Somos más que fabricantes; somos creadores de valor, aliados estratégicos para cada proyecto que emprende. Nuestro compromiso es su tranquilidad. Desde la conceptualización inicial hasta la entrega final, garantizamos un proceso transparente y eficiente, donde la innovación y la fiabilidad son los pilares. Su visión es nuestra misión: convertir ideas ambiciosas en estructuras y mobiliario metálico que superan las expectativas y resisten el paso del tiempo.",
        values: [
            { icon: "fas fa-screwdriver-wrench", title: "Calidad Inquebrantable", description: "Estándares superiores en cada pieza, garantizando durabilidad y acabados perfectos. Su inversión segura." },
            { icon: "fas fa-ruler-combined", title: "Ingeniería de Precisión", description: "Tecnología de vanguardia y procesos exactos para resultados impecables. Sin margen de error." },
            { icon: "fas fa-lightbulb", title: "Innovación Constante", description: "Adaptabilidad y soluciones creativas a sus desafíos más complejos. El futuro, hoy." },
            { icon: "fas fa-handshake-alt-slash", title: "Relación Cliente-Aliado", description: "Más que un proveedor, somos su socio estratégico. Escucha activa, asesoría experta." }
        ]
    },
    services: {
        mainTitle: "Nuestros Servicios: Dónde la Visión se Forja",
        introText: "En Vision Soluciones, no solo fabricamos; creamos las bases de su éxito, forjadas en metal de alta calidad. Nuestro portafolio de servicios metalmecánicos abarca desde el diseño conceptual hasta la implementación final, ofreciendo precisión, durabilidad y estética en cada solución.",
        list: [
            {
                icon: "fas fa-store-alt",
                title: "Mobiliario P.O.P. y Publicitario",
                description: "Transformamos su estrategia de marketing en presencia física impactante. Creación de exhibidores y mobiliario publicitario que capturan miradas e impulsan la decisión de compra, maximizando la visibilidad de su marca y optimizando su punto de venta con durabilidad y estética superior.",
                features: ["Diseño personalizado de alto impacto.", "Materiales de resistencia industrial.", "Acabados profesionales (pintura electrostática)."]
            },
            {
                icon: "fas fa-grip-lines",
                title: "Elementos Arquitectónicos en Metal",
                description: "Elevamos el valor estético y funcional de sus espacios. Puertas, ventanerías y detalles metálicos que infunden distinción y modernidad, integrando funcionalidad y arte en cada diseño arquitectónico. Soluciones duraderas, de bajo mantenimiento y visualmente impresionantes.",
                features: ["Maestría en diseño y fabricación a medida.", "Integración perfecta con su visión arquitectónica.", "Calidad superior, resistencia y longevidad."]
            },
            {
                icon: "fas fa-industry",
                title: "Estructuras Metálicas de Alta Resistencia",
                description: "Proporcionamos la columna vertebral de sus proyectos más ambiciosos, garantizando solidez y estabilidad. Mezzanines que duplican su espacio útil y estructuras para obra civil forjadas con fiabilidad inquebrantable. Su visión se materializa sobre una base de confianza y seguridad.",
                features: ["Máxima resistencia y durabilidad garantizada.", "Adaptabilidad a cualquier escala y complejidad.", "Cumplimiento estricto de normativas de seguridad."]
            },
            {
                icon: "fas fa-bezier-curve",
                title: "Estructuras Livianas y Funcionales",
                description: "Optimizamos sus ambientes exteriores e interiores con soluciones que combinan versatilidad, estética y eficiencia. Pérgolas que crean experiencias al aire libre memorables y escaleras que conectan niveles con estilo, mejorando la habitabilidad y el valor de sus espacios.",
                features: ["Diseño ágil y versátil.", "Materiales ligeros pero robustos.", "Acabados diversos para máxima personalización."]
            },
            {
                icon: "fas fa-microchip",
                title: "Procesamiento de Metales Avanzado",
                description: "Capacidades de procesamiento de metales de vanguardia para garantizar precisión y eficiencia. Desde pintura electrostática para acabados premium hasta corte por plasma para componentes complejos, optimizamos su cadena de producción con tecnología de punta.",
                features: ["Pintura electrostática de alta durabilidad.", "Corte y doblado de lámina con precisión robótica.", "Corte por plasma para geometrías complejas."]
            }
        ]
    },
    projects: {
        mainTitle: "Nuestro Legado: Proyectos Forjados al Detalle",
        introText: "Cada proyecto es una manifestación de nuestra maestría en metal. Aquí, su visión se convierte en una realidad tangible y perdurable. Nuestra versatilidad nos permite servir a una amplia gama de sectores, siempre con el mismo compromiso: excelencia que se ve y se siente.",
        list: [
            {
                title: "Mobiliario P.O.P. de Impacto Visual",
                description: "Diseñamos y fabricamos soluciones de mobiliario publicitario que capturan la atención, impulsando la interacción del cliente y mejorando la presencia de marca.",
                tagline: "Visibilidad forjada para el éxito."
            },
            {
                title: "Infraestructura Robusta para la Industria",
                description: "Construcción de estructuras metálicas de alta resistencia, esenciales para la expansión y seguridad de infraestructuras industriales, optimizando espacios y procesos operativos.",
                tagline: "Cimientos sólidos, futuro seguro."
            },
            {
                title: "Equipamiento de Precisión para Laboratorios",
                description: "Desarrollo y fabricación de elementos metálicos especializados, como canastas para tubos de ensayo y soportes, diseñados con la máxima precisión para entornos críticos.",
                tagline: "Ingeniería que soporta la ciencia."
            },
            {
                title: "Componentes para Maquinaria Especializada",
                description: "Fabricación de piezas metálicas de alta resistencia y precisión para maquinaria industrial, optimizando su rendimiento y extendiendo su vida útil.",
                tagline: "Engranajes que impulsan el progreso."
            }
        ]
    },
    cta: {
        primary: {
            text: "Descubra el Poder de Nuestra Ingeniería",
            link: "#services" // Link will be handled by React navigation
        },
        secondary: {
            text: "Conectemos: Su Proyecto, Nuestra Solución",
            link: "#contact" // Link will be handled by React navigation
        },
        contactPageMain: {
            text: "Hablemos de su Visión Hoy",
            link: "#contact-form" // Link to the form in landing page (if applicable)
        }
    },
    footer: {
        copyright: "© 2024 Vision Soluciones S.A.S. Todos los derechos reservados.",
        nit: "901692468-1"
    }
};

export default companyData;
