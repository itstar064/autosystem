'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, MessageSquare, Coins, TrendingUp, Users, Award } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TokenReward from '../../components/ui/TokenReward';

const leaderboard = [
  {
    id: '1',
    username: 'CryptoReviewer',
    walletAddress: '0x1234...5678',
    totalTokens: 15420,
    reviewCount: 89,
    reputation: 4.9,
    badges: ['Top Reviewer', 'Early Adopter', 'Verified'],
  },
  {
    id: '2',
    username: 'ProductGuru',
    walletAddress: '0x2345...6789',
    totalTokens: 12350,
    reviewCount: 67,
    reputation: 4.8,
    badges: ['Expert', 'Trusted'],
  },
  {
    id: '3',
    username: 'Web3Shopper',
    walletAddress: '0x3456...7890',
    totalTokens: 9870,
    reviewCount: 45,
    reputation: 4.7,
    badges: ['Active Member'],
  },
];

const recentActivity = [
  {
    id: '1',
    user: 'CryptoReviewer',
    action: 'reviewed',
    product: 'Premium Organic Face Serum',
    tokens: 25,
    time: '2 hours ago',
  },
  {
    id: '2',
    user: 'ProductGuru',
    action: 'recommended',
    product: 'Smart Home Security System',
    tokens: 15,
    time: '4 hours ago',
  },
  {
    id: '3',
    user: 'Web3Shopper',
    action: 'purchased',
    product: 'Artisan Coffee Blend',
    tokens: 10,
    time: '6 hours ago',
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'activity' | 'rewards'>('leaderboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Community Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant community of smart shoppers. Earn tokens, share reviews, 
              and help others make better purchasing decisions.
            </p>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">25,847</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reviews Posted</p>
                <p className="text-2xl font-bold text-gray-900">156,234</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Coins className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tokens Distributed</p>
                <p className="text-2xl font-bold text-gray-900">2.4M</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">3,421</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
                { id: 'activity', name: 'Recent Activity', icon: TrendingUp },
                { id: 'rewards', name: 'Token Rewards', icon: Coins },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Contributors</h3>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{user.username}</h4>
                            <div className="flex space-x-1">
                              {user.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{user.walletAddress}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-bold text-yellow-600">{user.totalTokens.toLocaleString()} tokens</p>
                            <p className="text-sm text-gray-600">{user.reviewCount} reviews</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{user.reputation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Community Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-blue-600">
                            {activity.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-900">
                            <span className="font-semibold">{activity.user}</span>{' '}
                            {activity.action}{' '}
                            <span className="font-medium">{activity.product}</span>
                          </p>
                          <p className="text-sm text-gray-600">{activity.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        <Coins className="h-4 w-4" />
                        <span className="font-bold">+{activity.tokens}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Token Reward System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <TokenReward
                      type="review"
                      amount={25}
                      reason="For writing a detailed product review (100+ words)"
                    />
                    <TokenReward
                      type="recommendation"
                      amount={15}
                      reason="AI recommendation accepted by another user"
                    />
                    <TokenReward
                      type="campaign"
                      amount={50}
                      reason="Participating in brand campaign"
                    />
                    <TokenReward
                      type="traffic"
                      amount={10}
                      reason="Order completed successfully"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">How to Earn More Tokens</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Write detailed, helpful product reviews</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Engage with community by liking and commenting</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Complete purchases through our platform</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Refer friends to join the community</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Participate in brand campaigns and promotions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}