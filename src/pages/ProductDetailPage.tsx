
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, getProductById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      // Set default selections if product exists
      if (foundProduct) {
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
      }
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Here you would typically add the product to a cart state/context
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fbpurple-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            {/* Price */}
            <div className="mb-6">
              {product.sale ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-500">${product.salePrice?.toFixed(2)}</span>
                  <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={selectedSize === size ? "bg-fbpurple-500" : ""}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      className={selectedColor === color ? "bg-fbpurple-500" : ""}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center">
                <button 
                  className="border rounded-l px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="border-y px-4 py-2">{quantity}</span>
                <button 
                  className="border rounded-r px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg"
              className="bg-fbpurple-500 hover:bg-fbpurple-600 text-white mb-4 flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={20} />
              Add to Cart
            </Button>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-500">On all orders above $50</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">30 Day Returns</h3>
                <p className="text-sm text-gray-500">Not satisfied? Return within 30 days for a full refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
