// Archivo: src/app/contactanos/page.jsx

import Link from 'next/link';
import Section from '@/app/components/Section';

export default function ContactanosPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      {/* Todo el contenido DEBE IR DENTRO de la etiqueta Section */}
      <Section py="py-12">
        
        {/* Título y subtítulo de la página */}
        <div className="w-full max-w-4xl text-center mb-12 text-white">
          <h1 className="text-4xl font-bold uppercase font-sansita">
            ACTIVIDADES SOCIALES
          </h1>
          <Link 
            href="/ruta-03" 
            className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
          >
            Ruta 03
          </Link>
          <Link 
            href="/" 
            className="block text-base font-thin uppercase tracking-widest underline mt-2 mb-8"
          >
            Home
          </Link>
          <p className="text-lg">Santiago de Surco, Lima, Perú.</p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="flex justify-center space-x-4 mb-12">
          <Link href="https://www.facebook.com/odontoestres" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
              <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/odontoestres/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
              <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </div>
          </Link>
          <Link href="https://www.youtube.com/channel/UCC0_7MxGfH_yKSj6pHLHAvw" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
              <img src="/images/youtube.svg" alt="YouTube" className="w-6 h-6" />
            </div>
          </Link>
        </div>
        
        {/* Sección de Contacto */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white mb-12">
          <div className="flex flex-col items-center">
            <p className="font-bold">Teléfono:</p>
            <h2 className="text-2xl font-bold mt-1">963523339</h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Correo:</p>
            <h2 className="text-2xl font-bold mt-1">odontoestresconsultorios@gmail.com</h2>
          </div>
        </div>
        
        {/* Botón de WhatsApp */}
        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg mb-4">Escríbenos</p>
          <Link 
            href="https://api.whatsapp.com/send?phone=51963523339&text=Buen%20d%C3%ADa,%20deseo%20solicitar%20una%20cita."
            target="_blank"
            className="inline-block rounded-full bg-brand-green px-10 py-3 font-bold text-white uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
          >
            Whatsapp
          </Link>
        </div>

      </Section>
    </div>
  );
}