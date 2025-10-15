import Image from 'next/image';

export default function LogoTitle() {
  return (
    //  1. Title RICK & MORTY 
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
  )
}
