import React from 'react';
import { LocationData } from '@/types/locations'; 
import ContentLocationHeader from './ContentLocationHeader';
import ContentLocationItem from './ContentLocationItem';

interface ContentLocationProps {
  location: LocationData;
  isExpanded: boolean;
  onToggle: (name: string) => void;
}

export default function ContentLocation({ location, isExpanded, onToggle }: ContentLocationProps) {
 return (
    <div 
      key={location.name} 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
    >
      <ContentLocationHeader
        location={location}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      
      <ContentLocationItem
        characters={location.characters}
        isExpanded={isExpanded}
      />
    </div>
  );
}

