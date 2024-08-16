import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const TotesPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: "relevance", // default sorting
    priceRange: [0, 10000],
  });

  useEffect(() => {
    // Function to fetch products based on filters
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=12`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filters]);

  // Function to handle filter changes
  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilter }));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for Filters */}
      <aside className="w-full lg:w-1/4 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Sort By</label>
          <select
            className="w-full border rounded p-2"
            value={filters.sortBy}
            onChange={(e) =>
              handleFilterChange({ sortBy: e.target.value })
            }
          >
            <option value="relevance">Relevance</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="bestSelling">Best Selling</option>
          </select>
        </div>
        {/* Additional filters like price range, categories, etc., can be added here */}
      </aside>

      {/* Main Content for Product List */}
      <main className="w-full lg:w-3/4 p-4">
        <h1 className="text-2xl font-bold my-4">Product List</h1>
        <div className="flex flex-wrap gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TotesPage;
