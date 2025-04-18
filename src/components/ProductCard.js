'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-background border border-foreground/10 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={`https://placehold.co/400x400/f9bc60/004643.png?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-sm text-foreground/70 line-clamp-2">{product.description}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div>
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-accent">${product.salePrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-foreground/60 line-through">${product.regularPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-secondary">${product.regularPrice.toFixed(2)}</span>
            )}
          </div>
          
          <Link
            href={`/products/${product.id}`}
            className="text-primary hover:text-primary/80 font-medium text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
      
      <button 
        className="absolute bottom-0 left-0 right-0 bg-secondary text-white py-2 font-medium text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
} 