import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { PrismicNextImage } from "@prismicio/next";

const Footer = ({ footer }) => {
  const { data } = footer;

  return (
    <section className="w-full m-auto font-sans">
      {/* Logo and Content Container */}
      <div className="max-w-[1140px] px-6 md:py-[80px] py-[40px] m-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[150px]">
        {/* Logo */}
        <Link href="/">
          <div className="w-[151px] h-[40px]">
            <PrismicNextImage field={data.footerlogo} />
          </div>
        </Link>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.footertitle.map((title, titleIndex) => (
            <div key={titleIndex} className="flex flex-col">
              <h1 className="font-bold leading-[24px] text-[#000929] mb-4">
                {title.footertitles}
              </h1>
              {data.footerlinks
                .slice(
                  titleIndex === 0
                    ? 0
                    : titleIndex === 1
                      ? 4
                      : titleIndex === 2
                        ? 7
                        : titleIndex === 3
                          ? 10
                          : titleIndex === 4
                            ? 14
                            : 18,
                  titleIndex === 0
                    ? 4
                    : titleIndex === 1
                      ? 7
                      : titleIndex === 2
                        ? 10
                        : titleIndex === 3
                          ? 14
                          : titleIndex === 4
                            ? 18
                            : 21
                )
                .map((link, index) => (
                  <Link
                    href={link.footerlink.url}
                    key={index}
                    className="text-[#000929] max-w-fit opacity-[70%] font-normal leading-[38px] relative after:absolute after:w-full after:h-[1px] after:bg-[#000929] after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {link.footerlabel}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-[#E8E6F9] border-[1.5px] w-full">
        <div className="max-w-[1140px] m-auto py-8 px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-[#000929] opacity-[50%] font-normal leading-[25.6px]">
            {data.copyright}
          </h1>
          <div className="flex gap-[40px]">
            {/* External Links using <a> instead of PrismicNextLink */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
