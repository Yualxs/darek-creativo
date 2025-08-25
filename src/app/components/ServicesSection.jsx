// Archivo: src/app/components/ServicesSection.jsx

import Section from './Section';
import ServiceBox from './ServiceBox';

// Íconos SVG integrados directamente en este archivo
const AsteriskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-asterisk">
    <path d="M12 6v6l4 2" />
    <path d="M12 18v-6l4-2" />
    <path d="M12 12l-4 2" />
    <path d="M12 12l-4-2" />
    <path d="M12 12l4 2" />
    <path d="M12 12l4-2" />
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box">
    <rect width="20" height="20" x="2" y="2" rx="2" ry="2" />
    <path d="M7 10v6" />
    <path d="M12 10v6" />
    <path d="M17 10v6" />
  </svg>
);

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    <path d="M15 5L19 9" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
    <path d="M12 19v3" />
    <path d="M18.8 17.5a6 6 0 0 0-13.6 0" />
    <path d="M15.4 12.3a4.5 4.5 0 0 0-6.8 0" />
    <path d="M12 10v9" />
    <path d="M12 2v8l-4 4" />
    <path d="M12 2v8l4 4" />
  </svg>
);

const services = [
  {
    title: 'Branding & Identidad',
    description: 'Una marca sólida es más que un logo; es la base de la conexión con tu audiencia. Defino el ADN de tu negocio para construir una identidad visual y verbal memorable, coherente y que comunique tus promesas de valor en cada punto de contacto.',
    keywords: ['Naming', 'Diseño de Logotipo', 'Sistemas Visuales', 'Manual de Marca', 'Kit para Redes Sociales'],
    icon: '/images/HeroiconsCameraSolid.svg', // Ruta a la imagen
  },
  {
    title: 'Producción Audiovisual',
    description: 'Transformo ideas en contenido visual de alto impacto que captura la atención y cuenta historias. Me encargo del proceso completo, desde la conceptualización y el rodaje hasta la postproducción, garantizando un acabado profesional que eleve la percepción de tu marca.',
    keywords: ['Spots Publicitarios', 'Motion Graphics', 'Contenido para Redes', 'Fotografía Profesional', 'Corrección de Color'],
    icon: '/images/HeroiconsCameraSolid.svg', // Ruta a la imagen
  },
  {
    title: 'Performance & Paid Media',
    description: 'Diseño y ejecuto campañas de publicidad digital enfocadas en resultados medibles. Mi objetivo es optimizar tu inversión para alcanzar a la audiencia correcta en plataformas clave como Meta y Google, convirtiendo clics en clientes y maximizando tu retorno.',
    keywords: ['Meta Ads (FB & IG)', 'Google Ads', 'Estrategia de Pauta', 'Optimización de Campañas', 'Automatizaciones', 'Análisis de Métricas'],
    icon: '/images/HeroiconsCameraSolid.svg', // Ruta a la imagen
  },
  {
    title: 'Social Media & Content',
    description: 'Construyo y gestiono la presencia online de tu marca a través de contenido estratégico y visualmente atractivo. Desarrollo líneas gráficas, planifico calendarios editoriales y fomento una comunidad activa para generar engagement y crecimiento orgánico.',
    keywords: ['Estrategia de Contenido', 'Gestión de Redes', 'Diseño de Parrillas', 'Creación de Contenido UCG', 'Líneas Gráficas para Redes Sociales'],
    icon: '/images/HeroiconsCameraSolid.svg', // Ruta a la imagen
  },
];

export default function ServicesSection() {
  return (
    <Section className="bg-black text-white py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] mb-12 gap-8 md:gap-16 items-center">
        <p className="dtr-subheading text-brand-gray font-bold text-lg mb-2">Lo que hago</p>
        <h2 className="text-4xl sm:text-5xl font-bold font-sansita leading-tight uppercase">Servicios De Branding, Contenido Y Performance</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceBox 
            key={index}
            title={service.title}
            description={service.description}
            keywords={service.keywords}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  );
}