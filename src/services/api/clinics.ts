import { apiClient } from './config';
import { API_ERRORS, ApiError } from './errors';
import type { ApiResponse } from '../../types/api';
import { isValidClinicData } from '../../utils/validators';

export async function fetchClinics(): Promise<ApiResponse> {
  try {
    const response = await apiClient.get<ApiResponse>('/establishments/EstablishmentMainTypes');
    
    if (!response.data) {
      throw new ApiError('No data received from the API');
    }

    const clinics = Array.isArray(response.data.data) ? response.data.data : [];
    
    // Validate clinic data
    const validClinics = clinics.filter(isValidClinicData);

    return {
      data: validClinics,
      status: response.status,
      message: response.data.message || 'Success'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new ApiError(API_ERRORS.TIMEOUT);
      }
      
      const status = error.response?.status;
      switch (status) {
        case 401:
          throw new ApiError(API_ERRORS.UNAUTHORIZED, status);
        case 403:
          throw new ApiError(API_ERRORS.FORBIDDEN, status);
        case 404:
          throw new ApiError(API_ERRORS.NOT_FOUND, status);
        default:
          throw new ApiError(
            error.response?.data?.message || API_ERRORS.DEFAULT,
            status
          );
      }
    }
    throw new ApiError(API_ERRORS.DEFAULT);
  }
}