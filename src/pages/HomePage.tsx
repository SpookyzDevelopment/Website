import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized plugins and configurations for maximum server performance'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Battle-tested code with security best practices built-in'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Dedicated support team ready to help you succeed'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Custom Plugins' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      name: 'MineCraft_Pro',
      role: 'Server Owner',
      content: 'SpookyDevz transformed our server with their amazing plugins. Performance increased by 300%!',
      rating: 5
    },
    {
      name: 'BuildMaster',
      role: 'Network Admin',
      content: 'Professional, reliable, and incredibly skilled. They delivered exactly what we needed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Spook<span className="text-red-500">ify</span> Your Server
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Premium Minecraft development services, custom plugins, and server solutions 
              that will give your players a frighteningly good experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Browse Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg border border-gray-700"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SpookyDevz?</h2>
            <p className="text-xl text-gray-400">We deliver professional solutions that exceed expectations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-850 transition-colors group">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-6 group-hover:bg-red-700 transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-red-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Everything you need to build the perfect Minecraft experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Custom Plugins</h3>
              <p className="text-gray-400 mb-4">Tailored solutions for your unique server needs</p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Economy Systems</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Mini Games</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Admin Tools</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Server Configurations</h3>
              <p className="text-gray-400 mb-4">Pre-optimized setups for maximum performance</p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Performance Tuning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Security Hardening</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Plugin Integration</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Support & Maintenance</h3>
              <p className="text-gray-400 mb-4">Ongoing support to keep your server running smoothly</p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> 24/7 Monitoring</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Regular Updates</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-red-500 mr-2" /> Bug Fixes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Spookify Your Server?</h2>
          <p className="text-xl text-red-100 mb-8">Join hundreds of satisfied server owners who trust SpookyDevz</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;