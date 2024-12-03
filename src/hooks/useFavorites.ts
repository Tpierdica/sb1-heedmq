import { useState, useCallback } from 'react';
import type { Clinic } from '../types/clinic';

export function useFavorites(initialClinics: Clinic[]) {
  const [favoriteId, setFavoriteId] = useState<string | null>(null);

  const toggleFavorite = useCallback((clinicId: string) => {
    setFavoriteId(prev => prev === clinicId ? null : clinicId);
  }, []);

  const sortedClinics = [...initialClinics].sort((a, b) => {
    // First sort by favorite status
    if (a.id === favoriteId) return -1;
    if (b.id === favoriteId) return 1;
    
    // Then sort alphabetically by name
    return a.name.localeCompare(b.name);
  });

  return {
    favoriteId,
    toggleFavorite,
    sortedClinics
  };
}