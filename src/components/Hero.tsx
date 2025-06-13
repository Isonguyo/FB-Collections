
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative bg-gray-100 h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="images/Fashion Trio Against Neutral Backdrop.png
          "
          alt="Hero background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fbpurple-900/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Discover Your Signature Style</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Explore our curated collection of clothing, shoes, and accessories designed for the modern individual.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-fbpurple-500 hover:bg-fbpurple-600 text-white"
              asChild
            >
              <Link to="/new-arrivals">Shop New Arrivals</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white"
              asChild
            >
              <Link to="/category/clothing">Browse Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
