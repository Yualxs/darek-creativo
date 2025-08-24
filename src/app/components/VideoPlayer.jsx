// Archivo: pages/components/VideoPlayer.jsx

import React from 'react';

// Ahora acepta la URL como una prop
export default function VideoPlayer({ videoUrl, title }) {
  return (
    // 1. El wrapper define la forma (relative y aspect-video)
    <div className="relative w-full aspect-video">
      {/* 2. El iframe rellena el wrapper (absolute) */}
      <iframe
        src={videoUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}