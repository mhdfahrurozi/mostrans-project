'use client';

import ButtonHome from '@/components/ButtonHome';
import PageHeader from '@/components/PageHeader';
import LocationList from '@/components/LocationList';

export default function CharacterByLocationPage() {

  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-50">
      
      <ButtonHome />
      
      <PageHeader
        title="Daftar Lokasi Tugas"
        subtitle="Lokasi ini dibuat secara dinamis dan disimpan di browser Anda."
      />

      <div className="max-w-4xl mx-auto">
        <LocationList />
      </div>
    </main>
  );
}