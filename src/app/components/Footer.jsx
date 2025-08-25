// Archivo: src/app/components/Footer.jsx

import Link from 'next/link';
import Section from './Section';
import Image from 'next/image';

// Icono de Twitter / X
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c-.9 1-2.4 1.7-4 1.9-2.2.3-4.7-.2-6.5-1.5-1.6-1.2-2.1-3.6-1.5-5.3 1-2.7 3.3-4.1 6-4.5 2.7-.4 5.2.4 7.2 2.1-1.2.6-2.5 1-4.2 1.4-1.7.4-3.5.3-5-1s-2.2-2.7-1.5-4.4c.7-1.7 2-2.8 3.8-3.3 1.8-.5 3.6-.3 5.3 1 .9.7 1.6 1.7 2.1 2.8"/>
  </svg>
);

// Icono de Whatsapp
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
    <path d="M22 12A10 10 0 0 1 12 2a10 10 0 0 0 0 20v-5.2c-2.4 1.3-5.2 1.8-7.5 1.5-.7-.1-1.4-.4-2-.8-1-1-1-2.6-.4-4.5.6-2 1.9-3.4 4-4.2 1.2-.5 2.5-.8 3.8-.8h.5c.3 0 .6-.1.8-.3s.3-.6.3-.9v-3.7c0-.2-.1-.4-.2-.6-.2-.2-.4-.3-.7-.3h-.1a10 10 0 0 1-8.5-4.3c-.6-.7-1.1-1.6-1.5-2.6-1-2.4-1-5.1-.2-7.5.3-1 .9-1.9 1.5-2.6 1.2-1.6 2.8-2.4 4.8-2.5.7 0 1.4-.1 2.1-.1s1.3-.2 1.9-.4h.6c.2 0 .4-.1.6-.2s.2-.4.2-.6v-1.7c0-.2-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2a10 10 0 0 1-8.5 4.3c-.6.7-1.1 1.6-1.5 2.6-1 2.4-1 5.1-.2 7.5.3 1 .9 1.9 1.5 2.6 1.2 1.6 2.8 2.4 4.8 2.5.7 0 1.4-.1 2.1-.1s1.3-.2 1.9-.4h.6c.2 0 .4-.1.6-.2s.2-.4.2-.6v-1.7c0-.2-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2a10 10 0 0 1-8.5 4.3c-.6.7-1.1 1.6-1.5 2.6-1 2.4-1 5.1-.2 7.5.3 1 .9 1.9 1.5 2.6 1.2 1.6 2.8 2.4 4.8 2.5" />
  </svg>
);


export default function Footer() {
  return (
    <Section className="bg-[#111111] text-white py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">

        {/* Columna 1: Logo y Copyright */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Image
            src="/logos/darek-creativo-logo.svg"
            alt="Darek Creativo"
            width={188}
            height={30}
            className="mb-4"
          />
          <p className="text-sm text-brand-gray mb-1">© 2025. Darek Creativo</p>
          <p className="text-xs text-brand-gray">Desarrollado por Yuri Añorga</p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h6 className="text-sm font-semibold uppercase mb-4">Navegación</h6>
          <ul className="space-y-2 text-sm text-brand-gray">
            <li><Link href="#services" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="#works" className="hover:text-white transition-colors">Trabajos</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">Sobre mí</Link></li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h6 className="text-sm font-semibold uppercase mb-4">Redes y Contacto</h6>
          <ul className="space-y-4 text-brand-gray">
            <li>
              <Link href="#" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <TwitterIcon />
                <span>Twitter / X</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <WhatsappIcon />
                <span>Whatsapp</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </Section>
  );
}