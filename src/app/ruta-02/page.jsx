// Archivo: src/app/ruta-01/page.jsx

import Link from 'next/link';
import VideoSection from '../components/VideoSection';
import Section from '@/app/components/Section';

export default function Ruta01Page() {
  const videoContent = [
    {
      title: 'LO QUE ES CAPAZ DE HACER TU CUERPO PARA AUTOSANARSE',
      videoUrl: 'https://player.vimeo.com/video/1072730481',
    },
    {
      title: 'COMO APRENDER A SER SALUDABLE',
      videoUrl: 'https://player.vimeo.com/video/1072729834',
    },
    {
      title: 'COMO SABER QUE NECESITAMOS AYUDA',
      videoUrl: 'https://player.vimeo.com/video/1072730149',
    },
  ];

  return (
    <Section py="py-12">
      <div className="text-center mb-12 text-white">
        <h1 className="text-4xl font-bold uppercase font-sansita">
          MEDICINA INTEGRATIVA EN ODONTOLOGÍA
        </h1>
        <Link 
          href="/ruta-02" 
          className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
        >
          Ruta 02
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 justify-items-center gap-y-12">
        {videoContent.map((section, index) => (
          <VideoSection
            key={index}
            title={section.title}
            videoUrl={section.videoUrl}
          />
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/ruta-03" 
          className="mt-16 mb-16 inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
        >
          Ruta 03
        </Link>
      </div>
    </Section>
  );
}