"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
      {/* Animated Image */}
      {/* <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <Image 
          src="/404.webp" 
          width={600} 
          height={600} 
          alt="404 Image" 
          className="w-[80%] max-w-[500px] drop-shadow-lg"
        />
      </motion.div> */}

      {/* Text Content */}
      <div className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100">Oops! Page Not Found</h1>
        <p className="text-gray-300 mt-2 text-lg md:text-xl">
          The page you're looking for doesn’t exist.
        </p>

        {/* Animated Button */}
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="mt-6"
        >
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
