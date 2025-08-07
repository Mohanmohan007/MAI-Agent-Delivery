import { useRef, useState, useEffect } from "react";
import './Traders.css';

import tablecard from '../assets/tablecard.jpeg';
import mansit from '../assets/mansit.jpeg';

import gmt from '../assets/gmt.png';
import vnox from '../assets/Vnox.jpeg';


import granite from '../assets/granite.jpeg';


export default function TradersSection() {
  const traders = [
       { name: "Ocean Hsieh", role: "TRADER", image: tablecard },
    { name: "Malcolm Wade", role: "TRADER", image: mansit},
    { name: "FARSHAD SHARAFI", role: "TRADER", image: vnox },
    { name: "Granite Supply", role: "TRADER", image: granite },
    { name: "Gmt Stone", role: "TRADER", image: gmt },
 
  ];

  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Scroll to card when dot clicked
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.querySelector(".trader-card").offsetWidth + 16;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  };


  return (
   <section className="traders-section" ref={sectionRef}>
      <div className="traders-container">
              <div className={`traders-header ${animate ? "animate-header" : ""}`}>
          <h2 className="traders-title">
            Traders - Why Traders Choose MAI
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
          </h2>
          <p className="traders-description">
            MAI upholds high standards by vetting all traders, featuring only top professionals. Traders get consistent enquiries, better communication, and tools to boost credibility. With MAI, they grow their client base and manage projects efficiently.
          </p>
        </div>

        {/* Carousel (no manual scroll) */}
        <div className="traders-grid no-manual-scroll" ref={containerRef}>
          {traders.map((trader, index) => (
 <div 
              key={index} 
              className={`trader-card ${animate ? "animate-card" : ""}`} 
              style={{ animationDelay: `${index * 0.3}s` }} // stagger effect
            >              <div className="trader-avatar">
                {trader.image ? (
                  <img 
                    src={trader.image} 
                    alt={`${trader.name} - Trader`} 
                    className="trader-image"
                  />
                ) : trader.logo === "NOX STONE" ? (
                  <div className="trader-logo nox-stone">
                    <span>NOX<br/>STONE</span>
                  </div>
                ) : (
                  <div className="trader-logo granite-supply">
                    <span>Granite<br/>Supply</span>
                  </div>
                )}
              </div>

              {/* Default content */}
              <h3 className="trader-name">{trader.name}</h3>
              <p className="trader-role">{trader.role}</p>

              {/* Hover button */}
              <button className="view-more-btn">View More</button>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {traders.map((_, index) => (
            <div 
              key={index}
              className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        <div className="traders-cta">
          <button className="view-all-traders-btn">View All Traders</button>
        </div>
      </div>
    </section>
  );
}
