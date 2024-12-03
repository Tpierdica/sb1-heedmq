import React from 'react';

export function Logo() {
  return (
    <div className="relative w-12 h-12 mr-3">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4EA5D9" />
            <stop offset="100%" stopColor="#2E86AB" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main circle */}
        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
        
        {/* Stylized P */}
        <path
          d="M35 25 Q45 25 45 35 L45 65 M35 25 L35 75 M35 45 Q45 45 45 35"
          stroke="white"
          strokeWidth="6"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* Paw print */}
        <circle cx="65" cy="40" r="5" fill="white" opacity="0.9" />
        <circle cx="75" cy="45" r="5" fill="white" opacity="0.9" />
        <circle cx="65" cy="50" r="5" fill="white" opacity="0.9" />
        <circle cx="70" cy="60" r="8" fill="white" opacity="0.9" />
      </svg>
    </div>
  );
}