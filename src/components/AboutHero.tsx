
import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-600/70 to-slate-600/70 bg-[url('https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-white text-center py-32 px-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6">Where Special Care Meets Extraordinary Potential</h1>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          Transforming lives through personalized education, holistic development, and unwavering belief in every child's unique abilities.
        </p>
        <div className="space-x-4">
          <a href="#our-story" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
            Our Story
          </a>
          <a href="#get-involved" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
