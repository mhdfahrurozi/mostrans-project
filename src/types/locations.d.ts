export interface CharacterAssignment {
  id: string; // ID Karakter dari API
  name: string; // Nama Karakter
}

export interface LocationData {
  name: string; // Nama Lokasi
  characters: CharacterAssignment[];
}

// Tipe untuk Context State
export interface LocationContextType {
  locations: LocationData[];
  assignCharacterToLocation: (
    locationName: string,
    characterId: string,
    characterName: string
  ) => void;
}