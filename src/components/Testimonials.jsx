"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

const testimonialsData = [
  {
    quote:
      "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
    name: "Mira Culos",
    role: "Renter",
  },
  {
    quote:
      "I found my dream apartment using Estatery! The process was seamless and I love the user-friendly interface.",
    name: "John Doe",
    role: "Tenant",
  },
  {
    quote:
      "As a property manager, Estatery has made my job so much easier. Highly recommended!",
    name: "Jane Smith",
    role: "Property Manager",
  }
];

const Testimonials = () => {
  return (
    <section
      className="w-full md:pt-[64px] pt-[32px] md:pb-[100px] pb-[50px] font-sans px-[24px]"
      style={{ background: 'linear-gradient(to top, white, #F0EFFB)' }}
    >
      <div className="flex m-auto max-w-[1440px] flex-col md:gap-[64px] gap-[38px] justify-center items-center">
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <h1 className="text-[#000929] font-bold text-[40px] leading-[56px]">
            Testimonials
          </h1>
          <p className="max-w-[406px] text-[#000929] leading-[25.6px] opacity-[70%]">
            See what our property managers, landlords, and tenants have to say
          </p>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="w-full max-w-[736px]"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <p className="text-[20px] leading-[32px] text-[#000929] text-center font-normal">
                  “{testimonial.quote}”
                </p>
                <p className="font-bold leading-6 text-center mt-8">
                  {testimonial.name},
                  <span className="font-normal leading-6 opacity-[50%]"> {testimonial.role}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center pt-[56px]">
        <Image src={'/Frame.png'} height={72} width={256} alt="Frame" />
      </div>
    </section>
  );
};

export default Testimonials;

