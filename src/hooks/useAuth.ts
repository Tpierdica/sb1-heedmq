import { useState, useEffect } from 'react';

interface User {
  username: string;
  password: string;
  registrationDate: number;
  expiryDate: number;
}

interface UserSession {
  username: string;
  expiryDate: number;
}

const STORAGE_KEY = 'petpals_user_session';
const USERS_KEY = 'petpals_users';
const SESSION_DURATION = 31 * 24 * 60 * 60 * 1000; // 31 days in milliseconds

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const session = localStorage.getItem(STORAGE_KEY);
    if (session) {
      const parsedSession: UserSession = JSON.parse(session);
      if (Date.now() < parsedSession.expiryDate) {
        setCurrentUser(parsedSession);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setCurrentUser(null);
      }
    }
  }, []);

  const register = (username: string, password: string, confirmPassword: string): boolean => {
    setError('');
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    
    if (users.some(user => user.username === username)) {
      setError('Username already exists');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (
      password.length < 6 ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setError('Password does not meet requirements');
      return false;
    }

    const now = Date.now();
    const newUser: User = {
      username,
      password,
      registrationDate: now,
      expiryDate: now + SESSION_DURATION
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  };

  const login = (username: string, password: string): boolean => {
    setError('');
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      setError('Invalid username or password');
      return false;
    }

    if (Date.now() > user.expiryDate) {
      setError('Your registration has expired. Please register again.');
      return false;
    }

    const session: UserSession = {
      username,
      expiryDate: user.expiryDate
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setCurrentUser(session);
    return true;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCurrentUser(null);
    setError('');
  };

  return {
    currentUser,
    error,
    register,
    login,
    logout
  };
}