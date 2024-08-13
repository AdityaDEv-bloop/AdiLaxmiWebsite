import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import HoverCard from "../components/HoverCard";
import SideBar from "../components/SideBar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <div className="flex px-4">
      <div className="w-[25vw] pr-4 pt-4">
        <SideBar />
      </div>
      <div className="w-[75vw]">
        <Carousel images={images} />

        {/* Hover Card */}
        <div className="flex gap-2 my-2 ">
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>

        {/* Whats New Section */}
        <div className="">
          <h1 className="text-2xl uppercase font-semibld  my-4 border-b-[1px] ">
            What's New
          </h1>
          <div className="flex justify- gap-3 flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="w-full flex items-center justify-center my-4 ">
            <h1 className="px-2 py-1 bg-[#75A500] text-white  text-center ">
              Load More
            </h1>
          </div>
        </div>

        {/* Images */}
        <div className="w-full relative">
          <img
            src="https://passionleather.com/cdn/shop/files/4.jpg?v=1678698089"
            alt=""
          />
          <h1 className="absolute top-1/2 uppercase text-white text-2xl font-semibold w-full px-32 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quas.
          </h1>
        </div>

        {/* Recently View */}
        <div className="">
          <div className="flex justify-between items-center border-b-[1px]">
            <h1 className="text-2xl uppercase font-semibld  my-4  ">
              Recently View
            </h1>
            <div className="flex items-center gap-4">
              <IoIosArrowBack size={24} /> |
              <IoIosArrowForward size={24} />
            </div>
          </div>
          <hr />
          <div className="flex justify- gap-3 flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
