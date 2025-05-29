
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="get-involved" className="py-16 px-8 bg-slate-700 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Join Our Community of Giving</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Together, we can create a world where neurodiversity is celebrated, where every person has opportunities to contribute their unique gifts, and where kindness and understanding bridge our differences.
        </p>
        <div className="space-x-4">
          <Button className="bg-white text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-full text-lg font-bold">
            Donate Now
          </Button>
          <Button className="bg-slate-800 hover:bg-slate-600 text-white px-6 py-3 rounded-full text-lg font-bold">
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
