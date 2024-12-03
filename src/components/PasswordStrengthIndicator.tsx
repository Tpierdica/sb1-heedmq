import React from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const result = zxcvbn(password);
  const score = result.score; // 0-4

  const getStrengthColor = () => {
    switch (score) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-lime-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const getStrengthText = () => {
    switch (score) {
      case 0: return 'Very Weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const hasRequiredCharacters = 
    password.length >= 6 && 
    /[0-9]/.test(password) && 
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="space-y-2">
      <div className="flex gap-1 h-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-colors ${i <= score ? getStrengthColor() : 'bg-gray-200'}`}
          />
        ))}
      </div>
      
      <div className="text-xs space-y-1">
        <div className="flex justify-between text-primary/70">
          <span>Password Strength:</span>
          <span className={score >= 3 ? 'text-green-600' : 'text-primary/70'}>
            {getStrengthText()}
          </span>
        </div>

        <ul className="space-y-1 text-primary/70">
          <li className={`flex items-center gap-1 ${password.length >= 6 ? 'text-green-600' : ''}`}>
            • Minimum 6 characters
          </li>
          <li className={`flex items-center gap-1 ${/[0-9]/.test(password) ? 'text-green-600' : ''}`}>
            • At least 1 number
          </li>
          <li className={`flex items-center gap-1 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : ''}`}>
            • At least 1 special character
          </li>
        </ul>

        {!hasRequiredCharacters && password && (
          <p className="text-red-500">
            Password does not meet minimum requirements
          </p>
        )}
      </div>
    </div>
  );
}