import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  return (
    <header className="py-10 md:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="flex items-center justify-center flex-wrap w-full md:max-w-[1200px] uppercase text-[40px] md:text-[100px] gap-5 md:gap-x-10 font-title font-thin text-center leading-tight"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            Império Neves
            <Image
              className="w-[200px] h-[80px] rounded-full bg-cover object-cover align-middle"
              src="/assets/img/product02.jpg"
              alt="Image 02"
              width={100}
              height={64}
              quality={90}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
            />{' '}
            <Image
              className="w-[200px] h-[80px] rounded-full bg-cover object-cover align-middle"
              src="/assets/img/product01.jpg"
              alt="Image 01"
              width={100}
              height={64}
              quality={90}
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            />{' '}
            trajes a rigor
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Index;
