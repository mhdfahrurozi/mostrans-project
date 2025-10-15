import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Character } from '@/types/character';

interface CharacterDetailViewProps {
  character: Character;
  children: ReactNode;
}

export default function CharacterDetailView({ character, children }: CharacterDetailViewProps) {
  
  return (
    // Kontainer Utama Detail
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
      
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={character.image}
          alt={character.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority 
        />
      </div>

        {children}

    </div>
  );
}

