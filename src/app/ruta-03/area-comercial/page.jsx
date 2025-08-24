// Archivo: src/app/ruta-03/area-comercial/page.jsx

import Link from 'next/link';
import VideoSection from '@/app/components/VideoSection';
import ProductCard from '@/app/components/ProductCard';
import Section from '@/app/components/Section';

const terapiaData = {
  title: 'Mi sufrimiento interno tiene el poder, tiene la magia de hacerme crecer',
  description: '',
  imageUrl: '/images/mi-sufrimiento-interno-tiene-poder.avif',
  mercadoLibreUrl: 'https://articulo.mercadolibre.com.pe/MPE-442074754-libro-de-autoayuda-mi-sufrimiento-interno-tiene-poder-_JM',
  mercadoLibreLogoUrl: '/images/mercado-libre-logo.avif',
  amazonUrl: 'https://www.amazon.com/-/es/Isaac-Jes%C3%BAs-A%C3%B1orga-Trevejo-ebook/dp/B00NPCGDCO',
  amazonBooksLogoUrl: '/images/amazon-books.avif',
  qrCodeUrl: '/images/yape.avif',
  phoneNumber: '963 523 339',
};

const productividadData = [
  {
    title: 'Como desarrollar el progreso personal',
    description: '',
    imageUrl: '/images/como-desarrollar-el-progreso-personal.avif',
    mercadoLibreUrl: 'https://articulo.mercadolibre.com.pe/MPE-442074376-psicologia-de-la-productividad-i-_JM',
    mercadoLibreLogoUrl: '/images/mercado-libre-logo.avif',
    amazonUrl: 'https://www.amazon.com/-/es/Isaac-Jes%C3%BAs-A%C3%B1orga-Trevejo-ebook/dp/B08PYPQLWX',
    amazonBooksLogoUrl: '/images/amazon-books.avif',
    qrCodeUrl: '/images/yape.avif',
    phoneNumber: '963 523 339',
  },
  {
    title: 'La filosofía de trabajar en equipo',
    description: '',
    imageUrl: '/images/la-filosofia-de-trabajar-en-equipo.avif',
    mercadoLibreUrl: 'https://articulo.mercadolibre.com.pe/MPE-442074533-psicologia-de-la-productividad-ii-_JM',
    mercadoLibreLogoUrl: '/images/mercado-libre-logo.avif',
    amazonUrl: 'https://www.amazon.com/-/es/Isaac-Jes%C3%BAs-A%C3%B1orga-Trevejo-ebook/dp/B08PPCRH4R',
    amazonBooksLogoUrl: '/images/amazon-books.avif',
    qrCodeUrl: '/images/yape.avif',
    phoneNumber: '963 523 339',
  },
  {
    title: 'Como crecer en sociedad',
    description: '',
    imageUrl: '/images/como-crecer-en-sociedad.avif',
    mercadoLibreUrl: 'https://articulo.mercadolibre.com.pe/MPE-442074629-psicologia-de-la-productividad-iii-_JM',
    mercadoLibreLogoUrl: '/images/mercado-libre-logo.avif',
    amazonUrl: 'https://www.amazon.com/-/es/Isaac-Jes%C3%BAs-A%C3%B1orga-Trevejo-ebook/dp/B08PYSHDYS',
    amazonBooksLogoUrl: '/images/amazon-books.avif',
    qrCodeUrl: '/images/yape.avif',
    phoneNumber: '963 523 339',
  },
];

export default function AreaComercialPage() {
  return (
    <>
      {/* Sección del Video */}
      <Section className="bg-black" py="py-12">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold uppercase font-sansita">
            Área Comercial
          </h1>
          <Link 
            href="/ruta-03" 
            className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
          >
            Ruta 03
          </Link>
          <div className="mt-8">
            <VideoSection
              title="TERAPIA PSICO-EMOCIONAL DE AUTO SANACIÓN"
              videoUrl="https://player.vimeo.com/video/1072732167"
            />
          </div>
        </div>
      </Section>

      {/* Franja Divisoria */}
      <Section className="bg-brand-blue" py="py-4">
        <h2 className="text-base font-semibold uppercase text-white font-source-sans tracking-widest text-center">
          Sección Comercial
        </h2>
      </Section>

      {/* Sección de Productos */}
      <Section className="bg-white text-gray-800" py="py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase font-sansita mb-12">
            Terapia Psico-Emocional de Auto Sanación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
            <div className="lg:col-start-2">
              <ProductCard product={terapiaData} />
            </div>
          </div>

          <h2 className="text-4xl font-bold uppercase font-sansita mb-12">
            Psicología de la Productividad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
            {productividadData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <Link 
            href="/ruta-03/regalos" 
            className="inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
          >
            Regalos
          </Link>
        </div>
      </Section>
    </>
  );
}