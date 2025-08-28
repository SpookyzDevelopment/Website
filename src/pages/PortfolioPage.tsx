import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Tag, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  completed: string;
  client: string;
  rating: number;
  projectUrl?: string;
  githubUrl?: string;
}

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'plugins', name: 'Plugins', count: 6 },
    { id: 'websites', name: 'Websites', count: 3 },
    { id: 'configurations', name: 'Configurations', count: 2 },
    { id: 'integrations', name: 'Integrations', count: 1 }
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'OasisMC Network Website',
      description: 'Complete redesign and development of a modern gaming network website with user dashboard, store integration, and community features.',
      category: 'websites',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      completed: '2025-01-10',
      client: 'OasisMC',
      rating: 5,
      projectUrl: 'https://oasismc.net',
      githubUrl: 'https://github.com/spookydevz/oasismc-web'
    },
    {
      id: '2',
      title: 'SpookyEconomy Pro',
      description: 'Advanced economy plugin with multi-currency support, banking system, and comprehensive transaction management.',
      category: 'plugins',
      technologies: ['Java', 'Spigot API', 'MySQL', 'Redis'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      completed: '2025-01-05',
      client: 'MineCraft Networks Ltd.',
      rating: 5,
      githubUrl: 'https://github.com/spookydevz/spooky-economy'
    },
    {
      id: '3',
      title: 'PvP Arena System',
      description: 'Tournament-ready PvP arena plugin with matchmaking, spectator mode, and comprehensive statistics tracking.',
      category: 'plugins',
      technologies: ['Java', 'Bukkit API', 'SQLite'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      completed: '2024-12-28',
      client: 'PvP Masters',
      rating: 4.8
    },
    {
      id: '4',
      title: 'Horror Server Configuration',
      description: 'Complete server setup with custom world generation, horror-themed plugins, and atmospheric configurations.',
      category: 'configurations',
      technologies: ['Spigot', 'WorldEdit', 'Citizens', 'MythicMobs'],
      image: 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      completed: '2024-12-20',
      client: 'SpookyWorld Server',
      rating: 4.9
    },
    {
      id: '5',
      title: 'Discord Bot Integration',
      description: 'Custom Discord bot with Minecraft server integration, player statistics, and automated announcements.',
      category: 'integrations',
      technologies: ['Discord.js', 'Node.js', 'MySQL', 'Minecraft API'],
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      completed: '2024-12-15',
      client: 'CraftCommunity',
      rating: 4.7
    },
    {
      id: '6',
      title: 'Custom Rank System',
      description: 'Hierarchical permission system with custom rank progression, rewards, and administrative tools.',
      category: 'plugins',
      technologies: ['Java', 'Vault API', 'LuckPerms', 'MySQL'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      completed: '2024-12-10',
      client: 'RolePlay Network',
      rating: 4.6
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-400">Showcase of our recent projects and client work</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-750 transition-colors">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-red-400 text-sm font-medium capitalize">{project.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-400 text-sm">{project.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Client: {project.client}</span>
                    <div className="flex items-center space-x-3">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-white">All Projects</h2>
          
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filter by Category</span>
            </button>
            
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-750 transition-colors">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-900 bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-sm">{project.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.completed}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Tag className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-red-100 mb-8">Let's create something amazing together</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;