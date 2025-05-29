
import React from 'react';
import SectionTitle from './SectionTitle';

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-8 bg-slate-700 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Voices of Our Community</h2>
          <p className="text-lg max-w-3xl mx-auto text-slate-200">Stories of growth, connection, and transformation.</p>
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl italic mb-6">
            "At Gurukulam, I discovered my passion for digital art. The teachers saw my potential when others only saw my challenges. Today, I'm designing graphics for a tech company and mentoring other young artists. This place didn't try to change who I am—they helped me become more of who I already was."
          </p>
          <p className="font-bold text-lg">— Priya, 24, Digital Artist</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
