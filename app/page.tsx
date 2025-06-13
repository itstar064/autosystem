'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Shield, Coins, TrendingUp, Users, Zap } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/ui/ProductCard';
import { useAppStore } from '../lib/store';

// Mock data for demonstration
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Organic Face Serum',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 1247,
    category: 'Cosmetics',
    seller: 'BeautyLab',
    specs: {
      skinType: 'All Types',
      volume: '30ml',
      organic: 'Yes',
    },
    affiliateUrl: 'https://example.com/product1',
    deliveryTime: '2-3 days',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Home Security System',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 892,
    category: 'Electronics',
    seller: 'TechGuard',
    specs: {
      cameras: '4',
      storage: '1TB',
      wireless: 'Yes',
    },
    affiliateUrl: 'https://example.com/product2',
    deliveryTime: '1-2 days',
    inStock: true,
  },
  {
    id: '3',
    name: 'Artisan Coffee Blend',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 2156,
    category: 'Gourmet',
    seller: 'RoastMaster',
    specs: {
      origin: 'Ethiopia',
      roast: 'Medium',
      weight: '500g',
    },
    affiliateUrl: 'https://example.com/product3',
    deliveryTime: '3-5 days',
    inStock: true,
  },
];

const categories = [
  { name: 'Cosmetics', icon: '💄', count: '12.5K+', color: 'from-pink-500 to-rose-500' },
  { name: 'Electronics', icon: '📱', count: '8.2K+', color: 'from-blue-500 to-indigo-500' },
  { name: 'Gourmet', icon: '🍷', count: '6.8K+', color: 'from-green-500 to-emerald-500' },
  { name: 'Fashion', icon: '👗', count: '15.3K+', color: 'from-purple-500 to-violet-500' },
  { name: 'Real Estate', icon: '🏠', count: '3.1K+', color: 'from-orange-500 to-red-500' },
  { name: 'Sports', icon: '⚽', count: '4.7K+', color: 'from-teal-500 to-cyan-500' },
];

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Recommendations',
    description: 'Get personalized product suggestions based on your preferences and behavior.',
  },
  {
    icon: Shield,
    title: 'Blockchain Verified Reviews',
    description: 'All reviews are stored on-chain for transparency and authenticity.',
  },
  {
    icon: Coins,
    title: 'Earn Tokens for Participation',
    description: 'Get rewarded with tokens for reviews, recommendations, and community engagement.',
  },
  {
    icon: Zap,
    title: 'One-Click Purchase',
    description: 'Buy products instantly with Web3 wallets or traditional payment methods.',
  },
];

export default function HomePage() {
  const { searchQuery, setSearchQuery } = useAppStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Compare, Click,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Delivered!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The world's first decentralized product comparison platform powered by AI and blockchain. 
              Earn tokens for reviews, get AI recommendations, and purchase with one click.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products across all categories..."
                  className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Comparing
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-gray-600">
              Discover products across multiple categories with AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} products</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Trending products with the highest community ratings and token rewards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Web3AI Compare?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the future of product comparison with blockchain and AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Products Compared</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Tokens Distributed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Earning Tokens?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of smart shoppers and start earning rewards for your participation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Connect Wallet
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}