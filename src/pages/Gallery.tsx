
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/GalleryHero';
import GalleryMain from '@/components/GalleryMain';
import StudentJourney from '@/components/StudentJourney';
import GalleryImpact from '@/components/GalleryImpact';
import GalleryTestimonials from '@/components/GalleryTestimonials';
import GalleryCTA from '@/components/GalleryCTA';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        Skip to main content
      </a>
      
      <Header />
      <GalleryHero />
      
      <main id="main-content">
        <GalleryMain />
        <StudentJourney />
        <GalleryImpact />
        <GalleryTestimonials />
        <GalleryCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
