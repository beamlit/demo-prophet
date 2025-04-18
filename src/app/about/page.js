import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">About PineappleCo</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to bring the world's best pineapples straight to your door, 
          while supporting sustainable farming practices and communities.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="mb-20">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/images/pineapple-farm.jpg"
                  alt="Our pineapple farm"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by a group of pineapple enthusiasts, PineappleCo began with a simple 
                mission: to share the joy of perfectly ripe, delicious pineapples with the world.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small direct-to-consumer operation from a single farm has grown into 
                a global network of sustainable pineapple farms, each chosen for their exceptional fruit 
                quality and commitment to environmentally responsible farming practices.
              </p>
              <p className="text-gray-600">
                Today, we ship thousands of pineapples every week to homes across the country, 
                but our commitment to quality, sustainability, and customer satisfaction remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Quality</h3>
            <p className="text-gray-600">
              We're obsessed with quality. Every pineapple is hand-selected, thoroughly inspected, 
              and shipped at its optimal ripeness to ensure the best possible experience.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We partner with farms that use sustainable growing methods, minimize 
              water usage, avoid harmful chemicals, and maintain healthy soil for future generations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Community</h3>
            <p className="text-gray-600">
              We believe in fair compensation for farmers and workers. Our partnerships 
              help support local economies and provide living wages for everyone in our supply chain.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/team-member-1.jpg"
                alt="Sarah Johnson, CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-secondary">Sarah Johnson</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/team-member-2.jpg"
                alt="David Chen, Head of Agriculture"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-secondary">David Chen</h3>
              <p className="text-gray-500">Head of Agriculture</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/team-member-3.jpg"
                alt="Maria Rodriguez, Operations Manager"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-secondary">Maria Rodriguez</h3>
              <p className="text-gray-500">Operations Manager</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/team-member-4.jpg"
                alt="James Wilson, Head of Customer Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-secondary">James Wilson</h3>
              <p className="text-gray-500">Head of Customer Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-secondary text-white rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Join the Pineapple Revolution</h2>
            <p className="text-lg mb-6">
              We're always looking for pineapple enthusiasts to join our community. Sign up for our newsletter 
              to receive updates, special offers, and pineapple-inspired recipes.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Shop Our Pineapples
            </Link>
          </div>
          <div className="md:w-1/3 relative">
            <div className="relative h-64 md:h-full">
              <Image
                src="/images/pineapple-close-up.jpg"
                alt="Close-up of a pineapple"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 