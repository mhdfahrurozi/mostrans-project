import ButtonNavigasi from '@/components/ButtonNavigasi';
import Hero from '@/components/Hero';
import LogoTitle from '@/components/LogoTitle';
import SubTitle from '@/components/SubTitle';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      
      <div className="max-w-5xl w-full flex flex-col items-center space-y-4 sm:space-y-8"> 
        
        <LogoTitle />
        <SubTitle />
        <ButtonNavigasi />
        <Hero />
        
      </div>
    </main>
  );
}