
import React from 'react';

const DonateHero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-600/70 to-slate-600/70 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-white text-center py-32">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold mb-6">Transform Lives Through Your Generosity</h1>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          Your donation creates pathways to independence, dignity, and joy for children with special needs at Gurukulam. Every contribution, no matter the size, helps build a foundation for their brighter future.
        </p>
        <a href="#donation-form" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default DonateHero;
