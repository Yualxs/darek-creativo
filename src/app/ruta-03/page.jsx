// Archivo: src/app/ruta-03/page.jsx

import Link from 'next/link';
import CallToActionCard from '@/app/components/CallToActionCard';
import Section from '@/app/components/Section';

export default function Ruta03Page() {
  return (
    // Contenedor principal que centra todo verticalmente
    <div className="flex-1 flex flex-col items-center justify-center">
      <Section py="py-12">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold uppercase font-sansita">
            ACTIVIDADES SOCIALES
          </h1>
          <Link 
            href="/ruta-03" 
            className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
          >
            Ruta 03
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <CallToActionCard 
            title="APRENDIZAJE DE LA EXPERIENCIA"
            description="Videos para compartir con la red abierta"
            buttonText="Ingresar"
            buttonHref="/ruta-03/regalos"
          />
          <CallToActionCard
            title="ÁREA COMERCIAL"
            description="Presentamos nuestros productos"
            buttonText="Ingresar"
            buttonHref="/ruta-03/area-comercial"
          />
        </div>

        <div className="text-center">
          <Link 
            href="/contactanos" 
            className="mt-16 mb-16 inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
          >
            Contáctanos
          </Link>
        </div>
      </Section>
    </div>
  );
}