import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Shield, Zap, Users } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  downloads: number;
  image: string;
  features: string[];
  tags: string[];
}

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'plugins', name: 'Plugins', count: 8 },
    { id: 'configs', name: 'Configurations', count: 3 },
    { id: 'setups', name: 'Server Setups', count: 1 }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'SpookyEconomy Pro',
      description: 'Advanced economy system with banks, loans, and custom currencies',
      price: 29.99,
      originalPrice: 59.99,
      category: 'plugins',
      rating: 4.9,
      downloads: 1250,
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Multi-currency support', 'Banking system', 'Loan management', 'Transaction history'],
      tags: ['economy', 'premium', 'popular']
    },
    {
      id: '2',
      name: 'Spooky PvP Arena',
      description: 'Complete PvP arena system with matchmaking and tournaments',
      price: 24.99,
      category: 'plugins',
      rating: 4.8,
      downloads: 890,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Auto matchmaking', 'Tournament system', 'Custom arenas', 'Statistics tracking'],
      tags: ['pvp', 'arena', 'competitive']
    },
    {
      id: '3',
      name: 'Horror Dungeon Pack',
      description: 'Pre-built horror-themed dungeons with custom mobs and loot',
      price: 39.99,
      category: 'configs',
      rating: 4.7,
      downloads: 567,
      image: 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['5 unique dungeons', 'Custom mob spawners', 'Rare loot tables', 'Boss fights'],
      tags: ['dungeon', 'horror', 'adventure']
    },
    {
      id: '4',
      name: 'Spooky Chat Manager',
      description: 'Advanced chat management with filters, channels, and moderation',
      price: 19.99,
      category: 'plugins',
      rating: 4.6,
      downloads: 1456,
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Auto moderation', 'Custom channels', 'Chat filters', 'Staff tools'],
      tags: ['chat', 'moderation', 'essential']
    },
    {
      id: '5',
      name: 'Complete Server Bundle',
      description: 'Everything you need to start a professional Minecraft server',
      price: 99.99,
      originalPrice: 199.99,
      category: 'setups',
      rating: 5.0,
      downloads: 234,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['20+ plugins', 'Server configuration', 'Setup guide', '30 days support'],
      tags: ['bundle', 'complete', 'bestseller']
    },
    {
      id: '6',
      name: 'Spooky Ranks System',
      description: 'Comprehensive ranking system with permissions and rewards',
      price: 22.99,
      category: 'plugins',
      rating: 4.8,
      downloads: 923,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Custom rank progression', 'Permission management', 'Reward system', 'GUI interface'],
      tags: ['ranks', 'permissions', 'progression']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  const isInCart = (productId: string) => cart.includes(productId);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SpookyDevz Store</h1>
          <p className="text-xl text-gray-400">Premium Minecraft plugins, configurations, and server solutions</p>
          
          {/* Special Offer Banner */}
          <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-semibold">50% OFF for first-time customers! Use code: SPOOKY50</span>
              <Zap className="h-5 w-5 text-yellow-300" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-red-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <ShoppingCart className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-white">Cart ({cart.length})</span>
                  </div>
                  <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-medium">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        SALE
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-900 bg-opacity-75 text-white px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <ul className="text-gray-300 text-sm space-y-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Shield className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{product.downloads}</span>
                      </div>
                    </div>

                    {/* Price and Purchase */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-gray-400 line-through text-lg">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={isInCart(product.id)}
                        className={`px-4 py-2 rounded-md font-medium transition-colors ${
                          isInCart(product.id)
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;