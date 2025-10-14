'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LocationData, LocationContextType, CharacterAssignment } from '@/types/locations';

const LOCAL_STORAGE_KEY = 'mostrans_locations';

// Inisialisasi Context
const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Custom Hook untuk menggunakan Context
export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};

// Provider Component
export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [locations, setLocations] = useState<LocationData[]>([]);

  // Effect 1: Muat data dari Local Storage saat aplikasi pertama kali dimuat
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedLocations) {
        setLocations(JSON.parse(storedLocations));
      }
    }
  }, []);

  // Effect 2: Simpan data ke Local Storage setiap kali 'locations' berubah
  useEffect(() => {
    if (typeof window !== 'undefined' && locations.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
    } else if (typeof window !== 'undefined' && locations.length === 0 && localStorage.getItem(LOCAL_STORAGE_KEY)) {
      // Ini penting agar menghapus key jika array locations kosong
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [locations]);

  // Fungsi Inti: Menugaskan karakter ke lokasi
  const assignCharacterToLocation = (
    locationName: string,
    characterId: string,
    characterName: string
  ) => {
    // Normalisasi nama lokasi
    const normalizedName = locationName.trim();

    setLocations((prevLocations) => {
      let newLocations = [...prevLocations];

      // 1. Hapus karakter ini dari lokasi lama (Satu karakter hanya boleh di satu lokasi)
      newLocations = newLocations.map(location => ({
        ...location,
        characters: location.characters.filter(char => char.id !== characterId)
      })).filter(location => location.characters.length > 0); // Hapus lokasi yang jadi kosong

      // 2. Cari lokasi baru (atau yang sudah ada)
      const locationIndex = newLocations.findIndex(
        (loc) => loc.name.toLowerCase() === normalizedName.toLowerCase()
      );

      const characterAssignment: CharacterAssignment = {
        id: characterId,
        name: characterName,
      };

      if (locationIndex !== -1) {
        // Lokasi sudah ada: Tambahkan karakter ke daftar (sudah dijamin tidak ada duplikat ID)
        newLocations[locationIndex].characters.push(characterAssignment);
      } else {
        // Lokasi baru: Buat lokasi baru
        newLocations.push({
          name: normalizedName,
          characters: [characterAssignment],
        });
      }

      // 3. Return lokasi yang diperbarui
      return newLocations;
    });
  };

  return (
    <LocationContext.Provider value={{ locations, assignCharacterToLocation }}>
      {children}
    </LocationContext.Provider>
  );
}