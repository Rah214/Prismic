export default function LandlordCTA() {
    const content = {
        topText: {
            text: "No Spam Promise",
            className: "text-[#7065F0] md:leading-[36px] md:text-[24px] font-bold"
        },
        heading: {
            text: "Are you a landlord?",
            className: "md:text-[40px] text-[32px] md:leading-[56px] leading-[40px] font-bold mt-2"
        },
        description: {
            text: "Discover ways to increase your home's value and get listed. No Spam.",
            className: "mt-4 text-[#D3D5DA] leading-[25.6px]"
        },
        input: {
            placeholder: "Enter your email address",
            className: "w-full md:py-[22px] py-[15px] pr-[90px] pl-[16px] rounded-[8px] text-gray-900 outline-none"
        },
        buttons: [
            {
                text: "Submit",
                className: "bg-[#7065F0] font-bold leading-[24px] hidden sm:block rounded-[8px] text-white absolute right-2 top-1/2 transform -translate-y-1/2 py-[12px] px-[40px] hover:bg-purple-600"
            },
            {
                text: "Submit", 
                className: "bg-[#7065F0] font-bold leading-[24px] w-full max-w-md sm:hidden block rounded-[8px] text-white py-[12px] px-[40px] hover:bg-purple-600"
            }
        ],
        bottomText: {
            prefix: "Join ",
            highlight: "10,000+",
            suffix: " other landlords in our estatery community.",
            className: "mt-4 text-[#D3D5DA] leading-[19.6px] text-[14px]"
        }
    };

    return (
        <div className="bg-[#100A55] text-white gap-[8px] md:py-16 py-[48px] px-6 text-center flex flex-col items-center">
            <p className={content.topText.className}>{content.topText.text}</p>
            <h2 className={content.heading.className}>{content.heading.text}</h2>
            <p className={content.description.className}>{content.description.text}</p>
            
            <div className="mt-6 w-full max-w-md relative">
                <input
                    type="email"
                    placeholder={content.input.placeholder}
                    className={content.input.className}
                />
                {content.buttons.map((button, index) => (
                    <button key={index} className={button.className}>
                        {button.text}
                    </button>
                ))}
            </div>

            <p className={content.bottomText.className}>
                {content.bottomText.prefix}
                <span className="font-semibold text-white">{content.bottomText.highlight}</span>
                {content.bottomText.suffix}
            </p>
        </div>
    );
}
