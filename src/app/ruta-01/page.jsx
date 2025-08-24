// Archivo: pages/ruta-01.jsx

import Link from 'next/link';
import Section from '@/app/components/Section';
import VideoSection from '../components/VideoSection';

export default function Ruta01Page() {
  const videoContent = [
    {
      title: 'PRESENTACIÓN DEL SERVICIO',
      videoUrl: 'https://player.vimeo.com/video/1072727194',
    },
    {
      title: 'HABLANDO DE LA CULTURA EN ODONTOLOGÍA',
      videoUrl: 'https://player.vimeo.com/video/1072728337',
    },
    {
      title: 'EXPLICACIÓN DE LO QUE NO SE SABE DE LA ORTODONCIA',
      videoUrl: 'https://player.vimeo.com/video/1072728677',
    },
  ];

  return (
    <Section py="py-12">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold uppercase font-sansita">
          Odontología Integral
        </h1>
        <Link
          href="/ruta-01"
          className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
        >
          Ruta 01
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
          href="/ruta-02"
          className="mt-16 mb-16 inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
        >
          Ruta 02
        </Link>
      </div>
    </Section>
  );
  }