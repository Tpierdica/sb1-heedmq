import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="w-8 h-8 text-white animate-spin" />
      <p className="mt-4 text-white">Loading veterinary clinics...</p>
    </div>
  );
}