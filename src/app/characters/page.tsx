'use client'; 

import { useQuery } from '@apollo/client/react';
import { GET_CHARACTERS } from '@/graphql/query';
import { GetCharactersData } from '@/types/character';
import { useState } from 'react';
import ButtonHome from '@/components/ButtonHome';
import PageHeader from '@/components/PageHeader';
import InputSearch from '@/components/InputSearch'; 
import PageSection from '@/components/PageSection';
import CharacterList from '@/components/CharacterList';

export default function CharacterListPage() {
  const { loading, error, data } = useQuery<GetCharactersData>(GET_CHARACTERS);
  
  // State untuk pencarian
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
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
      <ButtonHome />
      
      <PageHeader title="Rick & Morty Characters" isSticky={true}>
        <InputSearch searchTerm={searchTerm} onSetSearchTerm={handleSearchChange}/>
      </PageHeader>

      <PageSection className="pt-4"> 
        <CharacterList filteredCharacters={filteredCharacters} />
      </PageSection>
      
    </main>
  );
}
