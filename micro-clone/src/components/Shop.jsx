import React from "react";

const Shop = () => {
  return (
    <div className="max-w-[1160px] mx-auto mb-20 ">
      <div className="relative bg-gray-300 h-[540px] w-full rounded-xl ">
        <img
          src="https://www.apple.com/v/iphone-14/c/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg"
          alt="cta"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-16 left-[50%] right-[50%]space-y-5 mt-20">
          <h2 className="text-3xl font-bold my-4">Do more with iPhone</h2>
          <p className="my-4">Shop ipads, MacBook-Pro, Ipads and more..</p>
          <button className="w-60 h-10 bg-blue-500 font-bold text-white rounded-md my-4">
            Find your next Apple Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
