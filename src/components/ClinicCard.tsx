import React from 'react';
import { MapPin, Phone, Clock, Globe, Mail, Heart, CheckCircle, XCircle } from 'lucide-react';
import type { Clinic } from '../types/clinic';
import { theme } from '../styles/theme';
import { ServicesList } from './ServicesList';
import { isClinicOpen, getNextOpenTime } from '../utils/clinicStatus';

interface ClinicCardProps {
  clinic: Clinic;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ClinicCard({ clinic, isFavorite, onToggleFavorite }: ClinicCardProps) {
  const isAmericanVetClinic = clinic.name === "American Veterinary Clinic";
  const open = isClinicOpen(clinic);
  const nextOpenTime = !open ? getNextOpenTime(clinic) : '';

  const nonEmergencyServices = clinic.services.filter(
    service => !service.toLowerCase().includes('emergency')
  );

  return (
    <div
      className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-primary/20 relative"
      style={{ background: theme.colors.tiles.gradient2 }}
    >
      {isAmericanVetClinic && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1669864723566-2c50c9d25b0d?auto=format&fit=crop&w=2070&q=80")',
            filter: 'blur(1px)'
          }} 
        />
      )}
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-primary text-2xl tracking-tight">
              {clinic.name}
            </h3>
            <div className="flex items-center mt-2">
              {open ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Open Now</span>
                </div>
              ) : (
                <div className="flex items-center text-red-500">
                  <XCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Closed</span>
                  {nextOpenTime && (
                    <span className="text-sm text-primary/60 ml-2">
                      ({nextOpenTime})
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => onToggleFavorite(clinic.id)}
            className="text-primary hover:scale-110 transition-transform"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start text-primary/80">
            <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
            <span>{clinic.address}</span>
          </div>
          
          <div className="flex items-center text-primary/80">
            <Phone className="w-5 h-5 mr-3 shrink-0 text-primary" />
            <a href={`tel:${clinic.phone}`} className="hover:text-primary transition-colors">
              {clinic.phone}
            </a>
          </div>
          
          <div className="flex items-center text-primary/80">
            <Mail className="w-5 h-5 mr-3 shrink-0 text-primary" />
            <a href={`mailto:${clinic.email}`} className="hover:text-primary transition-colors">
              {clinic.email}
            </a>
          </div>
          
          {clinic.website && (
            <div className="flex items-center text-primary/80">
              <Globe className="w-5 h-5 mr-3 shrink-0 text-primary" />
              <a 
                href={clinic.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>

        <ServicesList services={nonEmergencyServices} />

        <div className="flex items-start mt-4">
          <Clock className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
          <div className="flex-1">
            {Object.entries(clinic.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between text-sm text-primary/80">
                <span className="font-medium">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}