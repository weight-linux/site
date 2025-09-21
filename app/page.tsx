import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { Toolkit } from './components/Toolkit';
import { Community } from './components/Community';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
      <Hero />
      <Principles />
      <Toolkit />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
}