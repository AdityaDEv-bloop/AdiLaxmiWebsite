import React from "react";
import BestSelling from "./BestSelling.jsx";
import TopSelling from "./TopSelling.jsx";

const TopBest = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col lg:flex-row w-full my-4 justify-between gap-4">
        <BestSelling />
        <TopSelling />
      </div>
    </div>
  );
};

export default TopBest;
