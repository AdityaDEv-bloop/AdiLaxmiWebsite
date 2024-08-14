import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "LEATHER BRIEFCASES",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5-07inngjEzHUubWatnkb0Fncmtr-x5nkA&s",
    link: "/leather-briefcases",
  },
  {
    title: "TRAVEL DUFFLES",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_DixnAN_p0SB2xKcDx61qhzOH3bDec0AEA&s",
    link: "/travel-duffles",
  },
  {
    title: "LADIES TOTES",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYsKBaUs2k7RntlJkkgyLNnZ2nf5JJM9SUg&s",
    link: "/ladies-totes",
  },
];

function ProductCategories() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="relative group">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full p-4 h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className=" text-lg font-bold bg-white text-black px-4 py-2">
                {category.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
