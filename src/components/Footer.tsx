
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-fbpurple-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FBCollection</h3>
            <p className="text-gray-300">
              Modern fashion essentials for your everyday style journey.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/category/clothing" className="text-gray-300 hover:text-white transition">Clothing</Link></li>
              <li><Link to="/category/shoes" className="text-gray-300 hover:text-white transition">Shoes</Link></li>
              <li><Link to="/category/accessories" className="text-gray-300 hover:text-white transition">Accessories</Link></li>
              <li><Link to="/sale" className="text-gray-300 hover:text-white transition">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition">FAQs</Link></li>
              <li><Link to="/size-guide" className="text-gray-300 hover:text-white transition">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-fbpurple-500 px-4 py-2 rounded-r hover:bg-fbpurple-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 FBCollection. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
