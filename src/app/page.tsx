import Hero from '@/components/Hero';
import About from '@/components/About';
import Trajes from '@/components/Trajes';
// import Swiper from '@/components/Swiper';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Trajes />
      <Testimonials />
      {/* <Swiper /> */}
      <Contact />
    </main>
  );
}
