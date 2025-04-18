import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

// Get featured products (those on sale)
const featuredProducts = products.filter(product => product.onSale).slice(0, 4);

function WavyDivider({ flip = false, className = 'fill-funky/20' }) {
  return (
    <svg
      className={`w-full h-12 md:h-16 ${flip ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 1440 320"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
  );
}

function Confetti() {
  // Simple confetti using absolutely positioned colored circles
  const confetti = Array.from({ length: 18 }).map((_, i) => {
    const colors = ['#ff3cac', '#f9bc60', '#2ed8c3', '#f25042', '#fff'];
    const size = Math.random() * 16 + 8;
    const left = Math.random() * 100;
    const top = Math.random() * 60;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 2;
    return (
      <div
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: color,
          opacity: 0.7,
          animationDelay: `${delay}s`,
        }}
        className="absolute rounded-full animate-confetti"
      />
    );
  });
  return <div className="pointer-events-none absolute inset-0 z-10">{confetti}</div>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://placehold.co/1920x1080/004643/f9bc60.png?text=Hero%20Background" 
            alt="Placeholder hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Confetti />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            <span className="inline-block animate-wiggle">🍍</span>{' '}
            <span className="text-white">Premium Pineapples</span> Delivered to Your Door
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-white/90">
            Experience the tropical sweetness of hand-selected pineapples, sourced from the finest growing regions around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="rounded-md bg-funky hover:bg-teal text-white px-6 py-3 font-semibold text-lg transition-colors shadow-funky hover:scale-105 hover:rotate-3 duration-200"
            >
              Shop Now
            </Link>
            <Link 
              href="/about" 
              className="rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold text-lg transition-colors border-2 border-funky text-white hover:scale-105 hover:-rotate-3 duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <WavyDivider className="fill-funky/20" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-0">
          <WavyDivider flip className="fill-teal/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4 drop-shadow-funky">Why Choose PineappleCo?</h2>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              We're dedicated to bringing you the best pineapples with unmatched quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-background p-8 rounded-lg shadow-funky text-center flex flex-col items-center transform transition-transform duration-300 hover:-rotate-3 hover:scale-105 group cursor-pointer">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-funky/20 text-funky mb-6 transition-transform duration-300 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Premium Quality</h3>
              <p className="text-foreground/90">Hand-selected pineapples at perfect ripeness for maximum flavor and enjoyment.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-background p-8 rounded-lg shadow-funky text-center flex flex-col items-center transform transition-transform duration-300 hover:rotate-3 hover:scale-105 group cursor-pointer">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal/20 text-teal mb-6 transition-transform duration-300 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Fair Sourcing</h3>
              <p className="text-foreground/90">We work directly with farmers to ensure sustainable and ethical farming practices.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-background p-8 rounded-lg shadow-funky text-center flex flex-col items-center transform transition-transform duration-300 hover:-rotate-3 hover:scale-105 group cursor-pointer">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6 transition-transform duration-300 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fast Delivery</h3>
              <p className="text-foreground/90">Prompt shipping to ensure fresh pineapples arrive at your doorstep within days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Featured Products</h2>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              Discover our most popular pineapple selections, handpicked for exceptional quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center rounded-md bg-secondary hover:bg-secondary/90 text-white px-6 py-3 font-semibold transition-colors"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-foreground/90 mb-4">"The sweetest pineapples I've ever tasted! I've been ordering monthly for the past year and have never been disappointed."</p>
              <p className="font-semibold text-secondary">— Sarah Johnson</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-foreground/90 mb-4">"Their pineapple plants are thriving in my home garden. The customer service team was incredibly helpful with all my growing questions."</p>
              <p className="font-semibold text-secondary">— Michael Rodriguez</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-foreground/90 mb-4">"The gift box was a hit at our tropical-themed party! Everyone loved the quality and presentation. Will definitely order again."</p>
              <p className="font-semibold text-secondary">— Emma Thompson</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to experience premium pineapples?</h2>
              <p className="text-lg mb-6 md:mb-0 text-white/90">Join our pineapple club for exclusive offers, tropical recipes, and first access to seasonal varieties.</p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Link 
                href="/products" 
                className="inline-block rounded-md bg-primary hover:bg-primary/90 text-secondary px-6 py-3 font-semibold text-lg transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
