import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Importing an icon from react-icons

const HomeFooterCards = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1671467857784-73e69ed7a02e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Link
          to="/your-target-page" // Replace with your actual route
          className="text-white text-xl md:text-2xl font-bold flex items-center space-x-2"
        >
          <span>Explore More</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooterCards;
