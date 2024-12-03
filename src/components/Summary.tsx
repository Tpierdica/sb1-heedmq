import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { theme } from '../styles/theme';

export function Summary() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const benefits = [
    "View emergency veterinary services contact details",
    "View clinic services, working hours, and contact details",
    "Locate nearby pet shops and veterinary facilities"
  ];

  return (
    <div 
      className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20 relative overflow-hidden" 
      style={{ background: '#e8f4f8' }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-500"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1669864723566-2c50c9d25b0d?auto=format&fit=crop&w=2070&q=80")',
          filter: 'blur(1px)'
        }} 
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary">Welcome to PetPals Abu Dhabi</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:bg-primary/10 rounded-full p-1 transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>
        
        {isExpanded && (
          <>
            <p className="text-primary/80 mb-6">
              Your comprehensive companion for all pet care needs in Abu Dhabi. We connect pet parents with quality veterinary care, 
              emergency services, and pet supplies, making pet care management simple and efficient.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-lg border border-primary/10 bg-white/80 backdrop-blur-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                  <span className="text-primary/80">{benefit}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}