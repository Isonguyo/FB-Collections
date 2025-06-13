
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, getProductsByCategory } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      setLoading(true);
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
      setLoading(false);
    }
  }, [category]);

  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our selection of premium {category} designed for style and comfort.
          </p>
        </header>

        {/* Filter & Sort Controls - Just UI for now */}
        <div className="flex flex-wrap items-center justify-between mb-8 bg-gray-50 p-4 rounded">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span className="text-gray-600">Filter:</span>
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm">New Arrivals</Button>
            <Button variant="outline" size="sm">Sale</Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-fbpurple-400">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fbpurple-500"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
