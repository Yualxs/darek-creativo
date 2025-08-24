// Archivo: src/app/page.jsx

import VideoPlayer from '@/app/components/VideoPlayer';
import Link from 'next/link';

import Section from '@/app/components/Section'; // Importamos el nuevo Section

export default function HomePage() {
  return (
    // Este div se encarga de centrar verticalmente
    <div className="flex-1 flex flex-col justify-center">
      <Section> 
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase text-white font-sansita">
            Web Tour Odontoestres
          </h2>
          
          <Link 
            href="/"
            className="text-base font-thin uppercase tracking-[2px] text-white underline mt-2 mb-8 block"
          >
            Home
          </Link>
          
          <VideoPlayer videoUrl="https://player.vimeo.com/video/1072725621" title="Web Tour Odontoestres" />

          <Link 
            href="/ruta-01"
            className="mt-12 inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
          >
            Ruta 01
          </Link>
        </div>
      </Section>
    </div>
  );
}