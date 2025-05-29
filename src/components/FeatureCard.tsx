
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  content: string;
  additionalContent?: string;
  imageUrl: string;
  imageAlt: string;
}

const FeatureCard = ({ title, content, additionalContent, imageUrl, imageAlt }: FeatureCardProps) => {
  return (
    <Card className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
        <p className="mb-4 text-gray-700">{content}</p>
        {additionalContent && <p className="text-gray-700">{additionalContent}</p>}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
