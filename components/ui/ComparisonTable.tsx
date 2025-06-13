'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ExternalLink, X, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../lib/types';
import { useAppStore } from '../../lib/store';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const { removeFromComparison } = useAppStore();

  const sortedProducts = [...products].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortBy) {
      case 'price':
        aValue = a.price;
        bValue = b.price;
        break;
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      default:
        return 0;
    }

    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const handleSort = (field: 'price' | 'rating' | 'name') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📊</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products to compare</h3>
        <p className="text-gray-600">Add products to your comparison list to see them here.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Product Comparison</h2>
        <p className="opacity-90">Compare up to 5 products side by side</p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-900">Product</th>
              {sortedProducts.map((product) => (
                <th key={product.id} className="p-4 min-w-[250px]">
                  <div className="relative">
                    <button
                      onClick={() => removeFromComparison(product.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <div className="aspect-square relative mb-2 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Price Row */}
            <tr className="border-t">
              <td className="p-4 font-medium text-gray-900 bg-gray-50">
                <button
                  onClick={() => handleSort('price')}
                  className="flex items-center space-x-1 hover:text-blue-600"
                >
                  <span>Price</span>
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* Rating Row */}
            <tr className="border-t bg-gray-50">
              <td className="p-4 font-medium text-gray-900">
                <button
                  onClick={() => handleSort('rating')}
                  className="flex items-center space-x-1 hover:text-blue-600"
                >
                  <span>Rating</span>
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
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
                      {product.rating}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    ({product.reviewCount} reviews)
                  </div>
                </td>
              ))}
            </tr>

            {/* Seller Row */}
            <tr className="border-t">
              <td className="p-4 font-medium text-gray-900 bg-gray-50">Seller</td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center text-gray-700">
                  {product.seller}
                </td>
              ))}
            </tr>

            {/* Delivery Row */}
            <tr className="border-t bg-gray-50">
              <td className="p-4 font-medium text-gray-900">Delivery</td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center text-gray-700">
                  {product.deliveryTime}
                </td>
              ))}
            </tr>

            {/* Stock Row */}
            <tr className="border-t">
              <td className="p-4 font-medium text-gray-900 bg-gray-50">Availability</td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
              ))}
            </tr>

            {/* Specifications */}
            {Object.keys(sortedProducts[0]?.specs || {}).map((specKey) => (
              <tr key={specKey} className="border-t">
                <td className="p-4 font-medium text-gray-900 bg-gray-50 capitalize">
                  {specKey.replace(/([A-Z])/g, ' $1').trim()}
                </td>
                {sortedProducts.map((product) => (
                  <td key={product.id} className="p-4 text-center text-gray-700">
                    {product.specs[specKey] || 'N/A'}
                  </td>
                ))}
              </tr>
            ))}

            {/* Action Row */}
            <tr className="border-t bg-gray-50">
              <td className="p-4 font-medium text-gray-900">Action</td>
              {sortedProducts.map((product) => (
                <td key={product.id} className="p-4">
                  <div className="space-y-2">
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-center flex items-center justify-center space-x-1"
                    >
                      <span>Buy Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}