'use client';

import { useLocationContext } from '@/context/Location';
import Link from 'next/link';
import { useState } from 'react';

export default function CharacterByLocationPage() {
  const { locations } = useLocationContext();
  
  // State untuk mengontrol lokasi mana yang sedang dikembangkan (Accordion)
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  // Toggle state expanded location
  const toggleLocation = (locationName: string) => {
    setExpandedLocation(prev => prev === locationName ? null : locationName);
  };

  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-50">
      
      {/* Tombol Back Mobile-First */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 font-medium">
          &larr; Kembali ke Home
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Daftar Lokasi Tugas
        </h1>
        <p className="text-gray-600 text-center">
          Lokasi ini dibuat secara dinamis dan disimpan di browser Anda.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        {/* Tampilan Kosong Awal */}
        {locations.length === 0 ? (
          <div className="p-10 bg-white rounded-xl shadow-lg text-center">
            <p className="text-xl text-gray-500">
              Belum ada lokasi yang ditugaskan.
            </p>
            <p className="text-gray-400 mt-2">
              Silakan assign karakter ke lokasi baru dari halaman detail karakter.
            </p>
          </div>
        ) : (
          /* List Lokasi (Accordion Style Mobile-First) */
          <div className="space-y-4">
            {locations.map((location) => (
              <div 
                key={location.name} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                {/* Header Lokasi (Clickable) */}
                <button
                  onClick={() => toggleLocation(location.name)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center transition-colors hover:bg-gray-50"
                >
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {location.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Total: {location.characters.length} Karakter
                    </p>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${expandedLocation === location.name ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Konten Karakter (Collapsed/Expanded) */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${expandedLocation === location.name ? 'max-h-96 opacity-100 p-4 sm:p-5 border-t' : 'max-h-0 opacity-0'}`}
                  style={{ padding: expandedLocation === location.name ? undefined : 0, borderTopWidth: expandedLocation === location.name ? '1px' : '0' }}
                >
                  <ul className="space-y-2">
                    {location.characters.map((char) => (
                      <li key={char.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-700">{char.name}</span>
                        {/* Link ke Detail Karakter */}
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
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}