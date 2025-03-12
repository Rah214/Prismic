'use client';

import Image from 'next/image';

const realEstateStats = [
    {
        id: 1,
        icon: '/houseicon.png',
        value: '7.4%',
        label: 'Property Return Rate'
    },
    {
        id: 2,
        icon: '/houseicon1.png',
        value: '3,856',
        label: 'Property in Sell'
    },
    {
        id: 3,
        icon: '/houseicon2.png',
        value: '2,540',
        label: 'Daily Transactions'
    }
];

export default function RealEstateSection() {
    return (
        <section className="p-6 md:p-[30px] rounded-lg font-sans">
            <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row gap-10 items-center py-[20px] md:pl-[64px] px-7 bg-[#F7F7FD] border-[2px] border-[#E0DEF7] rounded-[8px] ">
                {/* Text Content */}
                <div className="flex-1">
                    <div className='md:max-w-[379px] max-w-[450px] flex flex-col md:items-start m-auto md:m-0 items-center'>
                        <h2 className="md:text-[35px] md:text-left text-center text-[32px] md:leading-[56px] leading-[40px] font-bold text-[#100A55]">
                            The new way to find your new home
                        </h2>
                        <div className='md:max-w-[276px] max-w-[350px] flex items-center justify-center'>
                            <p className="mt-4 text-[#6C727F] md:text-left text-center text-[16px] leading-[25.6px]">
                                Find your dream place to live in with more than 10k+ properties listed.
                            </p>
                        </div>
                    </div>
                    {/* Stats Items */}
                    <div className="mt-[40px] flex sm:flex-row flex-col md:justify-stretch gap-8 ">
                        {realEstateStats.map((stat) => (
                            <div key={stat.id} className="text-center max-w-[200px] md:max-w-auto flex items-center md:flex-col md:gap-[5px] gap-[16px]">
                                <div className="flex items-center justify-center bg-white shadow-md rounded-full">
                                    <Image src={stat.icon} alt="house icon" height={64} width={64} />
                                </div>
                                <div>
                                    <p className="text-[24px] md:text-center text-left leading-[36px] font-bold text-[#000929]">{stat.value}</p>
                                    <p className="text-[#6C727F] md:text-center text-left text-[12px] leading-[16.2px]">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Image Content */}
                <div className="flex-1 flex justify-center w-full">
                    <Image
                        src="/house.png"
                        alt="House Illustration"
                        width={500}
                        height={400}
                        className="w-full max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
}
