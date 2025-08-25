// Archivo: src/app/components/ContactSection.jsx

"use client";

import Section from './Section';
import Link from 'next/link';
import ContactHighlight from './ContactHighlight';

const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const EnvelopeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>);

export default function ContactSection() {
  return (
    <Section className="bg-[#111111] text-white py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Columna Izquierda: Títulos y Contacto */}
        <div className="flex flex-col">
          <p className="text-brand-gray font-bold text-lg mb-2">Contáctame</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-sansita leading-tight mb-4 uppercase">¿Listo para acelerar tu marca?</h2>
          <p className="text-lg text-white mb-8 max-w-md">
            Cuéntame tu idea o desafío. Juntos podemos trazar el plan perfecto para conectar con tu audiencia y alcanzar tus objetivos de negocio a través del diseño y contenido estratégico.
          </p>

          <div className="space-y-4">
            <ContactHighlight
              icon={<UserIcon />}
              heading="Contacto via WhatsApp"
              text="+591 62484710 / +591 65589983"
              link="#"
            />
            <ContactHighlight
              icon={<EnvelopeIcon />}
              heading="Prefieres Correo Electrónico"
              text="darek@darekcreativo.com"
              link="mailto:darek@darekcreativo.com"
            />
          </div>
        </div>
        
        {/* Columna Derecha: Formulario */}
        <div className="flex flex-col bg-black p-8 rounded-2xl border border-[#111111]">
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full p-4 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gray" />
            <input type="email" placeholder="Correo electrónico" className="w-full p-4 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gray" />
            <input type="text" placeholder="Asunto del proyecto" className="w-full p-4 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gray" />
            <textarea placeholder="Cuéntame más sobre tu proyecto..." rows="4" className="w-full p-4 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gray"></textarea>
            <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-full text-center transition-colors duration-300 hover:bg-black hover:text-white border-2 border-white uppercase">
              Enviar
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
}