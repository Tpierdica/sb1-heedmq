export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const API_ERRORS = {
  TIMEOUT: 'Request timed out. Please try again.',
  UNAUTHORIZED: 'Unauthorized. Please check your API key.',
  FORBIDDEN: 'Access forbidden. Please check your permissions.',
  NOT_FOUND: 'API endpoint not found.',
  DEFAULT: 'An unexpected error occurred while fetching clinic data'
};