import React from 'react';

// In a real app, you'd fetch these from an API or a CMS.
const images = [
  "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2752081/pexels-photo-2752081.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const InspirationGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-brand-dark/80">Find Your Inspiration</h2>
      </div>
      {/* 
        This uses a simple CSS column layout to create a masonry effect.
        It's a great way to get the "Pinterest" look without extra libraries.
      */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img 
              src={src} 
              alt={`Fashion inspiration ${index + 1}`} 
              className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationGrid;