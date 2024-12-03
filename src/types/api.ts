export interface ApiClinic {
  id: string;
  establishmentNameEn: string;
  establishmentNameAr: string;
  address: string;
  phoneNumber: string;
  email: string;
  workingHours: string;
  latitude: number;
  longitude: number;
  services: string[];
  licenseNumber: string;
  status: string;
}

export interface ApiResponse {
  data: ApiClinic[];
  status: number;
  message: string;
}