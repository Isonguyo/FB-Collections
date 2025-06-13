
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      
      <section className="py-16 bg-fbpurple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up for Updates</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Be the first to know about new arrivals, special offers, and more.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-fbpurple-400"
            />
            <button className="bg-fbpurple-500 text-white px-6 py-3 rounded font-medium hover:bg-fbpurple-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
