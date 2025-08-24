// Archivo: src/app/ruta-03/regalos/page.jsx

import Link from 'next/link';
import VideoSection from '../../components/VideoSection';
import Section from '@/app/components/Section';

export default function RegalosPage() {
  const videoContent = [
    {
      title: 'AUDIOVISUAL - 1',
      videoUrl: 'https://player.vimeo.com/video/1072731463',
    },
    {
      title: 'AUDIOVISUAL - 2',
      videoUrl: 'https://player.vimeo.com/video/1072731620',
    },
  ];

  return (
    <Section py="py-12">
      <div className="text-center mb-12 text-white">
        <h1 className="text-4xl font-bold uppercase font-sansita">
          REGALOS
        </h1>
        <Link 
          href="/ruta-03" 
          className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
        >
          Ruta 03
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
          href="/ruta-03/area-comercial" 
          className="mt-16 mb-16 inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
        >
          Área Comercial
        </Link>
      </div>
    </Section>
  );
}