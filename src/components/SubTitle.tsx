import Image from 'next/image'

export default function SubTitle() {
  return (
    // 2. Teks CHARACTER LOGISTICS HUB
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
  )
}