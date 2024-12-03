import React from 'react';
import { Megaphone } from 'lucide-react';
import { theme } from '../styles/theme';
import { AdvertisingCard } from './AdvertisingCard';
import { useAdvertisements } from '../hooks/useAdvertisements';

export function AdvertisingSection() {
  const { data: ads } = useAdvertisements();

  if (!ads?.length) {
    return null;
  }

  return (
    <div className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" style={{ background: theme.colors.gradientTransparent }}>
      <div className="flex items-center mb-6">
        <Megaphone className="w-6 h-6 text-primary mr-2" />
        <h2 className="text-2xl font-bold text-primary">Featured Promotions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <AdvertisingCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
}