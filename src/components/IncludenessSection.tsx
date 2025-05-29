
import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const IncludenessSection = () => {
  return (
    <section id="inclusiveness" className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Creating Inclusive Spaces"
          description="Building environments where everyone belongs and can participate fully."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Sensory-Friendly Environments"
            content="Many autistic individuals experience sensory sensitivities that can make everyday environments challenging. At Gurukulam, we design spaces with adjustable lighting, quiet zones, and sensory tools to ensure comfort and reduce overwhelm."
            additionalContent="Our sensory-friendly approach allows everyone to engage and learn without unnecessary barriers."
            imageUrl="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="A classroom with diverse learning materials"
          />
          
          <FeatureCard
            title="Flexible Learning Approaches"
            content="We recognize that people learn and process information differently. Our programs incorporate visual supports, hands-on activities, technology, and personalized pacing to accommodate diverse learning styles."
            additionalContent="By offering multiple pathways to engagement and understanding, we ensure that everyone can access learning opportunities in ways that work for them."
            imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="People collaborating on a project"
          />
          
          <FeatureCard
            title="Community Integration"
            content="True inclusion extends beyond our center into the broader community. We partner with local businesses, schools, and organizations to create opportunities for meaningful participation and contribution."
            additionalContent="From internships and employment to recreational activities and civic engagement, we're building pathways for autistic individuals to be valued community members."
            imageUrl="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="A diverse group of people in a community setting"
          />
        </div>
      </div>
    </section>
  );
};

export default IncludenessSection;
