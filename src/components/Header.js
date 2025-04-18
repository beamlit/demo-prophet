'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-secondary">
                  <span className="text-primary">Pineapple</span>Co
                </span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium text-secondary">
                Home
              </Link>
              <Link href="/products" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium text-secondary">
                Products
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium text-secondary">
                About
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium text-secondary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/cart" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-secondary hover:bg-primary/10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-secondary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-primary/10 hover:border-primary text-base font-medium text-secondary">
              Home
            </Link>
            <Link href="/products" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-primary/10 hover:border-primary text-base font-medium text-secondary">
              Products
            </Link>
            <Link href="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-primary/10 hover:border-primary text-base font-medium text-secondary">
              About
            </Link>
            <Link href="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-primary/10 hover:border-primary text-base font-medium text-secondary">
              Contact
            </Link>
            <Link href="/cart" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-primary/10 hover:border-primary text-base font-medium text-secondary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 