import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import type { Clinic } from '../data/clinics';
import { theme } from '../styles/theme';

interface MapProps {
  clinics: Clinic[];
  selectedClinic?: Clinic;
}

export function Map({ clinics, selectedClinic }: MapProps) {
  const [activeClinic, setActiveClinic] = useState<Clinic | undefined>(selectedClinic);

  useEffect(() => {
    setActiveClinic(selectedClinic);
  }, [selectedClinic]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-secondary-light">
      <div className="absolute inset-0">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              activeClinic?.id === clinic.id ? 'scale-125 z-10' : 'hover:scale-110'
            }`}
            style={{
              left: `${((clinic.location.lng + 180) * 100) / 360}%`,
              top: `${((90 - clinic.location.lat) * 100) / 180}%`
            }}
            onClick={() => setActiveClinic(clinic)}
          >
            <MapPin
              className={`w-6 h-6 ${
                activeClinic?.id === clinic.id
                  ? 'text-primary-dark'
                  : 'text-primary'
              }`}
            />
          </div>
        ))}
      </div>

      {activeClinic && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold text-primary-dark">{activeClinic.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{activeClinic.address}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {activeClinic.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-secondary/50 text-primary-dark rounded-full text-xs"
              >
                {service}
              </span>
            ))}
            {activeClinic.services.length > 3 && (
              <span className="px-2 py-1 bg-secondary/50 text-primary-dark rounded-full text-xs">
                +{activeClinic.services.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      <div 
        className="absolute inset-0 bg-secondary-light opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${theme.colors.primary.light} 0%, transparent 70%)`
        }}
      />
    </div>
  );
}