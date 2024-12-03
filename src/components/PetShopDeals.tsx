import React, { useState, useMemo } from 'react';
import { ShoppingBag, ExternalLink, Tag, LogIn, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { theme } from '../styles/theme';
import { InstashopIcon } from './icons/InstashopIcon';
import { petShops } from '../data/petShops';

export function PetShopDeals() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('all');

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(petShops.map(shop => shop.location))];
    return ['all', ...uniqueLocations.sort()];
  }, []);

  const filteredShops = useMemo(() => {
    if (selectedLocation === 'all') return petShops;
    return petShops.filter(shop => shop.location === selectedLocation);
  }, [selectedLocation]);

  return (
    <div 
      className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" 
      style={{ background: theme.colors.tiles.gradient3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ShoppingBag className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-2xl font-bold text-primary flex items-center">
            Shopping with Instashop
            <InstashopIcon className="w-6 h-6 text-primary mx-2" />
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {isExpanded && (
            <>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-9 pr-8 py-2 rounded-lg border border-primary/20 bg-white text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
              </div>
              <a
                href="https://instashop.com/en-ae/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#ff284d] text-white rounded-lg hover:bg-[#ff284d]/90 transition-colors"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login/Register on Instashop
              </a>
            </>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-full p-1 transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="rounded-lg overflow-hidden border border-primary/20 hover:shadow-lg transition-all duration-300"
              style={{ background: theme.colors.gradientTransparent }}
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary text-lg mb-2">
                  {shop.name}
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  {shop.description}
                </p>
                <div className="flex items-center text-sm text-primary/60 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {shop.location}
                </div>
                <div className="space-y-2 mb-4">
                  {shop.featuredSales.map((sale, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-primary/80"
                    >
                      <Tag className="w-4 h-4 mr-2 text-[#ff284d]" />
                      {sale}
                    </div>
                  ))}
                </div>
                <a
                  href={shop.instashopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  View on Instashop
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}