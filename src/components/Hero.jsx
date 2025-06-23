import React from 'react';
import { UploadCloud } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center py-20 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-dark leading-tight">
          Your Dream Outfit, <span className="text-brand-primary">Made Real</span>.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-brand-dark/80 max-w-2xl mx-auto">
          Inspired by a look on Pinterest or Instagram? Upload a photo, connect with skilled local tailors, and get a custom-fit outfit you'll love.
        </p>
        <div className="mt-10">
          <button className="bg-brand-dark text-white font-semibold py-4 px-8 rounded-full hover:bg-brand-dark/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
            <UploadCloud className="mr-3 h-6 w-6" /> Upload Your Inspiration
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;