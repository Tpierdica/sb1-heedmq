export interface User {
  username: string;
  password: string;
  registrationDate: number;
  expiryDate: number;
}

export interface UserSession {
  username: string;
  expiryDate: number;
}