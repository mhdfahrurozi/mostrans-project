import Image from "next/image"

function Hero() {
  return (
    // 4. Ilustrasi Karakter
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
  )
}

export default Hero