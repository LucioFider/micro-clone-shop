import React from "react";
import list from "../../list.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Products = () => {
  return (
    <div className="max-w-[1160px] m-auto mb-20">
      <div className="flex flex-wrap justify-between ">
        {list.map((item, i) => (
          <div
            key={item.i}
            className="w-[260px] space-y-3 bg-[#f3f2f1] p-4 rounded-xl "
          >
            <img
              src="https://img.freepik.com/free-psd/digital-device-screen-mockup-psd-with-tablet-laptop-computer-phone_53876-130080.jpg?w=740&t=st=1669384290~exp=1669384890~hmac=b92f2ba04633c4663f1398049d347f2bd147e7fab4e096594fd47706b64e70a7"
              alt=""
              className="w-full h-40 object-cover rounded-lg"
            />
            <div>
              <h2 className="bg-gray-200 rounded w-fit p-[2px] px-3 font-thin mb-1 text-gray-900">
                New
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                {item.text}
              </h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center text-blue-500">
              <a href="#">Shop now</a>
              <MdOutlineKeyboardArrowRight className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
