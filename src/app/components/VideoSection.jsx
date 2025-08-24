// Archivo: components/VideoSection.jsx

import VideoPlayer from './VideoPlayer.jsx';

// El componente ya no recibe la prop 'imageSrc'
export default function VideoSection({ title, videoUrl }) {
  return (
    // Eliminamos las clases de tamaño de aquí, ya que VideoPlayer las controla
    <div className="w-full flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold uppercase text-white font-sansita mb-4">
        {title}
      </h2>
      <VideoPlayer videoUrl={videoUrl} title={title} />
    </div>
  );
}