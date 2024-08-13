import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <div className="flex">
      <div className="w-[20vw]"></div>
      <div className="w-[80vw]">
        <Carousel images={images} />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
