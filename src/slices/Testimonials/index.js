"use client";

import { PrismicNextImage } from "@prismicio/next";
// import { Navigation } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from "swiper/modules";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @type {import("react").FC<TestimonialsProps>}
 */
const Testimonials = ({ slice }) => {
  const { primary } = slice;
  console.log(primary);
  return (
    <section
      className="w-full md:pt-[64px] pt-[32px] md:pb-[100px] pb-[50px] font-sans px-[24px]"
      style={{ background: 'linear-gradient(to top, white, #F0EFFB)' }}
    >
      <div className="flex m-auto max-w-[1440px] flex-col md:gap-[64px] gap-[38px] justify-center items-center">
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <h1 className="text-[#000929] font-bold text-[40px] leading-[56px]">
            {primary?.testimonialheading}
          </h1>
          <p className="max-w-[406px] text-[#000929] leading-[25.6px] opacity-[70%]">
            {primary?.testimonialtext}
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
          {primary?.testimonialsdata?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <p className="text-[20px] leading-[32px] text-[#000929] text-center font-normal">
                  "{item?.quote}"
                </p>
                <p className="font-bold leading-6 text-center mt-8">
                  {item?.name}
                  <span className="font-normal leading-6 opacity-[50%]"> {item?.role}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center pt-[56px]">
        <PrismicNextImage field={primary?.testimonialimage} />
      </div>
    </section>
  );
};

export default Testimonials;
