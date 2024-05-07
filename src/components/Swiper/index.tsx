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
    <section
      className="py-10 md:pt-20"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <div className="flex gap-5 item-center justify-end mb-[16px]">
        <button
          className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-all ease-linear border text-white border-black/95 hover:text-white/80"
          title="Next"
          aria-label="Next"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <FaChevronLeft className="" size={18} />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-all ease-linear border text-white border-black/95 hover:text-white/80"
          title="Prev"
          aria-label="Prev"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <FaChevronRight className="" size={18} />
        </button>
      </div>

      <Swiper
        className="!px-3"
        slidesPerView={1}
        spaceBetween={24}
        speed={800}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          1250: {
            slidesPerView: 1.7,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-01.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-02.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-03.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-04.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-05.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full max-h-[420px] overflow-hidden rounded-[16px]">
          <Image
            className="w-full h-full bg-cover object-cover align-middle"
            src="/assets/img/gallery-06.jpg"
            alt=""
            width={640}
            height={420}
            quality={90}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Index;
