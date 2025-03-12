"use client";

import Motion from "@/components/additional_comp/Motion";
import SearchBar from "@/components/additional_comp/Search_bar";
import SearchBox from "@/components/additional_comp/Search_bar2";
import Counter from "@/components/Counter";
import { PrismicNextImage } from "@prismicio/next";
// import Image from "next/image";  

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @type {import("react").FC<HeroProps>}
 */
const Hero = ({ slice }) => {
  const { primary } = slice;
  // const {data} =slice?.primary?.card?.

  console.log('sdf', slice?.primary?.card)

  const arr = ['a', {
    a: 1,
    b: 2
  }, 4, 456, 6, 6]
  arr[1]?.b
  return (
    <div className="bg-[#F7F7FD] py-[72px] relative">
      {/* Background image for the right half */}
      <div
        className="md:absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${primary?.banner_Image?.url})` }}
      ></div>

      <section className="max-w-[1440px] w-full m-auto px-5 lg:pl-[160px] font-sans relative z-10">
        <div className="flex md:gap-[32px] justify-center text-center lg:text-left lg:justify-normal">
          <div className="max-w-[544px]">
            <div className="flex gap-[40px] md:gap-[32px] flex-col">
              <p className="font-bold leading-[44px] min-w-[300px] md:leading-[70.4px] md:text-[64px] text-[40px] text-[#000929]">
                {primary?.heading}
              </p>
              <p className="font-normal leading-[32px] min-w-[300px] text-[20px] text-[#000929]">
                {primary?.description}
              </p>

              <Counter />
            </div>
          </div>

          {/* Property Card Section */}
          <div>
            <div className="lg:flex flex-col hidden max-w-[324px] max-h-[416px] rounded-2xl overflow-hidden shadow-lg bg-white">
              {/* {slice.primary.card.map((item, index) => ( */}
                <div
                  // key={index}
                  className="flex flex-col"
                >
                  <div className="relative">
                    <PrismicNextImage field={slice?.primary?.card?.[0]?.card_Image} alt="card_image" className="w-full h-[200px] object-cover" />
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-[24px] font-extrabold text-[#7065F0]">
                      {slice?.primary?.card?.[0]?.card_Prize}
                      <span className="text-[#000929] text-[14px] font-normal opacity-[50%]">
                        /month
                      </span>
                    </h2>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {slice?.primary?.card?.[0]?.cardtext}
                      </h3>
                      <p className="text-gray-500 text-[16px]">
                        {slice?.primary?.card?.[0]?.cardpara}
                      </p>
                    </div>

                    <hr className="my-4" />

                    <div className="flex flex-wrap justify-between">
                      {primary?.cardsvg?.map((svg, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <PrismicNextImage field={svg?.cardsvgimage} alt="svg_image" className="w-5 h-5" />
                          <span className="text-[14px] text-gray-600">{svg?.cardsvgtext}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="mt-[58px]">
          <Motion />
          <SearchBox />
          <SearchBar />
        </div>

        <div className=" hidden xl:flex absolute p-[1.5px] top-[380px] left-[1100px] border-2 border-[#7065F0] rounded-2xl">
          {/* { slice.primary.card[1]((item, index) => ( */}
          <div
            // key={index}
            className="max-w-[310px] max-h-[280px] rounded-[8px] p-[1px] overflow-hidden shadow-lg bg-white"
          >
            <PrismicNextImage field={slice?.primary?.card?.[1]?.card_Image} alt="card_image" />
            <div className="pl-[16px] pr-[24px] py-[24px] flex flex-col gap-[4px] max-w-[310px]">
              <h2 className="text-[16px] leading-6 font-extrabold text-[#7065F0]">
                {slice?.primary?.card?.[1]?.card_Prize}
                <span className="text-[#000929] text-[14px] leading-[19.6px] font-normal opacity-[50%]">
                  /month
                </span>
              </h2>
              <div className="flex flex-col gap-1 max-w-[210px]">
                <h3 className="text-[16px] leading-6 font-bold text-[#000929]">
                  {slice?.primary?.card?.[1]?.cardtext}
                </h3>
                <p className="text-[#000929] leading-[16.2px] text-[12px] mt-1">
                  {slice?.primary?.card?.[1]?.cardpara}
                </p>
              </div>
              <hr className="mt-4" />
              <div className="flex flex-wrap justify-between">
                {slice?.primary?.smallcardsvg?.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <PrismicNextImage field={item?.smallcardsvgimage} alt="svg_image" />
                    <span className="text-[14px] text-gray-600">{item?.smallcardsvgtext}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
