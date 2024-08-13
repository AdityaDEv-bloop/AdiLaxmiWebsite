import React, { useState } from 'react';
import { FaHeart, FaSearch, FaExchangeAlt } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group shadow-lg w-full md:w-[40%] lg:w-[24%] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 bg-red-500 z-20 text-white text-xs font-bold px-2 py-1 rounded">
        Discount
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={isHovered ? 'https://via.placeholder.com/301' : 'https://via.placeholder.com/300'}
          alt="Leather Journal"
          className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
        />

        {/* Hover Icons */}
        <div className="absolute hover:opacity-100 top-4  justify-end gap-2 right-4  flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* <div className="absolute inset-0  flex justify-end top-2 right-2 bottom-4 space-x-4 "> */}
          <FaHeart className="text-white text-xl cursor-pointer bg-black bg-opacity-10  p-1.5 rounded-full" size={28} />
          <FaSearch className="text-white text-xl cursor-pointer bg-black bg-opacity-10  p-1.5 rounded-full" size={28} />
          <FaExchangeAlt className="text-white text-xl cursor-pointer bg-black bg-opacity-10  p-1.5 rounded-full" size={28} />
        </div>

        {/* Add to Bag Button */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full e py-2 text-sm ">
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-2 flex justify-between">
        <h3 className="text-md font-semibold text-gray-700">
          Product Name
        </h3>
        {/* <div className="text-gray-400 line-through text-xs">
          Rs. 3,400.00
        </div> */}
        <div className=" text-md font-semibold text-end">Rs. 10000/-</div>
      </div>
    </div>
  );
};

export default ProductCard;
