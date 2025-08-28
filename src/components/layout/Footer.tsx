import React from 'react';
import { Skull, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-red-600 rounded-lg">
                <Skull className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SpookyDevz</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Minecraft development services, plugins, configurations, and server solutions. 
              Building the spookiest and most reliable digital experiences.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by the SpookyDevz team</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/store" className="text-gray-400 hover:text-red-400 transition-colors">Store</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-red-400 transition-colors">Support</a></li>
              <li><a href="/wiki" className="text-gray-400 hover:text-red-400 transition-colors">Documentation</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-red-400 transition-colors">Portfolio</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-red-400 transition-colors">Service Status</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact Us</a></li>
              <li>
                <a 
                  href="https://discord.gg/spookydevz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <span>Discord</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li><a href="/wiki" className="text-gray-400 hover:text-red-400 transition-colors">Help Center</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-red-400 transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SpookyDevz. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;