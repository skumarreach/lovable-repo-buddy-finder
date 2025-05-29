
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UnderstandingSection from '@/components/UnderstandingSection';
import IncludenessSection from '@/components/IncludenessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GivingSection from '@/components/GivingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <Hero />
      
      <main id="main-content">
        <UnderstandingSection />
        <IncludenessSection />
        <TestimonialsSection />
        <GivingSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
