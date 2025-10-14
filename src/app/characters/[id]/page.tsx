'use client';

import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_CHARACTER_DETAIL } from '@/graphql/query';
import { Character } from '@/types/character';
import Image from 'next/image';
import Link from 'next/link';
import { useLocationContext } from '@/context/Location';
import { useState } from 'react';
// import { LocationData } from '@/types/locations';

// Tipe data untuk hasil query Detail
interface GetCharacterDetailData {
  character: Character;
}

export default function DetailCharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: characterId } = React.use(params);
  const { assignCharacterToLocation, locations } = useLocationContext();
  
  const { loading, error, data } = useQuery<GetCharacterDetailData>(
    GET_CHARACTER_DETAIL,
    {
      variables: { id: characterId },
    }
  );

  const [locationName, setLocationName] = useState('');
  const [message, setMessage] = useState('');

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
  
  // Fungsi untuk menangani penugasan lokasi
  const handleAssignLocation = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = locationName.trim();
    if (!name) {
      setMessage('Nama lokasi wajib diisi.');
      return;
    }
    
    // Panggil fungsi dari Context
    assignCharacterToLocation(name, character.id, character.name);
    
    setMessage(`Karakter ${character.name} berhasil ditugaskan ke lokasi ${name}!`);
    setLocationName(''); // Reset input
  };
  
  // Logic untuk mencari lokasi karakter saat ini
  const currentLocation = locations.find(loc => 
    loc.characters.some(char => char.id === character.id)
  );
  
  // Logic untuk menentukan warna status
  const statusColor = character.status === 'Alive' ? 'text-green-600' : 
                      character.status === 'Dead' ? 'text-red-600' : 'text-gray-600';

  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-50">
      
      {/* Tombol Back Mobile-First */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 font-medium">
        &larr; Kembali ke Daftar
      </Link>

      {/* Kontainer Utama Detail */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
        
        {/* Kolom Kiri: Gambar */}
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            src={character.image}
            alt={character.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Kolom Kanan: Detail & Form */}
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
            {/* <DetailItem label="Origin Location" value={character.origin.name} /> */}
            <DetailItem label="Current API Location" value={character.location.name} />
          </div>
          
          {/* Status Lokasi Tugas Kandidat */}
          <div className="p-3 bg-indigo-100 border-l-4 border-indigo-500 rounded mb-6">
            <p className="font-semibold text-indigo-700">Lokasi Tugas (Kandidat):</p>
            <p className="text-lg text-indigo-900">
              {currentLocation ? (
                <span className="font-bold">{currentLocation.name}</span>
              ) : (
                <span className="italic text-gray-600">Belum ditugaskan ke lokasi mana pun.</span>
              )}
            </p>
          </div>

          {/* Form Assign Location */}
          <h2 className="text-2xl font-bold mt-8 mb-4 border-b pb-2">
            Assign ke Lokasi Baru
          </h2>
          <form onSubmit={handleAssignLocation} className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lokasi Baru (contoh: Lab Bumi)"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Assign Karakter ke Lokasi
            </button>
            
            {/* Pesan Notifikasi */}
            {message && (
              <p className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium">
                {message}
              </p>
            )}
          </form>
          
        </div>
      </div>
    </main>
  );
}

// Komponen Pembantu untuk Detail Item
const DetailItem = ({ label, value }: { label: string, value: string }) => (
  <p className="text-gray-700">
    <span className="font-semibold">{label}:</span> {value}
  </p>
);