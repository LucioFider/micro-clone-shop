import React from "react";
import { BsMicrosoft, BsTabletLandscape, BsShop } from "react-icons/bs";
import { IoLogoXbox } from "react-icons/io";

const Features = () => {
  return (
    <div className="h-60 w-full flex justify-center items-center ">
      <div className="flex gap-10">
        <div className="flex flex-col bg-white items-center gap-2  p-10 border border-[#a5b8c9] rounded-2xl shadow-sm">
          <BsMicrosoft className="h-10 w-10" />
          <a href="#">Choose & Buy</a>
        </div>
        <div className="flex flex-col bg-white items-center gap-2 p-10 border border-[#a5b8c9] rounded-2xl shadow-sm">
          <BsTabletLandscape className="h-10 w-10" />
          <a href="#">Find your next PC</a>
        </div>
        <div className="flex flex-col bg-white items-center gap-2 p-10 border border-[#a5b8c9] rounded-2xl shadow-sm">
          <BsShop className="h-10 w-10" />
          <a href="#">Shop for students</a>
        </div>
        <div className="flex flex-col bg-white items-center gap-2 p-10 border border-[#a5b8c9] rounded-2xl shadow-sm">
          <IoLogoXbox className="h-10 w-10" />
          <a href="#">Shop Business</a>
        </div>
      </div>
    </div>
  );
};

export default Features;
