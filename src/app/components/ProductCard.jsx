// Archivo: src/app/components/ProductCard.jsx

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg w-full">
      <Image 
        src={product.imageUrl} 
        alt={product.title} 
        width={300} 
        height={400} 
        className="w-full h-auto object-cover rounded-md mb-4" 
      />
      <h3 className="text-lg font-bold text-gray-800 font-sansita uppercase">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 mt-1 h-10">
        {product.description}
      </p>

      <div className="flex flex-col items-center mt-4 space-y-4">
        {product.mercadoLibreUrl && (
          <Link href={product.mercadoLibreUrl} target="_blank" rel="noopener noreferrer">
            {/* CAMBIO AQUÍ: de h-8 a w-32 object-contain */}
            <img src={product.mercadoLibreLogoUrl} alt="Comprar en Mercado Libre" className="w-32 object-contain hover:opacity-80 transition-opacity" />
          </Link>
        )}
        {product.amazonUrl && (
          <Link href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
            {/* CAMBIO AQUÍ: de h-8 a w-32 object-contain */}
            <img src={product.amazonBooksLogoUrl} alt="Comprar en Amazon" className="w-32 object-contain hover:opacity-80 transition-opacity" />
          </Link>
        )}
      </div>

      {product.qrCodeUrl && (
        <div className="mt-4">
          <Image src={product.qrCodeUrl} alt="Código QR" width={96} height={96} />
          <p className="mt-1 text-gray-700 text-xs font-bold">
            {product.phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
}