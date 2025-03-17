"use client";

import React, { useState, useEffect } from "react";
// import { createClient } from "@/prismicio";
import Link from "next/link";
// import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Header = ({ header }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(header);
  const { data } = header;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <PrismicNextImage field={data.logo} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex lg:gap-12 gap-6 px-3">
          {data.navigation?.map(({ link, label }, index) => (
            <PrismicNextLink
              key={index}
              field={link}
              className="md:leading-6 font-normal text-[#000929] flex items-center lg:text-[16px] text-[14px] md:gap-2 hover:text-[#7065F0] transition-colors duration-200"
            >
              {label}
            </PrismicNextLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center lg:gap-4 gap-2">
          {data.authbuttons.map(({ link, label }, index) => (
            <PrismicNextLink key={index} field={link}>
              <button
                className={`lg:px-6 lg:py-3 px-4 py-2 lg:text-[16px] text-[14px] lg:leading-6 leading-3 font-bold rounded-lg ${
                  index === 0
                    ? "bg-white text-[#000929] border-2 border-[#000929] hover:bg-[#000929] hover:text-white"
                    : "bg-[#7065F0] text-white"
                } hover:opacity-80 transition-all duration-200`}
              >
                {label}
              </button>
            </PrismicNextLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-start mt-4 gap-4 bg-[#F7F7FD] w-screen h-screen p-4"
          >
            {data.navigation?.map(({ link, label }, index) => (
              <PrismicNextLink
                key={index}
                field={link}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-[#7065F0] pl-[10px] transition-colors duration-200"
              >
                {label}
              </PrismicNextLink>
            ))}
            {data.authbuttons.map(({ link, label }, index) => (
              <PrismicNextLink
                key={index}
                field={link}
                onClick={() => setMenuOpen(false)}
              >
                <button
                  className={`px-6 py-3 flex items-start justify-start leading-6 font-bold rounded-lg w-full ${
                    index === 0
                      ? "bg-white text-[#000929] border-2 border-[#000929] hover:bg-[#bcc1d11a] hover:text-white"
                      : "bg-[#7065F0] text-white"
                  } hover:opacity-80 transition-all duration-200`}
                >
                  {label}
                </button>
              </PrismicNextLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;