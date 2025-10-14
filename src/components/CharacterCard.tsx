'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@/types/character';

interface CharacterCardProps {
  character: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  // Logic untuk menentukan warna status
  const statusColor = character.status === 'Alive' ? 'bg-green-500' : 
                      character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500';

  return (
    // Menggunakan <Link> untuk navigasi ke halaman detail. Ini adalah fitur SPA dari Next.js.
    <Link href={`/characters/${character.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer border border-gray-100">
        
        {/* Kontainer Gambar. Mobile-first: aspect-square (1:1) agar kompak */}
        <div className="relative w-full h-48 sm:h-64">
          <Image
            src={character.image}
            alt={character.name}
            fill
            style={{ objectFit: 'cover' }}
            priority={false} // Atur menjadi false agar tidak semua gambar dimuat sekaligus
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Detail Kartu */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {character.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${statusColor}`}></span>
            {character.status} - {character.species}
          </p>
        </div>
      </div>
    </Link>
  );
}