
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactChannels from '@/components/ContactChannels';
import ContactMain from '@/components/ContactMain';
import ContactStaff from '@/components/ContactStaff';
import ContactFAQ from '@/components/ContactFAQ';
import ContactEmergency from '@/components/ContactEmergency';
import ContactAccessibility from '@/components/ContactAccessibility';
import ContactCTA from '@/components/ContactCTA';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <ContactHero />
      
      <main id="main-content">
        <ContactChannels />
        <ContactMain />
        <ContactStaff />
        <ContactFAQ />
        <ContactEmergency />
        <ContactAccessibility />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
