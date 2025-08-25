// Archivo: src/app/components/Header.jsx

import Link from 'next/link';
import Image from 'next/image';

// Componente para el ícono de flecha hacia abajo
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// Componente para el ícono de flecha hacia la derecha
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);


export default function Header() {
  return (
    <header className="w-full bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold uppercase">
          <Image
            src="/logos/darek-creativo-logo.svg"
            alt="Darek Creativo Logo"
            width={188}
            height={30}
          />
        </Link>

        {/* Contenedor para Navegación y Botón CTA */}
        <div className="flex items-center gap-x-8">
          {/* Navegación principal - Oculta en pantallas pequeñas */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-x-6 text-sm font-semibold uppercase tracking-wider">
              <li>
                <Link href="#services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#works" className="hover:text-gray-300 transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#articles" className="hover:text-gray-300 transition-colors">
                  Articles
                </Link>
              </li>

              {/* Menú Desplegable "Pages" */}
              <li className="relative group">
                <Link href="#" className="hover:text-gray-300 transition-colors flex items-center">
                  Pages <ChevronDownIcon />
                </Link>
                
                {/* --- Dropdown de Primer Nivel --- */}
                <ul className="absolute left-0 top-full w-56 bg-black rounded-lg shadow-lg p-2 hidden group-hover:block whitespace-nowrap">
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">About Page</Link></li>
                  
                  {/* Submenú para "All Services" */}
                  <li className="relative group/submenu">
                    <Link href="#" className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-800 rounded-md">
                      All Services <ChevronRightIcon />
                    </Link>
                    <ul className="absolute left-full top-0 mt-0 w-56 bg-black rounded-lg shadow-lg p-2 hidden group-hover/submenu:block">
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Brand Strategy</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Product Design</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">UI UX Design</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">SEO Services</Link></li>
                    </ul>
                  </li>

                  {/* Submenú para "Portfolio - Style 1" */}
                  <li className="relative group/submenu">
                    <Link href="#" className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-800 rounded-md">
                      Portfolio - Style 1 <ChevronRightIcon />
                    </Link>
                    <ul className="absolute left-full top-0 mt-0 w-56 bg-black rounded-lg shadow-lg p-2 hidden group-hover/submenu:block">
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Masonry 2 Column</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Masonry 3 Column</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Masonry 4 Column</Link></li>
                    </ul>
                  </li>
                  
                  {/* Submenú para "Portfolio - Style 2" */}
                  <li className="relative group/submenu">
                    <Link href="#" className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-800 rounded-md">
                      Portfolio - Style 2 <ChevronRightIcon />
                    </Link>
                    <ul className="absolute left-full top-0 mt-0 w-56 bg-black rounded-lg shadow-lg p-2 hidden group-hover/submenu:block">
                      {/* Aquí irían los otros enlaces de portfolio style 2 */}
                    </ul>
                  </li>

                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Blog Archive</Link></li>
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-800 rounded-md">Contact Page</Link></li>
                </ul>
              </li>

              <li>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Botón "Book a Call" - Oculto en pantallas medianas y pequeñas */}
          <Link
            href="#contact"
            className="hidden lg:inline-block bg-white text-black font-bold uppercase text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}