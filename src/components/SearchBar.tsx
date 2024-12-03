import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#343a40] w-5 h-5" />
      <input
        type="text"
        placeholder="Search clinics by name, services, or location..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#343a40]/20 bg-[#343a40]/5 backdrop-blur-sm text-[#343a40] placeholder:text-[#343a40]/50 focus:outline-none focus:ring-2 focus:ring-[#343a40]/30 focus:border-transparent transition-all"
      />
    </div>
  );
}