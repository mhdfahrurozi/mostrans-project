'use client';

import React, { useState } from 'react';
import ContentLocation from './ContentLocation';
import { useLocationContext } from '@/context/Location'; // Mengambil dari context

export default function LocationList() {
  const { locations } = useLocationContext();
  
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const toggleLocation = (locationName: string) => {
    setExpandedLocation(prev => prev === locationName ? null : locationName);
  };
  
  if (locations.length === 0) {
    return (
      <div className="p-10 bg-white rounded-xl shadow-lg text-center">
        <p className="text-xl text-gray-500">
          Belum ada lokasi yang ditugaskan.
        </p>
        <p className="text-gray-400 mt-2">
          Silakan assign karakter ke lokasi baru dari halaman detail karakter.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <ContentLocation
          key={location.name}
          location={location}
          isExpanded={expandedLocation === location.name}
          onToggle={toggleLocation}
        />
      ))}
    </div>
  );
}