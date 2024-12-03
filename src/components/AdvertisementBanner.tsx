import React from 'react';
import { Megaphone, ExternalLink } from 'lucide-react';
import { theme } from '../styles/theme';
import { sampleAds } from '../data/advertisements';

export function AdvertisementBanner() {
  return (
    <div className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" style={{ background: theme.colors.gradientTransparent }}>
      <div className="flex items-center mb-6">
        <Megaphone className="w-6 h-6 text-primary mr-2" />
        <h2 className="text-xl font-bold text-primary">Special Offers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleAds.map((ad) => (
          <div 
            key={ad.id}
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
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary font-medium">
                  {ad.clinic}
                </span>
                <span className="text-primary/60">
                  Valid until {new Date(ad.validUntil).toLocaleDateString()}
                </span>
              </div>
              <a
                href={ad.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-primary hover:text-primary-light transition-colors"
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}