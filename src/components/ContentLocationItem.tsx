import React from 'react';
import Link from 'next/link';
import { CharacterAssignment } from '@/types/locations'; // Asumsi tipe AssignedCharacter

interface ContentLocationItemProps {
  characters: CharacterAssignment[];
  isExpanded: boolean;
}

export default function ContentLocationItem({ characters, isExpanded }: ContentLocationItemProps) {
  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 p-4 sm:p-5 border-t' : 'max-h-0 opacity-0'}`}
      style={{ 
        padding: isExpanded ? undefined : 0, 
        borderTopWidth: isExpanded ? '1px' : '0',
        borderColor: isExpanded ? 'rgb(229 231 235)' : 'transparent' 
      }}
    >
      <ul className="space-y-2">
        {characters.map((char) => (
          <li key={char.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">{char.name}</span>
            <Link 
              href={`/characters/${char.id}`}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Lihat Detail &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}