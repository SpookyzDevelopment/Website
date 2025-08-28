import React, { useState } from 'react';
import { Search, BookOpen, Code, Settings, Users, ChevronRight, Star, Clock } from 'lucide-react';

interface WikiArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
  popular: boolean;
}

const WikiPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen, count: 24 },
    { id: 'guides', name: 'Guides', icon: BookOpen, count: 12 },
    { id: 'commands', name: 'Commands', icon: Code, count: 8 },
    { id: 'configuration', name: 'Configuration', icon: Settings, count: 6 },
    { id: 'permissions', name: 'Permissions', icon: Users, count: 4 }
  ];

  const articles: WikiArticle[] = [
    {
      id: '1',
      title: 'Getting Started with SpookyEconomy',
      category: 'guides',
      description: 'Learn how to set up and configure the SpookyEconomy plugin for your server',
      readTime: 5,
      difficulty: 'beginner',
      lastUpdated: '2025-01-15',
      popular: true
    },
    {
      id: '2',
      title: 'Advanced PvP Arena Configuration',
      category: 'configuration',
      description: 'Deep dive into customizing your PvP arenas with advanced settings',
      readTime: 12,
      difficulty: 'advanced',
      lastUpdated: '2025-01-14',
      popular: true
    },
    {
      id: '3',
      title: 'Essential Economy Commands',
      category: 'commands',
      description: 'Complete reference of all economy-related commands and their usage',
      readTime: 8,
      difficulty: 'intermediate',
      lastUpdated: '2025-01-13',
      popular: false
    },
    {
      id: '4',
      title: 'Permission Groups Setup',
      category: 'permissions',
      description: 'How to configure permission groups for different user roles',
      readTime: 6,
      difficulty: 'intermediate',
      lastUpdated: '2025-01-12',
      popular: true
    },
    {
      id: '5',
      title: 'Troubleshooting Common Issues',
      category: 'guides',
      description: 'Solutions to the most frequently encountered problems',
      readTime: 10,
      difficulty: 'beginner',
      lastUpdated: '2025-01-11',
      popular: true
    },
    {
      id: '6',
      title: 'Chat Filter Configuration',
      category: 'configuration',
      description: 'Set up automated chat moderation and filtering systems',
      readTime: 7,
      difficulty: 'intermediate',
      lastUpdated: '2025-01-10',
      popular: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-500 bg-green-500/20';
      case 'intermediate':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'advanced':
        return 'text-red-500 bg-red-500/20';
      default:
        return 'text-gray-500 bg-gray-500/20';
    }
  };

  const popularArticles = articles.filter(article => article.popular).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SpookyDevz Wiki</h1>
          <p className="text-xl text-gray-400">Comprehensive documentation and guides</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
              {/* Categories */}
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2 mb-8">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4" />
                          <span>{category.name}</span>
                        </div>
                        <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Popular Articles */}
              <h3 className="text-lg font-semibold text-white mb-4">Popular Articles</h3>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <div key={article.id} className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">{article.title}</h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime} min read
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-400">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Articles Grid */}
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h2 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                          {article.title}
                        </h2>
                        {article.popular && (
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        )}
                      </div>
                      <p className="text-gray-400 mb-4">{article.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime} min read
                        </div>
                        <div className="text-gray-400">
                          Updated {article.lastUpdated}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or browse different categories</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <BookOpen className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Installation Guides</h3>
              <p className="text-gray-400 text-sm">Step-by-step setup instructions</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <Code className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Command Reference</h3>
              <p className="text-gray-400 text-sm">Complete command documentation</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <Settings className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Configuration</h3>
              <p className="text-gray-400 text-sm">Customize plugin settings</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Permissions</h3>
              <p className="text-gray-400 text-sm">Manage user permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiPage;