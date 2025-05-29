
import React from 'react';
import { Heart, Users } from 'lucide-react';

const ParticipateWidget = () => {
  return (
    <div className="fixed top-1/2 right-2 transform -translate-y-1/2 z-50 pointer-events-none">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl border-4 border-white/20 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-1">
          <Heart className="w-4 h-4 mr-1" />
          <Users className="w-4 h-4" />
        </div>
        <div className="text-center text-xs font-bold leading-tight">
          <div>Participate</div>
          <div>And Care</div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateWidget;
