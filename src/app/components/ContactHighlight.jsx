// Archivo: src/app/components/ContactHighlight.jsx

import Link from 'next/link';

export default function ContactHighlight({ icon, heading, text, link }) {
  return (
    <Link 
      href={link} 
      className="flex items-center p-3 rounded-full border border border-white/10 transition-colors duration-300 hover:bg-gray-800 group bg-gradient-to-r from-white/10 to-transparent"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white mr-4">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-brand-gray">{heading}</p>
        <p className="text-sm text-white font-medium">{text}</p>
      </div>
    </Link>
  );
}