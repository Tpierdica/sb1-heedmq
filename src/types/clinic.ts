export interface EmergencyInfo {
  available24Hours: boolean;
  emergencyPhone?: string;
  emergencyServices: string[];
  outOfHoursInfo?: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  appointmentUrl?: string;
  hours: {
    [key: string]: string;
  };
  services: string[];
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  emergency?: EmergencyInfo;
}

export interface FavoriteClinic extends Clinic {
  isFavorite: boolean;
}