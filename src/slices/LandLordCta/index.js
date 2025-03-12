/**
 * @typedef {import("@prismicio/client").Content.LandLordCtaSlice} LandLordCtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandLordCtaSlice>} LandLordCtaProps
 * @type {import("react").FC<LandLordCtaProps>}
 */
const LandLordCta = ({ slice }) => {
  const { primary } = slice;
  console.log(primary);

  return (
    <div className="bg-[#100A55] text-white gap-[8px] md:py-16 py-[48px] px-6 text-center flex flex-col items-center">
      <p className="topText">{primary?.text}</p>
      <h2 className="heading">{primary?.heading}</h2>
      <p className="description">{primary?.paragraph}</p>

      <div className="mt-6 flex flex-col gap-3 w-full max-w-md relative">
        <input
          type="email"
          placeholder={primary?.placeholder}
          className="input"
        />

        {/* Desktop button - absolute positioned inside input */}
        <button className="button md:mt-[6px]">
          {primary?.btnlabel}
        </button>

        {/* Mobile button - full width below input */}
        <button className="button2 md:mt-[6px]">
          {primary?.btnlabel}
        </button>
      </div>

      <p className="bottomText">
        <span className="font-semibold text-white">{primary?.smalltext}</span>
      </p>
    </div>
  );
};

export default LandLordCta;
