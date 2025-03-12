"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const properties = [
  {
    id: 1,
    price: "$2,095",
    perMonth: "/month",
    title: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    imgSrc: "/card.png",
    beds: "3 Beds",
    baths: "2 Baths",
    size: "5x7 m²",
  },
  {
    id: 2,
    price: "$2,700",
    perMonth: "/month",
    title: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    imgSrc: "/card2.png",
    beds: "4 Beds",
    baths: "2 Baths",
    size: "6x7.5 m²",
  },
  {
    id: 3,
    price: "$4,550",
    perMonth: "/month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    imgSrc: "/card3.png",
    beds: "4 Beds",
    baths: "3 Baths",
    size: "8x10 m²",
  },
  {
    id: 4,
    price: "$2,400",
    perMonth: "/month",
    title: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    imgSrc: "/card4.png",
    beds: "4 Beds",
    baths: "2 Baths",
    size: "6x8 m²",
  },
  {
    id: 5,
    price: "$1,500",
    perMonth: "/month",
    title: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    imgSrc: "/card5.png",
    beds: "2 Beds",
    baths: "1 Baths",
    size: "5x7.5 m²",
  },
  {
    id: 6,
    price: "$1,600",
    perMonth: "/month",
    title: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    imgSrc: "/card6.png",
    beds: "3 Beds",
    baths: "1 Baths",
    size: "5x7 m²",
  },
];

const Property = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F0EFFB]">
      <section className="max-w-[1440px] xl:px-[160px]  md:py-[80px] py-[40px] px-[24px] font-sans m-auto">
        <div className="text-center">
          <h1 className="font-bold text-[40px] leading-[56px] text-[#000929]">
            Based on your location
          </h1>
          <p className="mt-[16px] text-[#000929] opacity-70">
            Some of our picked properties near your location.
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
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-[48px]">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

const PropertyCard = ({ property }) => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <Link href={`/property/${property.id}`}>
        <div className="w-full bg-white rounded-2xl hover:shadow-xl cursor-pointer overflow-hidden">
          <img
            className="w-full h-56 object-cover"
            src={property.imgSrc}
            alt={property.title}
          />
          <div className="p-6 relative">
            <h2 className="text-xl font-extrabold text-[#7065F0]">
              {property.price}
              <span className="text-[#000929] opacity-50 text-base">
                {" "}
                {property.perMonth}
              </span>
            </h2>
            <h3 className="text-lg font-bold mt-2 text-[#000929] truncate">
              {property.title}
            </h3>
            <p className="text-[#000929] mt-2 opacity-70 text-sm truncate">
              {property.address}
            </p>

            {/* Favorite Icon */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#E8E6F9] rounded-full flex items-center justify-center">
              <Image src="/heart.png" width={24} height={24} alt="Heart" />
            </div>

            {/* Property Info - Hide text labels on small screens */}
            <div className="flex justify-between mt-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Image src="/icon1.png" width={18} height={18} alt="Bed" />
                <span>{property.beds.split(" ")[0]}</span>
                <span className="hidden sm:inline">
                  {property.beds.split(" ")[1]}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/icon2.png" width={18} height={18} alt="Bath" />
                <span>{property.baths.split(" ")[0]}</span>
                <span className="hidden sm:inline">
                  {property.baths.split(" ")[1]}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/icon3.png" width={18} height={18} alt="Size" />
                <span>{property.size}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Property;

// Set best hover effect on the card
