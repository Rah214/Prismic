'use client'
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Property = ({ slice }) => {
  const { primary } = slice;
  // console.log("primary", primary);
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F0EFFB]">
      <section className="max-w-[1440px] xl:px-[160px] md:py-[80px] py-[40px] px-[24px] font-sans m-auto">
        <div className="text-center">
          <h1 className="font-bold text-[40px] leading-[56px] text-[#000929]">
            {primary?.propertyheading}
          </h1>
          <p className="mt-[16px] text-[#000929] opacity-70">
            {primary?.propertytext}
          </p>
        </div>

        {/* Swiper for Mobile */}
        <div className="lg:hidden mt-[48px]">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
            }}
          >
            {primary?.cards?.map((item, index) => (
              <SwiperSlide key={index}>
                <PropertyCard item={item} primary={primary} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-[48px]">
          {primary?.cards?.map((item, index) => (
            <PropertyCard key={index} item={item} primary={primary} />
          ))}
        </div>
      </section>
    </div>
  );
};

const PropertyCard = ({ item, primary }) => {
  console.log('item', item)
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <Link href={item?.cardlink || "/"}>
        <div className="w-full bg-white rounded-2xl hover:shadow-xl cursor-pointer overflow-hidden">
          <PrismicNextImage field={item?.cardimage} className="w-full" />
          <div className="p-6 relative">
            <h2 className="text-xl font-extrabold text-[#7065F0]">
              {item?.cardprize}  
              <span className="text-[#000929] opacity-50 text-base">
                {" "}
                {item?.cardmonth}
              </span>
            </h2>
            <h3 className="text-lg font-bold mt-2 text-[#000929] truncate">
              {item?.cardheading}
            </h3>
            <p className="text-[#000929] mt-2 opacity-70 text-sm truncate">
              {item?.cardpara}
            </p>

            {/* Favorite Icon */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#E8E6F9] rounded-full flex items-center justify-center">
              <PrismicNextImage field={item?.cardheartimg} />
            </div>

            {/* Property Info - Hide text labels on small screens */}
            <div className="flex justify-between mt-4 text-gray-600 text-sm">
              {primary?.cardsvgtext?.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <PrismicNextImage field={item?.cardsmallimage} />
                  {item?.cardsmalltext}
                  <span className="hidden sm:block">
                    {item?.cardsmalltext2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Property;