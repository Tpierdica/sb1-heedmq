import { useQuery } from '@tanstack/react-query';
import { clinics } from '../data/clinics';
import type { Clinic } from '../types/clinic';

export function useClinics() {
  return useQuery<Clinic[]>({
    queryKey: ['clinics'],
    queryFn: async () => {
      // For now, return the static data since the API is not accessible
      return clinics;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}