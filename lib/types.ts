export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  seller: string;
  specs: Record<string, string>;
  affiliateUrl: string;
  deliveryTime: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  content: string;
  tokenReward: number;
  likes: number;
  createdAt: string;
  verified: boolean;
}

export interface TokenBalance {
  recommendation: number;
  review: number;
  campaign: number;
  traffic: number;
}

export interface User {
  id: string;
  walletAddress: string;
  username: string;
  tokenBalance: TokenBalance;
  reviewCount: number;
  reputation: number;
  badges: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  filters: Filter[];
}

export interface Filter {
  id: string;
  name: string;
  type: 'select' | 'range' | 'checkbox';
  options?: string[];
  min?: number;
  max?: number;
}

export interface ComparisonItem {
  product: Product;
  selected: boolean;
}

export interface AIRecommendation {
  productId: string;
  score: number;
  reason: string;
  confidence: number;
}