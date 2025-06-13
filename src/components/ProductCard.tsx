
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className={cn("group block", className)}>
      <div className="overflow-hidden rounded-lg mb-3 relative product-card-hover">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[350px] object-cover object-center transform group-hover:scale-105 transition duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {product.new && (
            <span className="badge badge-new">New</span>
          )}
          {product.sale && (
            <span className="badge badge-sale">Sale</span>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 group-hover:text-fbpurple-500 transition-colors">
        {product.name}
      </h3>
      
      <div className="mt-1 flex items-center">
        {product.sale ? (
          <>
            <span className="text-red-500 font-medium">${product.salePrice?.toFixed(2)}</span>
            <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
          </>
        ) : (
          <span className="font-medium">${product.price.toFixed(2)}</span>
        )}
      </div>
    </Link>
  );
}
