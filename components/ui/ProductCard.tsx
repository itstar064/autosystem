'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Plus, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../lib/types';
import { useAppStore } from '../../lib/store';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  showCompareButton?: boolean;
}

export default function ProductCard({ product, showCompareButton = true }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToComparison, comparisonItems } = useAppStore();
  
  const isInComparison = comparisonItems.some(item => item.product.id === product.id);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleAddToComparison = () => {
    if (comparisonItems.length >= 5) {
      toast.error('Maximum 5 products can be compared at once');
      return;
    }
    
    addToComparison(product);
    toast.success(`${product.name} added to comparison`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="product-card group"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 shimmer rounded-t-xl" />
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </div>
        )}
        
        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col space-y-2">
            {showCompareButton && (
              <button
                onClick={handleAddToComparison}
                disabled={isInComparison}
                className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                  isInComparison
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {isInComparison ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Seller */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
          <span>{product.seller}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Delivery Info */}
        <div className="text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            🚚 Delivery: {product.deliveryTime}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            View Details
          </Link>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center flex items-center justify-center space-x-1"
          >
            <span>Buy Now</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}