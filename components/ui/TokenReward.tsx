'use client';

import { motion } from 'framer-motion';
import { Coins, Star, MessageSquare, TrendingUp, Package } from 'lucide-react';

interface TokenRewardProps {
  type: 'recommendation' | 'review' | 'campaign' | 'traffic';
  amount: number;
  reason: string;
  onClose?: () => void;
}

const tokenConfig = {
  recommendation: {
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  review: {
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  campaign: {
    icon: Star,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
  },
  traffic: {
    icon: Package,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
};

export default function TokenReward({ type, amount, reason, onClose }: TokenRewardProps) {
  const config = tokenConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      className={`${config.bgColor} border border-gray-200 rounded-lg p-4 shadow-lg`}
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-full bg-gradient-to-r ${config.color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Coins className={`h-4 w-4 ${config.textColor}`} />
            <span className={`font-bold ${config.textColor}`}>
              +{amount} {type.charAt(0).toUpperCase() + type.slice(1)} Tokens
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{reason}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        )}
      </div>
    </motion.div>
  );
}