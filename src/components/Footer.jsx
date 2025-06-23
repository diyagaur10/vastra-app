import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-secondary border-t border-brand-primary/30 mt-24">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-center text-sm text-brand-dark/70">
            &copy; {new Date().getFullYear()} Vastra. Your vision, tailored.
          </p>
          <div className="flex items-center space-x-4">
             <a href="#" className="text-brand-dark/70 hover:text-brand-primary">About</a>
             <a href="#" className="text-brand-dark/70 hover:text-brand-primary">Contact</a>
             <a href="#" className="text-brand-dark/70 hover:text-brand-primary">FAQ</a>
          </div>
          <p className="flex items-center text-sm text-brand-dark/70">
            Made with <Heart className="w-4 h-4 mx-1 text-brand-primary" /> for you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;