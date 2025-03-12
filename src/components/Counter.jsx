"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1000; // Counter duration in milliseconds
      const increment = Math.ceil(end / (duration / 30));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }, [end]);

    const formatNumber = (number) => {
      if (number >= 1000) {
        return `${(number / 1000).toFixed(0)}k+`;
      }
      return `${number}+`;
    };

    return (
      <div className="max-w-[300px]">
        <p className="text-4xl font-bold text-purple-500">
          {formatNumber(count)}
        </p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    );
  };

  return (
    
    <div className="flex justify-center md:justify-normal gap-[40px]">
      <div className=" flex gap-6  ">
        {/* border-gray-300 border-l-[2px] */}
        <Counter end={50000} label="renters" />
      </div>
      <div className="">
        {/* border-l-[2px] border-gray-300 */}
        <Counter end={10000} label="properties" />
      </div>
    </div>
  );
}
