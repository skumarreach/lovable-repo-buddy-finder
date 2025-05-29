
import React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-red-600">{title}</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700">{description}</p>
    </div>
  );
};

export default SectionTitle;
