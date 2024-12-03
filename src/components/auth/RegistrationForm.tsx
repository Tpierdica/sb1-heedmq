import React, { useState } from 'react';
import { User, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';
import { useAuth } from '../../hooks/useAuth';

interface RegistrationFormProps {
  onSuccess: () => void;
  onSwitch: () => void;
}

export function RegistrationForm({ onSuccess, onSwitch }: RegistrationFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const { register, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(username, password, confirmPassword)) {
      setRegistrationComplete(true);
      setTimeout(() => {
        setRegistrationComplete(false);
        onSuccess();
      }, 2000);
    }
  };

  const isPasswordValid = 
    password.length >= 6 && 
    /[0-9]/.test(password) && 
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const passwordsMatch = password === confirmPassword;

  if (registrationComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h3 className="text-xl font-semibold text-gray-900">Registration Successful!</h3>
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="username" className="text-sm font-medium text-gray-700">
          Username
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        <PasswordStrengthIndicator password={password} />
      </div>

      <div className="space-y-1">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              confirmPassword && !passwordsMatch ? 'border-red-500' : ''
            }`}
            required
          />
        </div>
        {confirmPassword && !passwordsMatch && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}
      </div>

      {error && (
        <div className="flex items-center text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-2" />
          {error}
        </div>
      )}

      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        <p className="font-medium mb-1">Important Notes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Registration is valid for 31 days only</li>
          <li>No confidential data is stored in the application</li>
          <li>Username must be unique</li>
        </ul>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={!isPasswordValid || !passwordsMatch}
          className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Register
        </button>
        
        <button
          type="button"
          onClick={onSwitch}
          className="w-full text-sm text-primary hover:text-primary-dark transition-colors"
        >
          Already have an account? Login
        </button>
      </div>
    </form>
  );
}