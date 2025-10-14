'use client'; 

import { useQuery } from '@apollo/client/react';
import { GET_CHARACTERS } from '@/graphql/query';
import { GetCharactersData } from '@/types/character';
import CharacterCard from '@/components/CharacterCard';
import { useState } from 'react';

export default function CharacterListPage() {
  const { loading, error, data } = useQuery<GetCharactersData>(GET_CHARACTERS);
  
  // State untuk pencarian
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-blue-600">Loading Karakter...</div>
    </div>
  );

  if (error) return (
    <div className="p-4 text-center text-red-600">
      Error saat mengambil data karakter: {error.message}
    </div>
  );

  const characters = data?.characters?.results || [];

  // Filter karakter berdasarkan search term
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-4 min-h-screen bg-gray-50">
      
      {/* Header Utama Mobile-First */}
      <header className="py-6 bg-white shadow-md mb-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            Rick & Morty Characters
          </h1>
          {/* Search Input Mobile-First */}
          <input
            type="text"
            placeholder="Cari karakter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
          />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {filteredCharacters.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-10">
            Karakter tidak ditemukan.
          </p>
        )}

        {/* Grid Responsive Mobile-First */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
      
    </main>
  );
}
