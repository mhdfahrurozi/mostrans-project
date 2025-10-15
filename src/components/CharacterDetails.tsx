import React from 'react';
import { Character } from '@/types/character';
import { LocationData } from '@/types/locations';
import LocationAssignmentForm from './LocationAssignmentForm'; 

interface CharacterDetailsProps {
  character: Character;
  currentLocation: LocationData | undefined;
  assignCharacterToLocation: (locationName: string, charId: string, charName: string) => void;
}

const DetailItem = ({ label, value }: { label: string, value: string }) => (
  <p className="text-gray-700">
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

export default function CharacterDetails({ 
  character, 
  currentLocation, 
  assignCharacterToLocation 
}: CharacterDetailsProps) {
  
  // Logic untuk menentukan warna status
  const statusColor = character.status === 'Alive' ? 'text-green-600' : 
                      character.status === 'Dead' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="md:w-2/3 p-6 sm:p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        {character.name}
      </h1>
      <p className="text-lg font-semibold mb-4">
        Status: <span className={statusColor}>{character.status}</span>
      </p>
    
      {/* Informasi Tambahan */}
      <div className="space-y-3 mb-6 border-t pt-4">
        <DetailItem label="Species" value={character.species} />
        <DetailItem label="Gender" value={character.gender} />
        <DetailItem label="Current API Location" value={character.location.name} />
      </div>
      
      {/* Status Lokasi Tugas Kandidat */}
      <div className="p-3 bg-indigo-100 border-l-4 border-indigo-500 rounded mb-6">
        <p className="font-semibold text-indigo-700">Lokasi Tugas:</p>
        <p className="text-lg text-indigo-900">
          {currentLocation ? (
            <span className="font-bold">{currentLocation.name}</span>
          ) : (
            <span className="italic text-gray-600">Belum ditugaskan ke lokasi mana pun.</span>
          )}
        </p>
      </div>

      {/* Form Assign Location */}
      <LocationAssignmentForm 
        characterId={character.id}
        characterName={character.name}
        assignCharacterToLocation={assignCharacterToLocation}
      />
    </div>
  );
}
