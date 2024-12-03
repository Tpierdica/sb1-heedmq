import React, { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';

interface UserAuthProps {
  onComplete: () => void;
}

export function UserAuth({ onComplete }: UserAuthProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, login, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = isRegistering
      ? register(username, password)
      : login(username, password);

    if (success) {
      onComplete();
    }
  };

  const isPasswordValid = 
    password.length >= 6 && 
    /[0-9]/.test(password) && 
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
      <h3 className="text-xl font-bold text-primary mb-4">
        {isRegistering ? 'Register' : 'Login'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          
          {isRegistering && <PasswordStrengthIndicator password={password} />}
        </div>

        {error && (
          <div className="flex items-center text-red-500 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}

        <div className="text-sm text-primary/70">
          <p className="mb-2">Important Notes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Registration is valid for 31 days only</li>
            <li>No confidential data is stored in the application</li>
            {isRegistering && (
              <li>Username must be unique and password must meet security requirements</li>
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={isRegistering && !isPasswordValid}
            className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
          
          <button
            type="button"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setPassword('');
            }}
            className="text-primary hover:text-primary-dark transition-colors text-sm"
          >
            {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
          </button>
        </div>
      </form>
    </div>
  );
}