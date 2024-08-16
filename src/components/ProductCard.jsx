import React, { useState } from "react";
import { FaHeart, FaSearch, FaExchangeAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Use useNavigate

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Use navigate instead of history.push
  };

  return (
    <div
      className="relative group shadow-lg w-full md:w-[40%] lg:w-[24%] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 bg-red-500 z-20 text-white text-xs font-bold px-2 py-1 rounded">
        Discount
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={
            isHovered
              ? `${product.thumbnailUrl}`
              : "https://via.placeholder.com/300"
          }
          alt={product.title}
          className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
        />

        {/* Hover Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaHeart
            className="text-white text-xl cursor-pointer bg-black bg-opacity-10 p-1.5 rounded-full"
            size={28}
          />
          <FaSearch
            className="text-white text-xl cursor-pointer bg-black bg-opacity-10 p-1.5 rounded-full"
            size={28}
          />
          <FaExchangeAlt
            className="text-white text-xl cursor-pointer bg-black bg-opacity-10 p-1.5 rounded-full"
            size={28}
          />
        </div>

        {/* Add to Bag Button */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2 text-sm bg-[#75A500] text-white">
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-4 py-2">
        <h3 className="text-md font-semibold text-gray-700 uppercase">
          {product.title}
        </h3>
        <div className="text-md font-semibold">₹ 10000/-</div>
      </div>
    </div>
  );
};

export default ProductCard;
