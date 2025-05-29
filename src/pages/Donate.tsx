
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonateHero from '@/components/DonateHero';
import DonateImpact from '@/components/DonateImpact';
import DonateStories from '@/components/DonateStories';
import DonateTiers from '@/components/DonateTiers';
import DonateTransparency from '@/components/DonateTransparency';
import DonateTestimonials from '@/components/DonateTestimonials';
import DonateForm from '@/components/DonateForm';
import DonateCTA from '@/components/DonateCTA';
import ParticipateWidget from '@/components/ParticipateWidget';

const Donate = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <DonateHero />
      
      <main id="main-content">
        <DonateImpact />
        <DonateStories />
        <DonateTiers />
        <DonateTransparency />
        <DonateTestimonials />
        <DonateForm />
        <DonateCTA />
      </main>
      
      <Footer />
      <ParticipateWidget />
    </div>
  );
};

export default Donate;
