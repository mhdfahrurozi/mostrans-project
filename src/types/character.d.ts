
export interface Character {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  image: string;
  // Detail lainnya (untuk halaman Detail)
  episode: { name: string }[];
  location: { name: string };
  origin: { name: string };
}

// Tipe data yang dikembalikan oleh API untuk list
export interface GetCharactersData {
  characters: {
    results: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>[];
  };
}