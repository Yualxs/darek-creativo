// Archivo: src/app/components/LogoCloud.jsx

"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Section from './Section'; // <-- Importamos el componente Section

// NOTA: Las importaciones de CSS de Swiper deben ir en src/app/globals.css
// Como lo discutimos, para evitar conflictos de estilos.

const logos = [
  { src: '/logos/animal-print.png', alt: 'Animal Print' },
  { src: '/logos/beaute.png', alt: 'Beaute' },
  { src: '/logos/beyond.png', alt: 'Beyond' },
  { src: '/logos/casa-real.png', alt: 'Casa Real' },
  { src: '/logos/clicket.png', alt: 'Clicket' },
  { src: '/logos/crecer.png', alt: 'Crecer' },
  { src: '/logos/electropreste.png', alt: 'Electropreste' },
  { src: '/logos/escuela-europea.png', alt: 'Escuela Europea' },
  { src: '/logos/fidalga.png', alt: 'Fidalga' },
  { src: '/logos/forum.png', alt: 'Forum' },
  { src: '/logos/fun-house.png', alt: 'Fun House' },
  { src: '/logos/hipermaxi.png', alt: 'Hipermaxi' },
  { src: '/logos/homixs.png', alt: 'Homixs' },
  { src: '/logos/imcruz.png', alt: 'Imcruz' },
  { src: '/logos/labtek.png', alt: 'Labtek' },
  { src: '/logos/logo-mentisan.png', alt: 'Logo Mentisan' },
  { src: '/logos/manqa.png', alt: 'Manqa' },
  { src: '/logos/met-hotel.png', alt: 'Met Hotel' },
  { src: '/logos/nova.png', alt: 'Nova' },
  { src: '/logos/nur.png', alt: 'Nur' },
  { src: '/logos/paceña.png', alt: 'Paceña' },
  { src: '/logos/pacha.png', alt: 'Pacha' },
  { src: '/logos/pelando-cable.png', alt: 'Pelando Cable' },
  { src: '/logos/plusnetwork.png', alt: 'Plusnetwork' },
  { src: '/logos/rocksted.png', alt: 'Rocksted' },
  { src: '/logos/samay.png', alt: 'Samay' },
  { src: '/logos/sbc-al-razi.png', alt: 'SBC Al Razi' },
  { src: '/logos/sbc-beer-experience.png', alt: 'SBC Beer Experience' },
  { src: '/logos/sbc-downtown.png', alt: 'SBC Downtown' },
  { src: '/logos/sbc-los-cusis.png', alt: 'SBC Los Cusis' },
  { src: '/logos/sbc-rooftop.png', alt: 'SBC Rooftop' },
  { src: '/logos/seldon.png', alt: 'Seldon' },
  { src: '/logos/sjp.png', alt: 'Super Jump Park' },
  { src: '/logos/slow-motion.png', alt: 'Slow Motion' },
  { src: '/logos/sobefy.png', alt: 'Sobefy' },
  { src: '/logos/suzuki.png', alt: 'Suzuki' },
  { src: '/logos/tarja-preta.png', alt: 'Tarja Preta' },
  { src: '/logos/tigo.png', alt: 'Tigo' },
  { src: '/logos/tu-brokker.png', alt: 'Tu Brokker' },
  { src: '/logos/up.png', alt: 'Up' },
  { src: '/logos/yualxs.png', alt: 'Yualxs' },
];

export default function LogoCloud() {
  return (
    <Section py="py-12" className="bg-[#111111]">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={24}
        freeMode={{ enabled: true, momentum: false }}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={3000}
        grabCursor={true}
        allowTouchMove={true}
        className="!px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="relative h-10 w-40 grayscale opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}