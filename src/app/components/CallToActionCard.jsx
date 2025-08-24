// Archivo: src/app/components/CallToActionCard.jsx

import Link from 'next/link';

export default function CallToActionCard({ title, description, buttonText, buttonHref }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-brand-blue text-white rounded-2xl w-full h-full">
      <h3 className="text-2xl font-bold uppercase font-sansita">
        {title}
      </h3>
      <p className="mt-2 text-base font-source-sans">
        {description}
      </p>
      <Link href={buttonHref} className="mt-4 px-6 py-3 bg-brand-green text-white rounded-2xl font-bold uppercase hover:opacity-90 transition-opacity">
        {buttonText}
      </Link>
    </div>
  );
}