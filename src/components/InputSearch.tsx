import React, { ChangeEvent } from 'react'

interface InputSearchProps {
  searchTerm: string;
  onSetSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSearch({searchTerm, onSetSearchTerm}: InputSearchProps) {
  return (
    <input
          type="text"
          placeholder="Cari karakter..."
          value={searchTerm}
          onChange={onSetSearchTerm}
          className="w-full mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
        />
  )
}
