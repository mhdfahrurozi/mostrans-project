'use client';

import React, { useState } from 'react';

interface LocationAssignmentFormProps {
  characterId: string;
  characterName: string;
  assignCharacterToLocation: (locationName: string, charId: string, charName: string) => void;
}

export default function LocationAssignmentForm({ 
  characterId, 
  characterName, 
  assignCharacterToLocation 
}: LocationAssignmentFormProps) {
  
  const [locationName, setLocationName] = useState('');
  const [message, setMessage] = useState('');

  const handleAssignLocation = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = locationName.trim();
    if (!name) {
      setMessage('Nama lokasi wajib diisi.');
      return;
    }
    
    // Panggil fungsi dari Context yang diterima melalui props
    assignCharacterToLocation(name, characterId, characterName);
    
    setMessage(`Karakter ${characterName} berhasil ditugaskan ke lokasi ${name}!`);
    setLocationName(''); // Reset input
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-4 border-b pb-2">
        Assign ke Lokasi Baru
      </h2>
      <form onSubmit={handleAssignLocation} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Lokasi Baru (contoh: Lab Bumi)"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Assign Karakter ke Lokasi
        </button>
        
        {/* Pesan Notifikasi */}
        {message && (
          <p className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium">
            {message}
          </p>
        )}
      </form>
    </>
  );
}