import React from 'react';
import { Trash2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function AdminControls() {
  const { clearAllRegistrations } = useAuth();

  const handleClearRegistrations = () => {
    if (window.confirm('Are you sure you want to clear all registrations? This action cannot be undone.')) {
      clearAllRegistrations();
    }
  };

  return (
    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-red-700 font-medium">Admin Controls</h3>
        <button
          onClick={handleClearRegistrations}
          className="flex items-center px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-100 rounded-md transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All Registrations
        </button>
      </div>
    </div>
  );
}