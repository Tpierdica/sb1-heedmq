import type { ApiClinic } from '../types/api';

export function isValidClinicData(clinic: ApiClinic): boolean {
  return (
    typeof clinic === 'object' &&
    clinic !== null &&
    typeof clinic.id === 'string' &&
    typeof clinic.establishmentNameEn === 'string' &&
    typeof clinic.address === 'string' &&
    typeof clinic.phoneNumber === 'string' &&
    typeof clinic.email === 'string' &&
    Array.isArray(clinic.services)
  );
}