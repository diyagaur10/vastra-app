import React from 'react';

const Header = () => {
  return (
    <header className="bg-brand-secondary/80 backdrop-blur-lg sticky top-0 z-50 border-b border-brand-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-serif font-bold text-brand-dark">
              Vastra
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#how-it-works" className="text-brand-dark hover:text-brand-primary transition-colors duration-300">How It Works</a>
              <a href="#" className="text-brand-dark hover:text-brand-primary transition-colors duration-300">Find a Tailor</a>
              <a href="#" className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm">Get Started</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;