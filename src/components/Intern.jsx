import React, { useState, useRef, useEffect } from "react";
import "./Intern.css";
import boy from "../assets/boy.jpeg";
import helmet from "../assets/helmet.jpeg";

const interns = [
  { name: "Aditya Bhat", role: "INTERN", image: boy },
  { name: "Gevinn S", role: "INTERN", image: helmet },
  { name: "Piciye Wax", role: "INTERN", initials: "PW" },
   { name: "Vin Wax", role: "INTERN", initials: "VW" }, // For initials card

];

function Intern() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Scroll dots for mobile
  const handleDotClick = (index) => {
    setActiveIndex(index);
    cardRefs.current[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // Trigger animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            section.querySelector(".intern-header").classList.add("animate-header");

            // Animate cards one by one
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("animate-card");
              }, i * 200); // 200ms stagger
            });

            observer.unobserve(section); // Run only once
          }
        });
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="intern-section" ref={sectionRef}>
      <div className="intern-header">
        <h2>
          Interns - <span>Why Intern Choose MAI</span>
        </h2>
        <p>
          MAI offers a transformative experience by connecting Interns with top
          industry experts for hands-on skill training. This opportunity provides
          advanced skill development and exposure to diverse projects, culminating
          in valuable certifications. Perfect for those navigating a competitive
          job market and seeking continuous upskilling.
        </p>

        <button className="view-btnd">View All Interns</button>
      </div>

      <div className="intern-cards">
        {interns.map((intern, index) => (
          <div
            className="intern-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            {intern.image ? (
              <>
                <img src={intern.image} alt={intern.name} className="intern-img" />
                <div className="intern-overlay">
                  <p className="intern-role">{intern.role}</p>
                  <h3 className="intern-name">{intern.name}</h3>
                </div>
              </>
            ) : (
              <div className="intern-initials-card">
                <div className="intern-initials">{intern.initials}</div>
                <div className="intern-overlay">
                  <p className="intern-role">{intern.role}</p>
                  <h3 className="intern-name">{intern.name}</h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots for smaller screen */}
      <div className="intern-dots">
        {interns.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Intern;
