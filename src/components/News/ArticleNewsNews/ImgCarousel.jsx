import React, { useState } from 'react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const maxSlide = 9;
  const numVisibleSlides = 4;

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const generateSlides = () => {
    const slides = [];
    let startSlide = currentSlide;
    let endSlide = currentSlide + numVisibleSlides - 1;

    if (endSlide > maxSlide) {
      endSlide = maxSlide;
      startSlide = endSlide - numVisibleSlides + 1;
    }

    for (let i = startSlide; i <= endSlide; i++) {
      slides.push(
        <div key={i} className={`slide ${i === currentSlide ? 'current' : ''}`}>
          {i}
        </div>
      );
    }

    return slides;
  };

  return (
    <div>
      <div className="chevron-slider">
        

        </div>
        <div className="slider" id="slider">
          {generateSlides()}
        </div>
        

        </div>

  );
};

export default ImageCarousel;





