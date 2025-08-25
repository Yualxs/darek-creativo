// Archivo: src/app/components/ServiceBox.jsx

import Link from 'next/link';
import Image from 'next/image';

// Componente para el ícono de flecha de la caja de servicio
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="17 17 17 7 7 7"></polyline>
  </svg>
);

export default function ServiceBox({ title, description, keywords, icon }) {
  return (
    <Link href="#" className="flex flex-col p-8 bg-transparent rounded-2xl border border-[#111111] transition-colors duration-300 hover:bg-[#111111] group">
      <div className="flex items-center justify-between mb-4">
        {/* Contenedor del ícono principal y título */}
        <div className="flex items-center">
            {/* Contenedor del ícono */}
            <div className="flex items-center justify-center text-white mr-4">
              {/* Usamos el componente Image para renderizar el ícono */}
              <Image src={icon} alt={`${title} icon`} width={24} height={24} />
            </div>
            {/* Título */}
            <h3 className="text-4xl font-semibold">{title}</h3>
        </div>
        
        {/* Ícono de flecha con animación */}
        <div className="text-brand-gray group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
          <ArrowIcon />
        </div>
      </div>
      {/* Descripción */}
      <p className="text-lg text-white mb-6">{description}</p>
      {/* Keywords (píldoras) */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {keywords.map((keyword, index) => (
          <span key={index} className="px-5 py-[10px] text-sm uppercase text-brand-gray rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-transparent">
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  );
}