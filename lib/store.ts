import { create } from 'zustand';
import { Product, ComparisonItem, User, TokenBalance } from './types';

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Comparison state
  comparisonItems: ComparisonItem[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  
  // Search state
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Category state
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  
  // Token state
  tokenBalance: TokenBalance;
  updateTokenBalance: (balance: Partial<TokenBalance>) => void;
  
  // UI state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),
  
  // Comparison state
  comparisonItems: [],
  addToComparison: (product) => {
    const { comparisonItems } = get();
    if (comparisonItems.length >= 5) return; // Max 5 items
    if (comparisonItems.find(item => item.product.id === product.id)) return;
    
    set({
      comparisonItems: [...comparisonItems, { product, selected: true }]
    });
  },
  removeFromComparison: (productId) => {
    const { comparisonItems } = get();
    set({
      comparisonItems: comparisonItems.filter(item => item.product.id !== productId)
    });
  },
  clearComparison: () => set({ comparisonItems: [] }),
  
  // Search state
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Category state
  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  // Token state
  tokenBalance: {
    recommendation: 0,
    review: 0,
    campaign: 0,
    traffic: 0,
  },
  updateTokenBalance: (balance) => {
    const { tokenBalance } = get();
    set({
      tokenBalance: { ...tokenBalance, ...balance }
    });
  },
  
  // UI state
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));