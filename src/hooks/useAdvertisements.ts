import { useQuery } from '@tanstack/react-query';
import type { Advertisement } from '../types/advertisement';

const sampleAds: Advertisement[] = [
  {
    id: "1",
    title: "Spring Pet Health Check",
    description: "Complete health examination including vaccinations and dental check at 20% off",
    imageUrl: "https://images.unsplash.com/photo-1612531822963-3873f7dd3cf4?auto=format&fit=crop&w=800&q=80",
    clinic: "American Veterinary Clinic",
    validUntil: "2024-05-31",
    link: "https://americanvet.ae/promotions"
  },
  {
    id: "2",
    title: "New Pet Welcome Package",
    description: "First-time visit package including consultation and basic vaccinations",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    clinic: "German Veterinary Clinic",
    validUntil: "2024-06-30",
    link: "https://germanvet.ae/contact-us"
  },
  {
    id: "3",
    title: "Pet Dental Month",
    description: "Comprehensive dental cleaning and check-up with 15% discount",
    imageUrl: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80",
    clinic: "Pet Friends Group",
    validUntil: "2024-05-15",
    link: "https://petfriendsgroup.com/promotions"
  }
];

export function useAdvertisements() {
  return useQuery<Advertisement[]>({
    queryKey: ['advertisements'],
    queryFn: async () => {
      // In a real application, this would fetch from an API
      return sampleAds;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}