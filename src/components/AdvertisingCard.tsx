import React from 'react';
import { ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import type { Advertisement } from '../types/advertisement';
import { theme } from '../styles/theme';
import { useClinics } from '../hooks/useClinics';

interface AdvertisingCardProps {
  ad: Advertisement;
}

export function AdvertisingCard({ ad }: AdvertisingCardProps) {
  const { data: clinics } = useClinics();
  const clinic = clinics?.find(c => c.name === ad.clinic);

  return (
    <div 
      className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-primary/20"
      style={{ background: theme.colors.gradientTransparent }}
    >
      <img 
        src={ad.imageUrl} 
        alt={ad.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-primary text-lg mb-2">
          {ad.title}
        </h3>
        <p className="text-primary/80 text-sm mb-3">
          {ad.description}
        </p>
        
        <div className="border-t border-primary/10 pt-3 mt-3">
          <h4 className="text-primary font-medium mb-2">{ad.clinic}</h4>
          
          {clinic && (
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-primary/80">
                <MapPin className="w-4 h-4 mr-2 shrink-0" />
                <span>{clinic.address}</span>
              </div>
              
              <div className="flex items-center text-primary/80">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <a href={`tel:${clinic.phone}`} className="hover:text-primary transition-colors">
                  {clinic.phone}
                </a>
              </div>
              
              <div className="flex items-center text-primary/80">
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-primary transition-colors">
                  {clinic.email}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center text-sm mt-3">
          <span className="text-primary/60">
            Valid until {new Date(ad.validUntil).toLocaleDateString()}
          </span>
          <a
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            Learn More
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}