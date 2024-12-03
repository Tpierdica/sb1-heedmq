import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';

interface AuthModalProps {
  onComplete: () => void;
}

export function AuthModal({ onComplete }: AuthModalProps) {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegistrationSuccess = () => {
    // Switch to login view after successful registration
    setIsRegistering(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {isRegistering ? 'Create an Account' : 'Welcome Back'}
      </h2>

      {isRegistering ? (
        <RegistrationForm
          onSuccess={handleRegistrationSuccess}
          onSwitch={() => setIsRegistering(false)}
        />
      ) : (
        <LoginForm
          onSuccess={onComplete}
          onSwitch={() => setIsRegistering(true)}
        />
      )}
    </div>
  );
}