import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

export function BackgroundPatterns() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % theme.backgrounds.patterns.length);
    }, 60000); // Change every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {theme.backgrounds.patterns.map((pattern, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-float-${(index % 3) + 1}`}
          style={{
            backgroundImage: pattern,
            opacity: index === currentIndex ? 0.05 : 0,
          }}
        />
      ))}
      <div 
        className="absolute inset-0"
        style={{
          background: theme.colors.gradient,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}