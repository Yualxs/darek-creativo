// Archivo: src/app/components/ProductSection.jsx

import ProductCard from './ProductCard';

export default function ProductSection({ title, products }) {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold uppercase font-sansita text-white mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}