import type { ApiClinic } from '../types/api';
import type { Clinic } from '../types/clinic';

export function mapApiClinicToClinic(apiClinic: ApiClinic): Clinic {
  // Ensure all properties are serializable
  return {
    id: String(apiClinic.id || ''),
    name: String(apiClinic.establishmentNameEn || ''),
    nameAr: String(apiClinic.establishmentNameAr || ''),
    address: String(apiClinic.address || ''),
    phone: String(apiClinic.phoneNumber || ''),
    email: String(apiClinic.email || ''),
    hours: parseWorkingHours(String(apiClinic.workingHours || '')),
    services: Array.isArray(apiClinic.services) ? apiClinic.services.map(String) : [],
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    location: {
      lat: Number(apiClinic.latitude) || 0,
      lng: Number(apiClinic.longitude) || 0
    },
    licenseNumber: String(apiClinic.licenseNumber || ''),
    status: String(apiClinic.status || '')
  };
}

function parseWorkingHours(workingHours: string): { [key: string]: string } {
  try {
    // Attempt to parse working hours if it's a JSON string
    const parsed = JSON.parse(workingHours);
    if (typeof parsed === 'object' && parsed !== null) {
      return parsed;
    }
  } catch {
    // If parsing fails, return a default schedule
  }

  // Default schedule if parsing fails or invalid format
  return {
    Monday: workingHours || '9:00 AM - 6:00 PM',
    Tuesday: workingHours || '9:00 AM - 6:00 PM',
    Wednesday: workingHours || '9:00 AM - 6:00 PM',
    Thursday: workingHours || '9:00 AM - 6:00 PM',
    Friday: workingHours || '9:00 AM - 6:00 PM',
    Saturday: workingHours || '9:00 AM - 6:00 PM',
    Sunday: workingHours || '9:00 AM - 6:00 PM'
  };
}