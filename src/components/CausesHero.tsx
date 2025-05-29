
import React from 'react';

const CausesHero = () => {
  return (
    <section className="relative bg-slate-600 text-white text-center py-32 px-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      />
      <div className="relative container mx-auto">
        <h1 className="text-5xl font-bold mb-6">Transform Lives Through Your Support</h1>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          Your contribution creates pathways to independence, dignity, and meaningful futures for children and young adults with special needs.
        </p>
        <div className="space-x-4">
          <a href="#donation-options" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
            Donate Now
          </a>
          <a href="#impact-stories" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default CausesHero;
