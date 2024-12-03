import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesListProps {
  services: string[];
}

export function ServicesList({ services }: ServicesListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedServices = isExpanded ? services : services.slice(0, 3);

  return (
    <div className="mt-4">
      <h4 className="text-primary font-medium mb-2">Services</h4>
      <div className="flex flex-wrap gap-2">
        {displayedServices.map((service) => (
          <span
            key={service}
            className="px-3 py-1 bg-[#cecece] text-[#003da6] rounded-full text-sm font-medium shadow-sm hover:bg-[#cecece]/90 transition-colors"
          >
            {service}
          </span>
        ))}
      </div>
      {services.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-primary/80 hover:text-primary flex items-center"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              Show More ({services.length - 3} more) <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
}