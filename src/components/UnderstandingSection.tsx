
import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const UnderstandingSection = () => {
  return (
    <section id="understanding" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Understanding Autism and Neurodiversity"
          description="Embracing the unique perspectives and abilities that enrich our community and world."
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard 
            title="Beyond Awareness"
            description="Autism is not simply a condition to be aware of—it's a different way of experiencing and interacting with the world. Autistic individuals possess unique perspectives, abilities, and ways of processing information that contribute to the rich tapestry of human neurodiversity. At Gurukulam, we move beyond awareness to promote acceptance, understanding, and celebration of neurodivergent minds."
            image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="A colorful puzzle piece pattern representing neurodiversity"
          />
          
          <FeatureCard 
            title="Strengths and Abilities"
            description="Many autistic individuals demonstrate remarkable abilities in pattern recognition, detail orientation, memory, and creative thinking. Some excel in fields like mathematics, music, art, technology, and literature. We focus on identifying and nurturing these unique strengths, helping each person develop their full potential and find their path to meaningful contribution."
            image="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Diverse hands joining together in unity"
          />
          
          <FeatureCard 
            title="Communication and Connection"
            description="Autistic individuals may communicate differently, but their desire for connection and understanding is just as profound. Some may use alternative communication methods, require more processing time, or express themselves through art, technology, or other means. We create environments where diverse communication styles are respected and supported, fostering meaningful connections across neurological differences."
            image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="A person using assistive technology"
          />
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
