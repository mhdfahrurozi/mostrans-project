import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      
      <div className="max-w-5xl w-full flex flex-col items-center space-y-4 sm:space-y-8"> 
        
        {/* 1. Logo RICK & MORTY */}
        <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-20 sm:h-24 md:h-32 lg:h-40">
          <Image
            src="/Title.png"
            alt="Rick and Morty Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
            sizes="(max-width: 768px) 90vw, 1500px" 
          />
        </div>

        {/* 2. Teks CHARACTER LOGISTICS HUB */}
         <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-8 sm:h-10 md:h-12 lg:h-16">
          <Image
            src="/SubTitle.png" 
            alt="Character Logistics Hub"
            fill
            style={{ objectFit: 'contain' }}
            priority
            sizes="(max-width: 640px) 100vw, 384px"
          />
        </div>

        {/* 3. Button Navigasi */}
        <div className="flex space-x-6 pt-6"> 
          <Link href="/characters">
            <button
              className="px-8 py-3 rounded-full font-extrabold text-xl transition-all duration-200 
                         bg-orange-500 text-white shadow-lg hover:bg-orange-600 active:bg-orange-700"
            >
              Character
            </button>
          </Link>
          
          <Link href="/locations">
            <button
              className="px-8 py-3 rounded-full font-extrabold text-xl transition-all duration-200 
                         bg-blue-400 text-white shadow-lg hover:bg-blue-500 active:bg-blue-600"
            >
              Locations
            </button>
          </Link>
        </div>
        
        {/* 4. Ilustrasi Karakter */}
        <div className="relative w-full max-w-md h-96 sm:h-[600px]">
          <Image
            src="/hero.png" 
            alt="Rick and Morty Illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
            sizes="(max-width: 640px) 100vw, 768px"
          />
        </div>
      </div>
    </main>
  );
}