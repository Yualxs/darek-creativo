// Archivo: src/app/components/Header.jsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-8 bg-brand-blue relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold uppercase text-white hover:text-gray-300 transition-colors">
          Odontoestrés
        </Link>
        
        {/* --- INICIO DE CAMBIOS --- */}

        {/* Menú de navegación completo para desktop (oculto en móvil) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 font-semibold uppercase tracking-wider text-base text-white">
            <li><Link href="/ruta-01" className="hover:text-gray-400 transition-colors">Ruta 01</Link></li>
            <li><Link href="/ruta-02" className="hover:text-gray-400 transition-colors">Ruta 02</Link></li>
            <li><Link href="/ruta-03" className="hover:text-gray-400 transition-colors">Ruta 03</Link></li>
            <li><Link href="/contactanos" className="hover:text-gray-400 transition-colors">Contáctanos</Link></li>
          </ul>
        </nav>

        {/* Botón de Hamburguesa Animado (solo visible en móvil) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden w-8 h-8 relative focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <span className={`block absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`block absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </div>
        </button>
        
        {/* Menú móvil con animación de deslizamiento */}
        <nav className={`fixed top-0 right-0 h-full w-full bg-brand-blue flex flex-col items-center justify-center space-y-8 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col space-y-8 text-2xl font-bold text-white text-center">
            <li><Link href="/ruta-01" onClick={toggleMenu}>Ruta 01</Link></li>
            <li><Link href="/ruta-02" onClick={toggleMenu}>Ruta 02</Link></li>
            <li><Link href="/ruta-03" onClick={toggleMenu}>Ruta 03</Link></li>
            <li><Link href="/contactanos" onClick={toggleMenu}>Contáctanos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}