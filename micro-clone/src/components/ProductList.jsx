import React from "react";
import list from "../../list.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductList = () => {
  return (
    <div className="bg-[#f3f2f1] max-w-[1160px] mx-auto rounded-xl">
      <h3 className="text-3xl mb-4 p-4">For Business</h3>
      <div className="flex flex-wrap justify-between p-4">
        {list.map((item, i) => (
          <div
            className="w-[260px] space-y-3 p-4 bg-white rounded-xl shadow-md"
            key={item.i}
          >
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-digitalmat-gallery-1-202209_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1662055814177"
              alt="iPhone"
              className="w-full h-40 object-cover"
            />
            <div>
              <h2 className="bg-gray-200 rounded w-fit p-[2px] px-3 font-thin mb-1 text-gray-900">
                New
              </h2>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.textTwo}
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              cupiditate cumque repellendus quaerat voluptatem!
            </p>
            <div className="flex items-center text-blue-500">
              <a href="#">Shop Now</a>
              <MdOutlineKeyboardArrowRight className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
