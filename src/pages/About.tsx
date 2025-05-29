
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import OurStory from '@/components/OurStory';
import OurVision from '@/components/OurVision';
import OurApproach from '@/components/OurApproach';
import OurTeam from '@/components/OurTeam';
import AboutTestimonials from '@/components/AboutTestimonials';
import AboutCTA from '@/components/AboutCTA';
import ParticipateWidget from '@/components/ParticipateWidget';

const About = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <AboutHero />
      
      <main id="main-content">
        <OurStory />
        <OurVision />
        <OurApproach />
        <OurTeam />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      
      <Footer />
      <ParticipateWidget />
    </div>
  );
};

export default About;
