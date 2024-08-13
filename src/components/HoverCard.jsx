import React, { useState } from "react";

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-96 relative h-60 border-2 transition-all ease-in-out "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          isHovered
            ? "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
      />
      <h1 className="absolute h-full w-full  top-0 text-4xl text-white   flex items-center">
        <p className="font-semibold"> Any Text</p>
      </h1>
    </div>
  );
};

export default HoverCard;
