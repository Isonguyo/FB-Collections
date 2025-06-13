
import { useEffect, useState } from 'react';
import { Product, getSaleProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function SalePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getSaleProducts());
  }, []);

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="bg-red-50 mb-8 p-8 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-600">Sale</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Enjoy discounts up to 50% off on selected items. Limited time offer.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No sale products currently available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
