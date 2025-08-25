// Archivo: src/app/page.js

import HeroSection from '@/app/components/HeroSection';
import LogoCloud from '@/app/components/LogoCloud';
import ServicesSection from '@/app/components/ServicesSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <ServicesSection />
      <ContactSection />
    </>
  );
}