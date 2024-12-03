import React from 'react';
import { Check, X } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const requirements = [
    {
      label: 'Minimum 6 characters',
      met: password.length >= 6
    },
    {
      label: 'At least 1 number',
      met: /[0-9]/.test(password)
    },
    {
      label: 'At least 1 special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }
  ];

  const strengthPercentage = (requirements.filter(req => req.met).length / requirements.length) * 100;

  return (
    <div className="space-y-3">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${
            strengthPercentage === 100 
              ? 'bg-green-500' 
              : strengthPercentage > 50 
                ? 'bg-yellow-500' 
                : 'bg-red-500'
          }`}
          style={{ width: `${strengthPercentage}%` }}
        />
      </div>

      <ul className="space-y-1">
        {requirements.map((requirement, index) => (
          <li 
            key={index}
            className={`flex items-center text-sm ${
              requirement.met ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            {requirement.met ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <X className="w-4 h-4 mr-2" />
            )}
            {requirement.label}
          </li>
        ))}
      </ul>
    </div>
  );
}