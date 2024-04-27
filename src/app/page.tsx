import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Trajes from '@/components/Trajes';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Trajes />
      <Testimonials />
      <Contact />
    </main>
  );
}
