
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-fbpurple-900">
            FBCollection
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/category/clothing" className="nav-link font-medium">
            Clothing
          </Link>
          <Link to="/category/shoes" className="nav-link font-medium">
            Shoes
          </Link>
          <Link to="/category/accessories" className="nav-link font-medium">
            Accessories
          </Link>
          <Link to="/sale" className="nav-link font-medium text-red-500">
            Sale
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-fbpurple-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 text-lg">
          <Link 
            to="/category/clothing" 
            className="py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Clothing
          </Link>
          <Link 
            to="/category/shoes" 
            className="py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Shoes
          </Link>
          <Link 
            to="/category/accessories" 
            className="py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Accessories
          </Link>
          <Link 
            to="/sale" 
            className="py-2 border-b border-gray-100 text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Sale
          </Link>
        </nav>
      </div>
    </header>
  );
}
