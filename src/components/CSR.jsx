import { useState, useEffect } from "react";
import "./CSR.css";
import sablogo from "../assets/SAB_LOGO.png";
import mailogoo from "../assets/MAILOGO.png";
import SAB from "../assets/SAB.png";
import Adapt from "../assets/Adapt.png";

const CSR = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "We Have adopted, It's Official",
      subtitle:
        "A fresh start, a clear vision—MAI Corporation is ready for change, Reimagining possibilities, redefining success. We don't follow trends – we create them.",
      logoImg: mailogoo,
      // logoText: "We Build Homes",
      image: Adapt,
      bgColor: "bg-white",
    },
    {
      id: 2,
      title: "A Visionary Movement To Build Strong Families - CSR",
      subtitle:
        'MAI initiates a holistic approach to community well-being by extending its "Family Counselling Services" to the general public, fostering mental health and support for families in need through its project SAB.',
      logoImg: sablogo,
      // logoText: "Building Strong Families",
      image: SAB,
      bgColor: "bg-gray-50",
      proudlySupporting: "Proudly Supporting...",
       textClass: "tdext-white-slide"
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="csr-card-container">
  <div
        className="csr-carousel-box"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
       <div
  className="carousel-track"
  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
>
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`carousel-slide ${slide.bgColor} ${
        slide.id === 2 ? "text-white-slide" : ""
      }`}
    >
      <div className="slide-content">
        <div className="content-left">
          <div className="text-content">
            {slide.proudlySupporting && (
              <p className="proudly-supporting">{slide.proudlySupporting}</p>
            )}
            <h2 className="slide-title">{slide.title}</h2>
          </div>

          <div className="content-bar">
            <div className="logo-section">
              <img
                src={slide.logoImg}
                alt={`${slide.logoText} logo`}
                className="logo-image"
              />
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="image-wrappernew">
            <img
              src={slide.image}
              alt={`${slide.logoText} visual`}
              className="slide-image"
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* <div className="dot-navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "dot-active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
</div>
  );
};

export default CSR;
