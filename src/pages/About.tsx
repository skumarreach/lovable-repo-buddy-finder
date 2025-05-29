
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import OurVision from '@/components/OurVision';
import OurApproach from '@/components/OurApproach';
import OurTeam from '@/components/OurTeam';
import AboutTestimonials from '@/components/AboutTestimonials';
import ParticipateWidget from '@/components/ParticipateWidget';
import Chatbot from '@/components/Chatbot';

const About = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <AboutHero />
      
      <main id="main-content">
        <OurVision />
        <OurApproach />
        <OurTeam />
        <AboutTestimonials />
      </main>
      
      <Footer />
      <ParticipateWidget />
      <Chatbot />
    </div>
  );
};

export default About;
