"use client";

/**
 * @typedef {import("@prismicio/client").Content.LandlordsSlice} LandlordsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandlordsSlice>} LandlordsProps
 * @type {import("react").FC<LandlordsProps>}
*/
import { useState } from "react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

const Landlords = ({ slice }) => {
  const [activeTab, setActiveTab] = useState("tenants");
  const { primary } = slice;

  return (
    <section className='max-w-[1440px] md:gap-[132px] w-full font-sans flex flex-col md:flex-row items-center justify-center md:justify-between bg-white mx-auto py-[70px] xl:py-[100px] px-[30px] xl:px-[160px]'>

      {/* Image Container */}
      <div className="relative flex justify-center mb-7 md:mb-0 items-center w-full max-w-[544px]">
        <PrismicNextImage field={slice?.primary?.landlordimage} />

        {/* Floating Card */}
        <div className="absolute inset-x-0 bottom-[-30px] mx-6 flex items-center justify-center">
          <div className="flex items-center w-full max-w-[411px] bg-white shadow-md rounded-[8px] border border-gray-200 p-2 md:p-4 relative">
            <div className="absolute -top-4 right-6 flex items-center justify-center w-12 h-12">
              <PrismicNextImage field={slice?.primary?.smallimage} />
            </div>

            <div className="pl-6 pr-12">
              <h2 className="text-[16px] md:text-[20px] font-bold text-[#100A55]">{primary?.landlordheading}</h2>
              <p className="text-[12px] md:text-[14px] text-[#4D5461]">{primary?.landlordpara}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className='w-full max-w-[444px] lg:min-h-[400px] md:min-h-[200px] mt-[80px] md:mt-0 flex flex-col lg:gap-8 gap-6 items-center md:items-start'>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center w-full max-w-[327px]">
          <div className="flex items-center justify-center border-[2px] bg-[#EFEFFB] border-[#DEDEF7] px-2 py-2 shadow-md">
            <button
              onClick={() => setActiveTab("tenants")}
              className={`px-6 py-2 text-[16px] font-bold leading-6 focus:outline-none transition ${activeTab === "tenants"
                  ? "bg-white text-[#7065F0] shadow"
                  : "bg-transparent text-[#6C727F]"
                }`}
            >
              For tenants
            </button>
            <button
              onClick={() => setActiveTab("landlords")}
              className={`px-6 py-2 text-[16px] font-bold focus:outline-none transition ${activeTab === "landlords"
                  ? "bg-white text-[#7065F0] shadow"
                  : "bg-transparent text-[#6C727F]"
                }`}
            >
              For landlords
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className='w-full'>
          <h1 className='font-bold max-w-[100%] lg:text-[36px] text-[26px] text-center md:text-left xl:leading-[56px] text-[#000929]'>
            {primary?.btnheading}
          </h1>
        </div>

        {/* Description */}
        <div className='w-full'>
          {activeTab === "tenants" ? (
            <p className='text-[#6C727F] text-center md:text-left lg:leading-[25.6px] font-normal'>
              {primary?.btnpara}
            </p>
          ) : (
            <p className='text-[#6C727F] text-center md:text-left lg:leading-[25.6px] font-normal'>
              <span className='text-black font-bold'>Welcome to Landlords</span>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero suscipit consequatur.
            </p>
          )}
        </div>

        {/* Button */}
        <div className='text-center md:text-left w-full'>
          {activeTab === "tenants" ? (
            <button className="bg-[#7065F0] w-full md:w-auto text-white text-[14px] lg:text-[16px] font-bold px-6 py-3 lg:px-[38px] lg:py-[12px] rounded-md hover:bg-purple-600 transition">
              {primary?.btnlabel}
            </button>
          ) : (
            <button className="bg-[#7065F0] w-full md:w-auto text-white text-[14px] lg:text-[16px] font-bold px-6 py-3 lg:px-[38px] lg:py-[12px] rounded-md hover:bg-purple-600 transition">
              Learn more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Landlords;
