import React, { useState, useEffect } from "react";
import CardCarousel from "./CardCarousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TopSelling = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Hardcoded card data with images
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      image: "https://via.placeholder.com/300x200?text=Card+1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/300x200?text=Card+2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/300x200?text=Card+3",
    },
    // Add more cards with images if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [cards.length]);

  const handlePrevClick = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex justify-between items-center border-b-2 mb-2">
        <h1 className="text-2xl uppercase font-semibold my-4 ">Top Selling</h1>

        <div className="flex items-center gap-4">
          <IoIosArrowBack size={24} onClick={handlePrevClick} /> |
          <IoIosArrowForward size={24} onClick={handleNextClick} />
        </div>
      </div>
      <div>
        <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Carousel Content */}
          <div className="flex bg-gray-100 relative w-full">
            <img
              src={cards[currentCardIndex].image}
              alt={cards[currentCardIndex].title}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="p-4 w-full">
              <h2 className="text-xl font-bold mb-2">
                {cards[currentCardIndex].title}
              </h2>
              <p className="text-gray-600">
                {cards[currentCardIndex].description}
              </p>
              <p>₹25899/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
