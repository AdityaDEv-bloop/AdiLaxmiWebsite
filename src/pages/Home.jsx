import React, { useState } from "react";
import Carousel from "../components/Carousel";
import ReviewCarousel from "../components/ReviewCarousel";
import ProductCard from "../components/ProductCard";
import HoverCard from "../components/HoverCard";
import SideBar from "../components/SideBar";
import NewProductsList from "../components/NewProductsList";
import FeatureHighlights from "../components/FeatureHighlights";
import RecentlyViewed from "../components/RecentlyViewed";
import ProductCategories from "../components/ProductCategories";
import { IoIosArrowBack, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

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
    <div className="flex flex-col px-4">
      {/* Toggle button only visible on mobile */}
      <div className="lg:hidden flex justify-between items-center my-4 bg-[#75A500] text-white px-4 py-2">
        <h1 onClick={toggleSidebar} className="text-xl font-semibold">
          Explore All Collections
        </h1>
        <MdArrowOutward />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar with conditional rendering */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block w-ful lg:w-[25vw] pr-4 pt-4 bg-white fixed lg:static lg:bg-transparent z-10 lg:z-0`}
        >
          <SideBar />
          <ReviewCarousel />
        </div>

        <div className="w-full lg:w-[75vw] lg:pl-4">
          <Carousel images={images} />

          {/* Hover Card */}
          <div className="flex flex-col md:flex-row gap-2 my-2">
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
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-white text-2xl font-semibold w-full px-8 md:px-32 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quas.
            </h1>
          </div>

          {/* Recently Viewed */}
          <RecentlyViewed />

          {/* Product Categories */}
          <ProductCategories />
        </div>
      </div>
      <FeatureHighlights />
    </div>
  );
};

export default Home;
