
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white text-center py-32 px-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(67, 56, 202, 0.8)), url("https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Embracing Neurodiversity: Building a World of Acceptance
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Celebrating unique minds, fostering inclusiveness, and creating opportunities for everyone to thrive and contribute.
        </p>
        <div className="space-x-4">
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold"
          >
            Learn More
          </Button>
          <Button 
            className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-3 rounded-full text-lg font-bold"
          >
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
