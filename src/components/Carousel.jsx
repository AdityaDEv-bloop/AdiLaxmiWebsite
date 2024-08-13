import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[300px] md:h-[500px] relative group">
      {/* Images */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl text-white bg-black/20 rounded-full p-2 cursor-pointer group-hover:bg-black/50 transition duration-300"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl text-white bg-black/20 rounded-full p-2 cursor-pointer group-hover:bg-black/50 transition duration-300"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </div>
      {/* Dots */}
      {/* <div className="flex justify-center py-2 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 bg-white rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
