
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

// For demo purposes we'll use static data
// In a real app, this would come from a cart context/state
const initialCartItems = [
  {
    id: "1",
    name: "Relaxed Fit Cotton T-shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    quantity: 1,
    size: "M",
    color: "White"
  },
  {
    id: "3",
    name: "Leather Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000",
    quantity: 1,
    size: "UK 9",
    color: "Black"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-24 rounded overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-sm text-gray-600">Size: {item.size}</span>
                        <span className="text-sm text-gray-600 ml-2">Color: {item.color}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded">
                          <button 
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button 
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          className="text-gray-500 hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <Button className="w-full bg-fbpurple-500 hover:bg-fbpurple-600 text-white py-3">
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4 text-center">
                  <Link to="/" className="text-fbpurple-500 hover:text-fbpurple-600 text-sm">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
