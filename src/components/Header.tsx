import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { theme } from '../styles/theme';
import { Logo } from './Logo';
import { useExpandedSections } from '../hooks/useExpandedSections';

const titleColors = [
  '#FF6B6B', // P
  '#4ECDC4', // e
  '#45B7D1', // t
  '#96CEB4', // P
  '#D4A5A5', // a
  '#9370DB', // l
  '#4EA5D9', // s
  '#2E86AB', // A
  '#48A9A6', // b
  '#4B4E6D', // u
  '#6B5B95', // D
  '#B565A7', // h
  '#D477AE', // a
  '#FF69B4', // b
  '#FF69B4', // i
];

export function Header() {
  const title = "PetPals Abu Dhabi";
  const { expandedSections, expandAll, collapseAll } = useExpandedSections();
  const isAllExpanded = expandedSections.size === 5;

  const handleToggleAll = () => {
    if (isAllExpanded) {
      collapseAll();
    } else {
      expandAll();
    }
  };

  return (
    <header 
      className="backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-primary/20" 
      style={{ background: theme.colors.gradientTransparent }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center">
            <Logo />
            <div className="flex items-center">
              <h1 className="text-xl sm:text-[2.04rem] font-bold flex">
                {title.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 inline-block"
                    style={{ 
                      color: titleColors[index % titleColors.length],
                      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                      animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h1>
              <span className="ml-2 text-2xl sm:text-3xl animate-bounce">🐱</span>
            </div>
          </div>
          
          <button
            onClick={handleToggleAll}
            className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-lg transition-colors"
          >
            {isAllExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Expand All
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}