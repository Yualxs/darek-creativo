// Archivo: src/app/components/HeroSection.jsx

import Link from 'next/link';
import Image from 'next/image';
import Section from './Section'; // 1. Importamos el nuevo componente

export default function HeroSection() {
  return (
    // 2. Usamos el componente Section como contenedor principal
    <Section 
      className="bg-[#111111] text-white flex items-center"
      pt="py-20" // Mantenemos el padding vertical
    >
      {/* 3. El div interior ya no necesita max-w-7xl ni mx-auto */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] items-start w-full gap-16 lg:gap-24">
        
        {/* Columna Izquierda */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Fila 1 */}
          <div className="flex items-center space-x-4 -mb-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden transition-transform duration-300 ease-in-out origin-left hover:scale-125 z-50">
              <Image 
                src="/images/me-2.jpg" 
                alt="Darek Creativo" 
                fill={true} 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 96px"
              />
            </div>
            <div className="relative w-12 h-12 transition-transform duration-300 hover:rotate-45">
              <Image
                src="/images/arrow.avif"
                alt="Arrow icon"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="48px"
              />
            </div>
          
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase">
              Hola
            </h1>
          </div>
          
          {/* Fila 2 */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase -mb-4">
            Soy
          </h1>
          
          {/* Fila 3 */}
          <div className="flex items-center space-x-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase">
              Darek
            </h1>
            <picture className="inline-block animate-wave origin-[70%_70%]">
              <source srcSet="/images/hand.avif" type="image/avif" />
              <img 
                src="/images/hand.avif" 
                alt="Hand waving" 
                width="64" 
                height="64" 
              />
            </picture>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="flex flex-col items-start w-full mt-8 lg:mt-0 lg:ml-auto">
          {/* Título añadido */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Diseño & contenido que hacen crecer marcas.
          </h3>

          {/* Párrafo existente */}
          <p className="text-xl leading-relaxed max-w-lg mb-8 text-left">
            Senior Visual Designer, Filmmaker & Trafficker. 9+ años creando branding, content y campañas que conectan y convierten.
          </p>
          
          {/* Contenedor de los botones */}
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <Link
                href="#works" 
                className="px-8 py-4 border-2 bg-white text-black font-semibold rounded-full text-center transition-colors duration-300 hover:bg-black hover:text-white w-full inline-block uppercase"
              >
                Agenda una llamada
              </Link>
            </div>
            
            <div className="w-full">
              <Link
                href="#"
                className="px-8 py-4 border-2 border-white bg-black text-white font-semibold rounded-full text-center transition-colors duration-300 hover:bg-white hover:text-black w-full inline-block uppercase"
              >
                Ver portafolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}