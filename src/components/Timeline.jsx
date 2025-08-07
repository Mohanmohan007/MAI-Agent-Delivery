import "./Timeline.css";
import { useEffect, useRef, useState } from "react";

import Milestone1 from '../assets/Milestone1.jpeg';
import Milestone2 from '../assets/Milestone2.jpeg';
import Milestone3 from '../assets/Milestone3.jpeg';
import Milestone4 from '../assets/Milestone4.jpeg';
import Milestone5 from '../assets/Milestone5.jpeg';
import Milestone6 from '../assets/Milestone6.jpeg';
import Milestone7 from '../assets/Milestone7.jpeg';

export default function Timeline() {
  const milestones = [
    { year: "2011", title: "Began Granite Importing", image: Milestone1, height: "130px" },
    { year: "2013", title: "Secured Top  Partnership", image: Milestone2, height: "180px" },
    { year: "2015", title: "UK-Wide Distribution", image: Milestone3, height: "220px" },
    { year: "2017", title: "Launched B2B Marketplace", image: Milestone4, height: "260px" },
    { year: "2020", title: "Introduced B2C Marketplace", image: Milestone5, height: "300px" },
    { year: "2022", title: "Gained Nationwide Recognition", image: Milestone6, height: "350px" },
    { year: "2024", title: "Birth of the MAI INDIA", image: Milestone7, height: "400px" },
  ];

    const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // Trigger only once
          }
        });
      },
      { threshold: 0.2 } // When 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
 <section
      className={`milestone-section ${animate ? "animate" : ""}`}
      ref={sectionRef}
    >
      <div className="milestone-header">
        <h2 className="milestone-title">MAI Milestone</h2>
      </div>

      <div className="timeline">
        {milestones.map((milestone, index) => (
 <div
            key={index}
            className={`milestone-item`}
            style={{ animationDelay: `${index * 0.5}s` }} // Stagger effect
          >            {/* Year at top */}
            <div className="milestone-year">{milestone.year}</div>

            {/* Bar */}
            <div
              className="milestone-bar"
              style={{
                height: milestone.height,
                backgroundImage: `url(${milestone.image})`,
              }}
            ></div>

            {/* Description at bottom */}
            <div className="milestone-description">{milestone.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
