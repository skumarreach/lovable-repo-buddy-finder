
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
      </div>
    </section>
  );
};

export default CausesHero;
