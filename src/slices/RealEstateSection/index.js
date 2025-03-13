import { PrismicNextImage } from "@prismicio/next";
// import { Image } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.RealEstateSectionSlice} RealEstateSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RealEstateSectionSlice>} RealEstateSectionProps
 * @type {import("react").FC<RealEstateSectionProps>}
 */
const RealEstateSection = ({ slice }) => {
  const { primary } = slice;
  // console.log(primary);

  return (
    <section className="p-6 md:p-[30px] rounded-lg font-sans">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row gap-10 items-center py-[20px] md:pl-[64px] px-7 bg-[#F7F7FD] border-[2px] border-[#E0DEF7] rounded-[8px] ">
        {/* Text Content */}
        <div className="flex-1">
          <div className='md:max-w-[379px] max-w-[450px] flex flex-col md:items-start m-auto md:m-0 items-center'>
            <h2 className="md:text-[35px] md:text-left text-center text-[32px] md:leading-[56px] leading-[40px] font-bold text-[#100A55]">
              {primary?.realheading}
            </h2>
            <div className='md:max-w-[276px] max-w-[350px] flex items-center justify-center'>
              <p className="mt-4 text-[#6C727F] md:text-left text-center text-[16px] leading-[25.6px]">
                {primary?.realpara}
              </p>
            </div>
          </div>
          {/* Stats Items */}
          <div className="mt-[40px] flex sm:flex-row flex-col md:justify-stretch gap-8 ">
            {primary?.realproperties?.map((item, index) => (
              <div key={index} className="text-center max-w-[200px] md:max-w-auto flex items-center md:flex-col md:gap-[5px] gap-[16px]">
                <div className="flex items-center justify-center bg-white shadow-md rounded-full">
                  <PrismicNextImage field={item?.realprop} />
                </div>
                <div>
                  <p className="text-[24px] md:text-center text-left leading-[36px] font-bold text-[#000929]">{item?.realpropertiesheading}</p>
                  <p className="text-[#6C727F] md:text-center text-left text-[12px] leading-[16.2px]">{item?.realpropertiestext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center w-full">
          <PrismicNextImage field={slice?.primary?.realimage} />
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;

