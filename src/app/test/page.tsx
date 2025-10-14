import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      
      <div className="max-w-xl w-full flex flex-col items-center space-y-4 sm:space-y-6">
        
        {/* 1. Logo RICK & MORTY */}
        <div className="relative w-full max-w-sm h-16 sm:h-20">
          <Image
            src="/Title.png" 
            alt="Rick and Morty Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* 2. Teks CHARACTER LOGISTICS HUB */}
        <div className="relative w-full max-w-xs h-6 sm:h-8">
          <Image
            src="/SubTitle.png" 
            alt="Character Logistics Hub"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* 3. Button Navigasi */}
        <div className="flex space-x-4 pt-4">
          <Link href="/">
            <button
              className="px-6 py-2 rounded-full font-bold text-lg transition-all duration-200 
                         bg-orange-500 text-black shadow-lg hover:bg-orange-600 active:bg-orange-700"
            >
              Character
            </button>
          </Link>
          
          <Link href="/locations">
            <button
              className="px-6 py-2 rounded-full font-bold text-lg transition-all duration-200 
                         bg-blue-300 text-black shadow-lg hover:bg-blue-400 active:bg-blue-500"
            >
              Locations
            </button>
          </Link>
        </div>
        
        {/* 4. Ilustrasi Karakter */}
        <div className="relative w-full max-w-md h-96 sm:h-[400px]">
          <Image
            src="/hero.png" 
            alt="Rick and Morty Illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </main>
  );
}