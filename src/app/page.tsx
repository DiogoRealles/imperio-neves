import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Products from '@/components/Products';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  );
}
