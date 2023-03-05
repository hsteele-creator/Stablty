import React from "react";
import "./ImageSlider.css";
import { useState, useEffect } from "react";

const ImageSLider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translater(0, -50%)",
    left: "32px",
    fontSixe: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translater(0, -50%)",
    right: "32px",
    fontSixe: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotContainersStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "-50px 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &#8678;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &#8680;
      </div>
      <div style={slideStyles}></div>

      <div style={dotContainersStyles}>
        {slides.map((slide, i) => {
          return (
            <div style={dotStyles} key={i} onClick={() => setCurrentIndex(i)}>
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSLider;
