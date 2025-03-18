"use client";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("Barcelona, Spain");
  const [moveInDate, setMoveInDate] = useState("");

  return (
    <div className="max-w-[783px] md:flex flex-col  hidden  font-sans">
      <div className="bg-white shadow-md  rounded-r-[8px] rounded-b-[8px] p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex lg:gap-[100px] md:gap-[60px] gap-[40px]  ">
          <div className="flex flex-col">
            <label className="block leading-6 opacity-[70%] text-[#001619]">
              Location
            </label>
            <select
              id="location"
              className="w-full cursor-pointer py-2 text-[#000929] leading-[26.1px] text-[18px] font-bold focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Barcelona, Spain</option>
              <option>Madrid, Spain</option>
              <option>Valencia, Spain</option>
              <option>Malaga, Spain</option>
              <option>Seville, Spain</option>
              <option>Bilbao, Spain</option>
              <option>Zaragoza, Spain</option>
              <option>Málaga, Spain</option>
              <option>Murcia, Spain</option>
            </select>
          </div>

          <div className="flex lg:gap-[100px] md:gap-[80px] gap-[30px]">
            <div className="flex  flex-col">
              <label className="block leading-6 opacity-[70%] text-[#001619]">
                When
              </label>
              <input
                type="date"
                id="move-in-date"
                className="w-full py-2  cursor-pointer text-[#000929] leading-[26.1px] text-[18px] font-bold focus:outline-none"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
              />
            </div>

            <button className="bg-[#7065F0] text-white lg:text-[16px] text-[12px] lg:leading-[24px] leading-[12px] font-bold lg:px-8 lg:py-2 px-6 py-3 rounded-[8px]  hover:bg-purple-600 transition ">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
