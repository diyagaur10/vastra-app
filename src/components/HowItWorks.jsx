import React from 'react';
import { Upload, Palette, Users, Scissors } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-brand-primary" />,
    title: '1. Upload Inspiration',
    description: 'Share a photo from Pinterest, Instagram, or your gallery. This is the starting point for your dream outfit.',
  },
  {
    icon: <Palette className="h-10 w-10 text-brand-primary" />,
    title: '2. Customize Details',
    description: 'Choose your preferred fabric, color, and add any special embellishments. Make it uniquely yours.',
  },
  {
    icon: <Users className="h-10 w-10 text-brand-primary" />,
    title: '3. Match with a Tailor',
    description: 'We connect you with trusted local boutiques and tailors who specialize in your desired style and budget.',
  },
  {
    icon: <Scissors className="h-10 w-10 text-brand-primary" />,
    title: '4. Create & Deliver',
    description: 'Your tailor brings your vision to life. Receive a perfectly fitted, one-of-a-kind outfit delivered to you.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">How Vastra Works</h2>
          <p className="mt-4 text-lg text-brand-dark/70">A simple, four-step journey to your perfect outfit.</p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-secondary mx-auto">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold font-serif text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-base text-brand-dark/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;