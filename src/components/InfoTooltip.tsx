import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  message: string;
}

export function InfoTooltip({ message }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        className="text-[#ff69b4] hover:text-[#ff69b4]/80 transition-colors focus:outline-none"
        aria-label="Show information"
      >
        <Info className="w-5 h-5" />
      </button>
      
      {isVisible && (
        <div className="absolute z-50 w-64 p-3 mt-2 -left-28 top-full">
          <div className="relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-primary/20" />
            <div className="relative bg-white text-primary text-sm rounded-lg shadow-lg border border-primary/20 p-3">
              <em>{message}</em>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}