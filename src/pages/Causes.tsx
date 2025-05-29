
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CausesHero from '@/components/CausesHero';
import CausesMission from '@/components/CausesMission';
import CausesPriorities from '@/components/CausesPriorities';
import ImpactStories from '@/components/ImpactStories';
import DonationOptions from '@/components/DonationOptions';
import CausesTestimonials from '@/components/CausesTestimonials';
import Newsletter from '@/components/Newsletter';
import CausesCTA from '@/components/CausesCTA';
import ParticipateWidget from '@/components/ParticipateWidget';

const Causes = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <CausesHero />
      
      <main id="main-content">
        <CausesMission />
        <CausesPriorities />
        <ImpactStories />
        <DonationOptions />
        <CausesTestimonials />
        <Newsletter />
        <CausesCTA />
      </main>
      
      <Footer />
      <ParticipateWidget />
    </div>
  );
};

export default Causes;
