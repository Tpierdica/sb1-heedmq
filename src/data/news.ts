export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  source: string;
  date: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Australian Vet in Abu Dhabi: Your Pet's Home Away from Home",
    description: "Discover how Australian Veterinary Hospital on Reem Island is bringing world-class pet care to Abu Dhabi with their state-of-the-art facilities and experienced team of veterinarians.",
    imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
    url: "https://inspireambitions.com/australian-vet-abu-dhabi-reem-island/",
    source: "Inspire Ambitions",
    date: "2024-03-15"
  },
  {
    id: "2",
    title: "Pet Care Tips for UAE Summer",
    description: "Essential guidelines for keeping your pets safe and healthy during the hot UAE summer months, with expert advice from leading veterinarians.",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    source: "UAE Pet Care",
    url: "https://example.com/pet-care-summer",
    date: "2024-03-10"
  },
  {
    id: "3",
    title: "New Veterinary Services in Abu Dhabi",
    description: "Exploring the latest veterinary services and technologies available in Abu Dhabi's leading animal hospitals and clinics.",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    source: "Abu Dhabi Health",
    url: "https://example.com/new-vet-services",
    date: "2024-03-05"
  }
];