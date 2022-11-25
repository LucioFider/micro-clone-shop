import React from "react";

const Main = () => {
  return (
    <div className="w-full h-[540px] flex justify-between items-center bg-gray-100">
      <div className="h-full object-cover">
        <img
          className=""
          src="https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/e8/13/b7/e813b72a-f7f8-835a-2cf0-614a446130a5/5d447c3e-6c0c-4176-9569-f073a2596d96.png/1468x826sr.webp"
          alt=""
        />
      </div>
      <div className="h-60 flex flex-col gap-3 pr-20">
        <h2 className="text-3xl">Micro-Shop</h2>
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nihil
          laborum hic deserunt eum animi corporis porro cum a ad unde debitis
          vitae nostrum sunt reiciendis. Quisquam voluptatibus odit sed.
        </p>
        <button className="w-[600] h-10 bg-gray-500 font-bold text-white text-md rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Main;
