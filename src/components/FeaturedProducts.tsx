
import { useEffect, useState } from 'react';
import { Product, getFeaturedProducts } from '@/lib/data';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getFeaturedProducts());
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Discover our handpicked selection of this season's must-have pieces
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
