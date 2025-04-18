'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock cart data - in a real app, this would come from a cart state management
const initialCartItems = [
  {
    id: 1,
    name: "Premium Golden Pineapple",
    price: 7.99,
    quantity: 2,
    image: "/images/golden-pineapple.jpg",
  },
  {
    id: 4,
    name: "Dried Pineapple Rings",
    price: 5.49,
    quantity: 1,
    image: "/images/dried-pineapple.jpg",
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;
  
  // Handle quantity changes
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-secondary mb-8">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-secondary">Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</h2>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="px-6 py-4 flex items-center">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium text-secondary">
                            <Link href={`/products/${item.id}`} className="hover:text-primary">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="text-base font-medium text-secondary">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-secondary hover:bg-gray-100"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-secondary hover:bg-gray-100"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-gray-500 hover:text-accent"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 px-6 py-4">
                <Link
                  href="/products"
                  className="text-primary hover:text-primary/80 flex items-center"
                >
                  <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-secondary mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-secondary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-secondary">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-gray-500">
                    Free shipping on orders over $50
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                  <span className="text-secondary">Total</span>
                  <span className="text-secondary">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md font-semibold transition-colors">
                Proceed to Checkout
              </button>
              
              <div className="mt-4 flex items-center justify-center">
                <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-500">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="mt-4 text-2xl font-semibold text-secondary">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Looks like you haven't added any pineapples to your cart yet.</p>
          <Link 
            href="/products" 
            className="mt-6 inline-block bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md font-semibold"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
} 