import React from 'react';
import { LocationData } from '@/types/locations'; // Asumsi tipe Location
 
interface ContentLocationHeaderProps {
  location: LocationData;
  isExpanded: boolean;
  onToggle: (name: string) => void;
}

export default function ContentLocationHeader({ location, isExpanded, onToggle }: ContentLocationHeaderProps) {
  return (
    <button
      onClick={() => onToggle(location.name)}
      className="w-full text-left p-4 sm:p-5 flex justify-between items-center transition-colors hover:bg-gray-50"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          {location.name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Total: {location.characters.length} Karakter
        </p>
      </div>
      <svg 
        className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  );
}