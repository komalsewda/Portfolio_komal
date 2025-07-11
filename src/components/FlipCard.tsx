import React, { useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FlipCardProps {
  frontContent: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color: string;
    bgColor: string;
  };
  backContent: {
    title: string;
    description: string;
    details: string[];
  };
  delay?: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = frontContent.icon;

  return (
    <div 
      className="flip-card w-full h-64 cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
          <div className={`w-16 h-16 rounded-full ${frontContent.bgColor} flex items-center justify-center mb-6`}>
            <Icon size={32} className={frontContent.color} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {frontContent.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {frontContent.subtitle}
          </p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 shadow-lg text-white flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">{backContent.title}</h3>
          <p className="text-emerald-100 mb-4 text-sm leading-relaxed">
            {backContent.description}
          </p>
          <ul className="space-y-2">
            {backContent.details.map((detail, index) => (
              <li key={index} className="text-emerald-100 text-sm flex items-center">
                <span className="w-2 h-2 bg-emerald-200 rounded-full mr-2"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;