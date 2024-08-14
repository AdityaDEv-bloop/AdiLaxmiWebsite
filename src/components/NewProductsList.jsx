import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function NewProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch products from the dummy endpoint
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=4`
        );
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      <h1 className="text-2xl uppercase font-semibold my-4 border-b-[1px]">
        What's New
      </h1>
      <div className="flex justify-start gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-4">
        {loading ? (
          <h1 className="px-2 py-1 bg-[#75A500] text-white text-center">
            Loading...
          </h1>
        ) : (
          <button
            className="px-2 py-1 bg-[#75A500] text-white text-center"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default NewProductList;
