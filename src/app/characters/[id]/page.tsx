export default function DetailCharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const characterId = params.id;

  return (
    <main className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Detail Karakter ID: {characterId} (TODO)
      </h1>
      <p className="text-center">
        Implementasi detail karakter dan fitur assign lokasi akan dilakukan di
        sini.
      </p>
    </main>
  );
}