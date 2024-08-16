import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

function RecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    // Fetch recently viewed items, e.g., from localStorage or a backend API
    const fetchRecentlyViewed = () => {
      const viewedItems =
        JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      setRecentlyViewed(viewedItems);
    };

    fetchRecentlyViewed();
  }, []);

  return (
    <div className="px-8">
      <div className="flex justify-between items-center border-b-[1px]">
        <h1 className="text-2xl uppercase font-semibold my-4">
          Recently Viewed
        </h1>
        <div className="flex items-center gap-4">
          <IoIosArrowBack size={24} /> |
          <IoIosArrowForward size={24} />
        </div>
      </div>
      <hr />
      <div className="flex gap-3 flex-wrap">
        {recentlyViewed.length > 0 ? (
          recentlyViewed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No recently viewed items.</p>
        )}
      </div>
    </div>
  );
}

export default RecentlyViewed;
