
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Facebook, Youtube, Star, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="container flex flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">ResumeCraft</h2>
                <p className="text-sm text-blue-200">by MA DIGITAL HUB</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Professional resume builder and digital solutions provider
            </p>
            <a 
              href="mailto:alimajid03021980@gmail.com" 
              className="text-blue-300 hover:text-white transition-colors text-sm"
            >
              alimajid03021980@gmail.com
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="https://ma-digital-kohl.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                MA Digital Hub <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://modern-cvmaker.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                Modern CV Maker <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://www.facebook.com/share/16TyxwjKRy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/channel/UChQTYgIbl2C2ZIsRoKkXFUQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.pinterest.com/alimajid03021980/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Star className="h-5 w-5" />
              </a>
              <a 
                href="https://www.fiverr.com/users/alimajid0302198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Star className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alimajid03021980@gmail.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} MA DIGITAL HUB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
