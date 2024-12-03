import React from 'react';
import { ChevronDown, ChevronUp, Search, Dog } from 'lucide-react';
import { ClinicCard } from './ClinicCard';
import { InfoTooltip } from './InfoTooltip';
import type { Clinic } from '../types/clinic';
import { theme } from '../styles/theme';
import { useFavorites } from '../hooks/useFavorites';
import { useExpandedSections } from '../hooks/useExpandedSections';

interface ClinicDirectoryProps {
  clinics: Clinic[];
}

export function ClinicDirectory({ clinics }: ClinicDirectoryProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { favoriteId, toggleFavorite, sortedClinics } = useFavorites(clinics);
  const { expandedSections, toggleSection } = useExpandedSections();
  const isExpanded = expandedSections.has('clinics');

  const filteredClinics = sortedClinics.filter((clinic) => {
    const term = searchTerm.toLowerCase();
    return (
      clinic.name.toLowerCase().includes(term) ||
      clinic.services.some(service => service.toLowerCase().includes(term)) ||
      clinic.address.toLowerCase().includes(term)
    );
  });

  return (
    <div 
      className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" 
      style={{ background: theme.colors.tiles.gradient1 }}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dog className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Veterinary Clinic Directory</h2>
            <InfoTooltip message="Please select filter icon to show full details and locations" />
          </div>
          <button
            onClick={() => toggleSection('clinics')}
            className="text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-full p-1 transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>

        {isExpanded && (
          <>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#343a40] w-5 h-5" />
              <input
                type="text"
                placeholder="Search clinics by name, services, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#343a40]/20 bg-[#343a40]/5 backdrop-blur-sm text-[#343a40] placeholder:text-[#343a40]/50 focus:outline-none focus:ring-2 focus:ring-[#343a40]/30 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClinics.map((clinic) => (
                <ClinicCard
                  key={clinic.id}
                  clinic={clinic}
                  isFavorite={clinic.id === favoriteId}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>

            {filteredClinics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-primary text-lg">
                  No clinics found matching your search criteria.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}