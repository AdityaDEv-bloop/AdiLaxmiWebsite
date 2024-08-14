import React from "react";
import Carousel from "../components/Carousel";
import ReviewCarousel from "../components/ReviewCarousel";
import ProductCard from "../components/ProductCard";
import HoverCard from "../components/HoverCard";
import SideBar from "../components/SideBar";
import NewProductsList from "../components/NewProductsList";
import FeatureHighlights from "../components/FeatureHighlights";
import RecentlyViewed from "../components/RecentlyViewed";
import ProductCategories from "../components/ProductCategories";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <div className="flex px-4 flex-col">
      <div className="flex">
        <div className="w-[25vw] pr-4 pt-4">
          <SideBar />
          <ReviewCarousel />
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
            <NewProductsList />
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
          <RecentlyViewed />


          <ProductCategories />
        </div>
      </div>
      <FeatureHighlights />
    </div>
  );
};

export default Home;
