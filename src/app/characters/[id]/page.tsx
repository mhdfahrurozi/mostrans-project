'use client';

import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_CHARACTER_DETAIL } from '@/graphql/query';
import { Character } from '@/types/character';
import { useLocationContext } from '@/context/Location';
import ButtonHome from '@/components/ButtonHome';
import CharacterDetailView from '@/components/CharacterDetailView'; 
import CharacterDetails from '@/components/CharacterDetails';

// Tipe data untuk hasil query Detail
interface GetCharacterDetailData {
  character: Character;
}

export default function DetailCharacterPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id: characterId } = React.use(params);
  // Ambil semua yang dibutuhkan dari Context
  const { assignCharacterToLocation, locations } = useLocationContext();
  
  const { loading, error, data } = useQuery<GetCharacterDetailData>(
    GET_CHARACTER_DETAIL,
    {
      variables: { id: characterId },
    }
  );

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-blue-600">Memuat Detail Karakter...</div>
    </div>
  );
  if (error) return (
    <div className="p-4 text-center text-red-600">
      Error: Karakter dengan ID {characterId} tidak ditemukan.
    </div>
  );

  const character = data?.character;

  if (!character) return (
    <div className="p-4 text-center text-gray-600">
      Karakter tidak ditemukan.
    </div>
  );
  
  const currentLocation = locations.find(loc => 
    loc.characters.some(char => char.id === character.id)
  );
  
  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-50">
      
      <ButtonHome />

      <CharacterDetailView character={character}>
        <CharacterDetails
          character={character}
          currentLocation={currentLocation}
          assignCharacterToLocation={assignCharacterToLocation}
        />
      </CharacterDetailView>
      
    </main>
  );
}