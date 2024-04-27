'use client';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Index = () => {
  const swiperRef = useRef() as any;

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-0 w-full relative">
        <button
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center absolute left-10 z-10 top-1/2 hover:bg-black transition-all ease-linear border text-black border-white/5 hover:text-white"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <FaChevronLeft className="" size={24} />
        </button>

        <Swiper
          className="!px-3"
          slidesPerView={1.2}
          spaceBetween={24}
          speed={800}
          loop={true}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
            460: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
            1250: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-01.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-02.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-03.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-06.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-07.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-10.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full max-w-[900px] max-h-[463px] bg-cover object-cover overflow-hidden rounded-[16px]">
            <Image
              className="w-full h-full"
              src="/assets/img/gallery-11.webp"
              alt=""
              width={900}
              height={600}
              quality={90}
            />
          </SwiperSlide>
        </Swiper>

        <button
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center absolute right-10 z-10 top-1/2 hover:bg-black transition-all ease-linear border text-black border-white/5 hover:text-white"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <FaChevronRight className="" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Index;
