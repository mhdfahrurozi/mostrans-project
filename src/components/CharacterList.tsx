import React from 'react'
import CharacterCard from '@/components/CharacterCard';
import { GetCharactersData } from '@/types/character';

type SimpleCharacter = GetCharactersData['characters']['results'][number];

interface CharacterListProps {
  filteredCharacters: SimpleCharacter[]; 
}

function CharacterList({ filteredCharacters }: CharacterListProps) {
  return (
    <>
        {filteredCharacters.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-10">
            Karakter tidak ditemukan.
            </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    </>
  )
}

export default CharacterList