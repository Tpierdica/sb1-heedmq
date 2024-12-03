import axios from 'axios';

export const API_BASE_URL = 'https://api.gsb.government.ae/gateway';
export const API_VERSION = '1.0';
export const API_ENDPOINT = `${API_BASE_URL}/getVeterinaryEstablishments_MOCCAE/${API_VERSION}/establishments/EstablishmentMainTypes`;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});