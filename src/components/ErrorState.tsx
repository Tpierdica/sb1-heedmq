import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  error: Error;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
      <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,0.9) 0%, rgba(9,87,121,0.9) 80%, rgba(0,212,255,0.9) 100%)' }} className="rounded-lg p-8 max-w-md w-full text-center border border-white/20">
        <AlertCircle className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-white mb-2">Error Loading Clinics</h2>
        <p className="text-white/80 mb-6">{error.message}</p>
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-white text-background rounded-lg hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
}