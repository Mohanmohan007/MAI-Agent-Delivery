import { useEffect, useRef } from "react"
import "./Hero.css";
// import LandingBG from "../assets/LandingBG.jpeg";
import Slider1 from "../assets/Slider1.jpeg";
import Slider2 from "../assets/Slider2.jpeg";
import Slider3 from "../assets/Slider3.jpeg";
import Slider4 from "../assets/Slider4.jpeg";
import Slider5 from "../assets/Slider5.jpeg";
import Slider6 from "../assets/Slider6.jpeg";
import GasWork from "../assets/GasWork.jpeg";
import LockSmith from "../assets/LockSmith.jpeg";
import wallCladin from "../assets/wallCladin.jpeg";
import Roofing from "../assets/Roofing.jpeg";
import boysbanner from "../assets/boysbanner.png";
import star from "../assets/Exp_Star.png";
import tool from "../assets/Skill_Tool.png";
import project from "../assets/Projects_ToDO.png";
import questionsnew from '../assets/questionnew.png';

const Hero = () => {

    const serviceSectionRef = useRef(null);

    useEffect(() => {
    const section = serviceSectionRef.current;
    const serviceItems = section.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            serviceItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("active");
              }, index * 100); // stagger animation by 100ms each
            });
            observer.disconnect(); // ensure animation runs only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of section is visible
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Service items array for easier duplication
  const serviceItems = [
    { image: Slider3, label: "Painting" },
    { image: Slider4, label: "Door Fitting" },
    { image: Slider5, label: "Landscaping" },
    { image: Slider6, label: "Electrical" },
    { image: GasWork, label: "Gas Works" },
    { image: LockSmith, label: "Locksmith" },
    { image: wallCladin, label: "Wall Cladding" },
    { image: Roofing, label: "Roofing" },
    { image: Slider1, label: "Carpentry" },
    { image: Slider2, label: "Guttering" }
  ];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text animate-text">
              <h1>Connect with highly-rated professionals near you.</h1>
              <p>Get matched with trusted traders at the right price in less time.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">POST PROJECT</button>
                <button className="btn btn-secondary">APPLY INTERNSHIP</button>
              </div>
            </div>
            
            <div className="hero-image animate-image">
              <div className="banner-wrapper">
                <img src={boysbanner} alt="Professional team" />
              </div>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon ree4"><img src={star} alt="Experience" /></div>
              <div className="stat-text">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon ree4"><img src={tool} alt="Professionals" /></div>
              <div className="stat-text">
                <span className="stat-number">20+</span>
                <span className="stat-label">Skilled Professionals</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon ree4"><img src={project} alt="Projects" /></div>
              <div className="stat-text">
                <span className="stat-number">4</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" ref={serviceSectionRef}>
        <div className="services-container">
          <h2>End to End Home Services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></h2>
          <div className="services-grid-wrapper">
            <div className="services-grid">
              {/* First set of service items */}
              {serviceItems.map((service, index) => (
                <div key={`original-${index}`} className="service-item">
                  <div className="service-image">
                    <img src={service.image} alt={service.label} />
                  </div>
                  <span className="service-label">{service.label}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {serviceItems.map((service, index) => (
                <div key={`duplicate-${index}`} className="service-item">
                  <div className="service-image">
                    <img src={service.image} alt={service.label} />
                  </div>
                  <span className="service-label">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;