"use client";
import React from "react";
import Image from "next/image";
import Counter from "./Counter";
import SearchBar from "./additional_comp/Search_bar";
import Motion from "./additional_comp/Motion";
import SearchBox from "./additional_comp/Search_bar2";

const Hero = () => {
  const properties = [
    {
      id: 1,
      image: "/Image.png",
      price: "$2,700",
      name: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      beds: 4,
      baths: 2,
      area: "6x7.5 m²",
    },
    {
      id: 2,
      image: "/Image (1).png",
      price: "$1,600",
      name: "Tarpon Bay",
      location: "Palm Harbor, TX",
      beds: 4,
      baths: 2,
      area: "6x8 m²",
    },
  ];

  
  return (
    <div className="bg-[#F7F7FD] py-[72px] relative">
      {/* Background image for the right half */}
      <div
        className="md:absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

      <section className="max-w-[1440px] w-full m-auto px-5 lg:pl-[160px]  font-sans relative z-10">
        <div className="flex md:gap-[32px] justify-center text-center lg:text-left lg:justify-normal ">
          <div className="max-w-[544px]">
            <div className="flex gap-[40px] md:gap-[32px] flex-col">
              <p className="font-bold leading-[44px] min-w-[300px]  md:leading-[70.4px] md:text-[64px] text-[40px] text-[#000929]">
                Buy, rent, or sell your property easily
              </p>
              <p className="font-normal leading-[32px] min-w-[300px] text-[20px] text-[#000929]">
                A great platform to buy, sell, or even rent your properties
                without any commisions.
              </p>

              <Counter />
            </div>
          </div>
          <div className="">
            <div className=" lg:flex flex-col hidden max-w-[324px] max-h-[416px] rounded-2xl overflow-hidden shadow-lg bg-white">
              <Image
                src={properties[0].image}
                width={324}
                height={200}
                alt="Property"
                className="w-full rounded-t-2xl"
              ></Image>
              <div className="pl-[22px] pr-[24px] py-[24px] flex flex-col gap-[4px] max-w-[324px]">
                <h2 className="text-[24px] font-extrabold text-[#7065F0]">
                  {properties[0].price}{" "}
                  <span className="text-[#000929] text-[14px] font-normal opacity-[50%]">
                    /month
                  </span>
                </h2>
                <div className="flex flex-col gap-1max-w-[210px]">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {properties[0].name}
                  </h3>
                  <p className="text-gray-500 text-[16px] mt-1">
                    {properties[0].location}
                  </p>
                </div>
                <hr className="mt-4" />
                <div className="flex items-center max-w-[208px] justify-between mt-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon1.png"}
                      width={20}
                      height={20}
                      alt="bed"
                    ></Image>
                    <p className="text-[14px]">{properties[0].beds}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon2.png"}
                      width={20}
                      height={20}
                      alt="bathtub"
                    ></Image>
                    <p className="text-[14px]">{properties[0].baths}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon3.png"}
                      width={20}
                      height={20}
                      alt="square_foot"
                    ></Image>
                    <p className="text-[14px]">{properties[0].area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[58px]">
          <Motion />
          <SearchBox />
          <SearchBar />
        </div>

        <div className=" hidden xl:flex absolute p-[1.5px] top-[380px] left-[1100px] border-2 border-[#7065F0] rounded-2xl">
          {properties.slice(1).map((property) => (
            <div
              key={property.id}
              className="max-w-[310px] max-h-[280px] rounded-[8px] p-[1px] overflow-hidden shadow-lg bg-white"
            >
              <Image
                src={property.image}
                width={190}
                height={120}
                alt="Property"
                className="w-full rounded-t-2xl"
              ></Image>
              <div className="pl-[16px] pr-[24px] py-[24px] flex flex-col gap-[4px] max-w-[310px]">
                <h2 className="text-[16px] leading-6 font-extrabold text-[#7065F0]">
                  {property.price}{" "}
                  <span className="text-[#000929] text-[14px] leading-[19.6px] font-normal opacity-[50%]">
                    /month
                  </span>
                </h2>
                <div className="flex flex-col gap-1max-w-[210px]">
                  <h3 className="text-[16px] leading-6 font-bold text-[#000929]">
                    {property.name}
                  </h3>
                  <p className="text-[#000929] leading-[16.2px] text-[12px] mt-1">
                    {property.location}
                  </p>
                </div>
                <hr className="mt-4" />
                <div className="flex items-center max-w-[208px] justify-between mt-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon1.png"}
                      width={16}
                      height={16}
                      alt="bed"
                    ></Image>
                    <p className="text-[12px] leading-[16.2px]">
                      {property.beds}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon2.png"}
                      width={16}
                      height={16}
                      alt="bathtub"
                    ></Image>
                    <p className="text-[12px] leading-[16.2px]">
                      {property.baths}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src={"/icon3.png"}
                      width={16}
                      height={16}
                      alt="square_foot"
                    ></Image>
                    <p className="text-[12px] leading-[16.2px]">
                      {property.area}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
