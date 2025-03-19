"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const CounterItem = ({ end, label }) => {
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
      <div className="max-w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out w-[120px] text-left"> {/* Changed text alignment to left */}
        <p className="text-4xl font-bold text-purple-500 font-sans">
          {formatNumber(count)}
        </p>
        <p className="text-sm text-gray-500">{label}</p> {/* Moved label below count */}
      </div>
    );
  };

  return (
    <div className="flex justify-center md:justify-normal gap-[40px]">
      <CounterItem end={50000} label="renters" />
      <CounterItem end={10000} label="properties" />
    </div>
  );
}