import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import HoverCard from "../components/HoverCard";
const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <div className="flex px-4">
      <div className="w-[20vw]"></div>
      <div className="w-[80vw]">
        <Carousel images={images} />
        <div className="flex gap-2 my-2 ">
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>
        <div className="flex gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
