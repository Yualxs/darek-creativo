// Archivo: src/app/layout.js

import { Sansita, IBM_Plex_Sans_Condensed, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Configuración de las fuentes con los pesos necesarios
const sansita = Sansita({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-sansita',
});

const plexSans = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-plex-sans',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--font-source-sans',
});

// METADATA CORREGIDA
export const metadata = {
  title: 'Darek Creativo - Diseñador de Producto y Desarrollo Web',
  description: 'Portafolio de Darek Creativo, especialista en crear identidades visuales mágicas para productos digitales.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sansita.variable} ${plexSans.variable} ${sourceSans.variable} bg-black text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}