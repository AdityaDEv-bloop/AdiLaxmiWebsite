import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    image: 'https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tempore nemo blanditiis, pariatur aspernatur quisquam ea. Eum iusto ratione sunt?',
    name: 'John Doe',
  },
  {
    image: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    name: 'Jane Smith',
  },
  {
    image: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Emily Johnson',
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full my-4 md:h-[300px] flex flex-col items-center relative group">
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${reviews[currentIndex].image})` }}
        className="w-20 h-20 rounded-full bg-center bg-cover duration-500"
      ></div>
      
      {/* Review Text */}
      <p className="text-center mt-4 italic">"{reviews[currentIndex].text}"</p>
      <p className="text-center font-semibold">{reviews[currentIndex].name}</p>

      {/* Navigation Dots */}
      <div className="flex justify-center py-2 absolute bottom-0">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 border-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-[#75A500]' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute top-[50%] transform -translate-y-[50%] w-full px-3 flex justify-between items-center">
        <button onClick={prevSlide}>
          <FaChevronLeft size={24} />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight size={24} />
        </button>
      </div> */}
    </div>
  );
};

export default ReviewCarousel;
