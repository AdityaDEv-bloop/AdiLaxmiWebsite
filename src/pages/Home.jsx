import React, { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import BestSelling from "../components/BestSelling.jsx";
import Carousel from "../components/Carousel";
import FeatureHighlights from "../components/FeatureHighlights";
import HomeFooterCards from "../components/HomeFooterCards";
import HoverCard from "../components/HoverCard";
import NewProductsList from "../components/NewProductsList";
import ProductCategories from "../components/ProductCategories";
import RecentlyViewed from "../components/RecentlyViewed";
import ReviewCarousel from "../components/ReviewCarousel";
import SideBar from "../components/SideBar";
import TopSelling from "../components/TopSelling.jsx";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className={`text-2xl flex z-50 h-s  bg-[#75A500] absolute top-1/2 left-0 ${
          sidebarOpen ? "text-white" : "text-black"
        }`}
      >
        {sidebarOpen ? (
          ""
        ) : (
          <h1 className="flex text-white items-center py-2">
            <p className="text-base">Explore</p>
            <IoIosArrowForward />
          </h1>
        )}
      </button>

      <div className="flex flex-col">
        {/* Sidebar with slide-in/out animation */}
        <div
          className={`transform top-0 left-0 h-full w-full max-w-xs bg-white fixed z-40 transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar close button */}
          <button
            onClick={toggleSidebar}
            className="text-2xl absolute top-1 right-4 z-50 text-red-800"
          >
            <IoMdClose />
          </button>
          <SideBar />
          <ReviewCarousel />
        </div>

        <div className="w-full">
          <Carousel images={images} />

          {/* Hover Card */}
          <div className="flex justify-between gap-2 my-2">
            <HoverCard />
            <HoverCard />
            <HoverCard />
          </div>

          {/* What's New Section */}
          <div className="my-4">
            <NewProductsList />
          </div>

          {/* Banner Image */}
          <div className="w-full relative my-4">
            <img
              src="https://passionleather.com/cdn/shop/files/4.jpg?v=1678698089"
              alt=""
              className="w-full object-cover"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-white text-2xl font-semibold w-full px-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quas.
            </h1>
          </div>

          {/* Recently Viewed */}
          <RecentlyViewed />

          {/* Best / Top Selling */}
          <div className="flex w-full my-4  px-8 justify-between gap-4">
            <BestSelling />
            <TopSelling />
          </div>

          

          {/* Product Categories */}
          <ProductCategories />

          <HomeFooterCards />
        </div>
      </div>
      <FeatureHighlights />
    </div>
  );
};

export default Home;
