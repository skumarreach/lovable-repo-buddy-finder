
import React from 'react';
import { useTranslation } from 'react-i18next';
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
import ParticipateWidget from '@/components/ParticipateWidget';
import Chatbot from '@/components/Chatbot';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        {t('common.skipToContent')}
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
      <ParticipateWidget />
      <Chatbot />
    </div>
  );
};

export default Contact;
