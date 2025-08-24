// Archivo: src/app/components/HeroSection.jsx

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] items-start w-full gap-16 lg:gap-24">
        
        {/* Columna Izquierda */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Fila 1 */}
          <div className="flex items-center space-x-4 -mb-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden transition-transform duration-300 ease-in-out origin-left hover:scale-240 z-50">
              <Image 
                src="/images/me-2.jpg" 
                alt="Darek Creativo" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div className="relative w-12 h-12 transition-transform duration-300 hover:rotate-45">
            <Image
                src="/images/arrow.avif"
                alt="Arrow icon"
                layout="fill"
                objectFit="contain"
            />
            </div>
          
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase">
              Hi I am
            </h1>
          </div>
          
          {/* Fila 2 */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase -mb-4">
            Mellow
          </h1>
          
          {/* Fila 3 */}
          <div className="flex items-center space-x-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-sansita font-bold leading-none uppercase">
              White
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
          <p className="text-xl leading-relaxed max-w-lg mb-8 text-left">
            A product designer, specialize in creating magical visual identities for digital products.
          </p>
          
          {/* Contenedor de los botones */}
            <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
                <Link
                href="#works" 
                className="px-8 py-4 border-2 bg-white text-black font-semibold rounded-full text-center transition-colors duration-300 hover:bg-black hover:text-white w-full inline-block"
                >
                VIEW PORTFOLIO
                </Link>
            </div>
            
            <div className="w-full">
                <Link
                href="#"
                className="px-8 py-4 border-2 border-white bg-black text-white font-semibold rounded-full text-center transition-colors duration-300 hover:bg-white hover:text-black w-full inline-block"
                >
                DOWNLOAD RESUME
                </Link>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}