import React, { useState } from "react";

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-full max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          isHovered
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87eEkFXQmmzTiPVKXNjE6YVW_kvieSlUrhg&s"
            : "https://img.freepik.com/free-vector/gradient-world-tourism-day-illustration_52683-129641.jpg"
        }
        alt="Hoverable"
        className="w-full h-auto object-cover transition-transform duration-300"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center text-white text-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-2xl font-bold">Your Text Here</span>
      </div>
    </div>
  );
};

export default HoverCard;
