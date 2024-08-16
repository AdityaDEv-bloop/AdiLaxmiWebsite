import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CardCarousel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Hardcoded card data with images
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the first card.',
      image: 'https://via.placeholder.com/300x200?text=Card+1'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'https://via.placeholder.com/300x200?text=Card+2'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the third card.',
      image: 'https://via.placeholder.com/300x200?text=Card+3'
    },
    // Add more cards with images if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => 
        (prevIndex + 1) % cards.length
      );
    }, 3000); // Change card every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [cards.length]);

  const handlePrevClick = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex + 1) % cards.length
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Carousel Controls */}
      {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer z-10">
        <FaArrowLeft onClick={handlePrevClick} className="text-3xl text-gray-700" />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer z-10">
        <FaArrowRight onClick={handleNextClick} className="text-3xl text-gray-700" />
      </div> */}

      {/* Carousel Content */}
      <div className="flex bg-gray-100 relative w-full">
        <img 
          src={cards[currentCardIndex].image} 
          alt={cards[currentCardIndex].title} 
          className="w-40 h-40 object-cover rounded-lg"
        />
        <div className="p-4 w-full">
          <h2 className="text-xl font-bold mb-2">{cards[currentCardIndex].title}</h2>
          <p className="text-gray-600">{cards[currentCardIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
