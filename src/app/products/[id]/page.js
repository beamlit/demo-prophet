'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== productId)
    .slice(0, 4);
  
  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="mt-4 text-2xl font-semibold text-secondary">Product Not Found</h2>
        <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/products" className="mt-6 inline-block bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md font-semibold">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/products" className="hover:text-primary">Products</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-secondary font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      {/* Product Detail */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative h-96 md:h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.onSale && (
                <div className="absolute top-4 right-4 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Sale
                </div>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-secondary mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="mr-4">
                {product.onSale ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-accent">${product.salePrice.toFixed(2)}</span>
                    <span className="ml-2 text-lg text-gray-400 line-through">${product.regularPrice.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-secondary">${product.regularPrice.toFixed(2)}</span>
                )}
              </div>
              
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-6">
                <div>
                  <span className="text-sm text-gray-500">Weight:</span>
                  <span className="ml-2">{product.weight}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Origin:</span>
                  <span className="ml-2">{product.origin}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 text-secondary hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 text-secondary hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <span className="ml-4 text-sm text-gray-500">
                  {product.stock} available
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Add to Cart
                </button>
                <button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 