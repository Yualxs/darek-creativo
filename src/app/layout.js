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

// CORRECCIÓN: Usando el nuevo nombre de la fuente
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--font-source-sans',
});

export const metadata = {
  title: 'Odontoestrés',
  description: 'Web Tour de Odontoestrés',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sansita.variable} ... bg-black text-white flex flex-col min-h-screen`}>
        <Header />
        
        {/* Este 'main' ahora es flexible y crece para ocupar el espacio */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}