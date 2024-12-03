import axios from 'axios';
import type { ApiResponse } from '../types/api';

const API_URL = 'https://api.gsb.government.ae/gateway/getVeterinaryEstablishments_MOCCAE/1.0/establishments/EstablishmentMainTypes';

const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY' // Add your API key here
  },
  timeout: 10000 // 10 second timeout
});

export async function fetchClinics(): Promise<ApiResponse> {
  try {
    const response = await api.get<ApiResponse>(API_URL);
    
    if (!response.data) {
      throw new Error('No data received from the API');
    }

    // Ensure we're returning a valid response structure
    return {
      data: Array.isArray(response.data.data) ? response.data.data : [],
      status: response.status,
      message: response.data.message || 'Success'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please try again.');
      }
      if (error.response?.status === 401) {
        throw new Error('Unauthorized. Please check your API key.');
      }
      if (error.response?.status === 403) {
        throw new Error('Access forbidden. Please check your permissions.');
      }
      if (error.response?.status === 404) {
        throw new Error('API endpoint not found.');
      }
      throw new Error(error.response?.data?.message || 'Failed to fetch clinic data');
    }
    throw new Error('An unexpected error occurred while fetching clinic data');
  }
}