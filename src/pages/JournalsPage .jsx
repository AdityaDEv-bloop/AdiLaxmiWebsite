import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const JournalsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: "relevance", // default sorting
    priceRange: 10000, // default price range
    categories: [], // default categories
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

  // Function to handle category checkbox changes
  const handleCategoryChange = (category) => {
    setFilters((prevFilters) => {
      const newCategories = prevFilters.categories.includes(category)
        ? prevFilters.categories.filter((cat) => cat !== category)
        : [...prevFilters.categories, category];
      return { ...prevFilters, categories: newCategories };
    });
  };

  // Function to handle price range slider changes
  const handlePriceRangeChange = (event) => {
    handleFilterChange({ priceRange: parseInt(event.target.value, 10) });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for Filters */}
      <aside className="w-full lg:w-1/4 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Sort By Filter */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Sort By</label>
          <select
            className="w-full border rounded p-2"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
          >
            <option value="relevance">Relevance</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="bestSelling">Best Selling</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Category</label>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={filters.categories.includes("men")}
                onChange={() => handleCategoryChange("men")}
              />
              <span className="ml-2">Men</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={filters.categories.includes("women")}
                onChange={() => handleCategoryChange("women")}
              />
              <span className="ml-2">Women</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={filters.categories.includes("kids")}
                onChange={() => handleCategoryChange("kids")}
              />
              <span className="ml-2">Kids</span>
            </label>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Price Range</label>
          <div className="flex flex-col">
            <label>
              Max Price: ₹{filters.priceRange}
              <input
                type="range"
                min="0"
                max="100000"
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                className="w-full"
              />
            </label>
          </div>
        </div>
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

export default JournalsPage;
