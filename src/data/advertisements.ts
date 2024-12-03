export interface Advertisement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  clinic: string;
  validUntil: string;
  link: string;
}

export const sampleAds: Advertisement[] = [];