import { useEffect, useRef, useState } from "react";
import './Projects.css';
import tiles1 from '../assets/tiles1.png';
import tiles2 from '../assets/tiles2.png';
import tiles3 from '../assets/tiles3.jpeg';
import tiles4 from '../assets/tiles4.jpeg';
import tiles5 from '../assets/tiles5.png';
import tiles6 from '../assets/tiles6.jpeg';

const projectData = [
  { img: tiles1, title: 'Cut & Delivery Required', location: 'Greater Manchester, England', height: 'tall' },
  { img: tiles2, title: 'Bathroom Renovation', location: 'London, England', height: 'medium' },
  { img: tiles3, title: 'Kitchen Worktop Installation', location: 'Leeds, England', height: 'short' },
  { img: tiles4, title: 'Wall Tile Replacement', location: 'Liverpool, England', height: 'tall' },
  { img: tiles5, title: 'Marble Countertop Fitting', location: 'Bristol, England', height: 'medium' },
  { img: tiles6, title: 'Custom Tile Work', location: 'Manchester, England', height: 'short' },
];

const Projects = () => {

    const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Runs only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  return (
    <section className="projects-projects" id="projects" ref={sectionRef}>
      <div className="projects_container">
  <div className={`section-header-projects ${animate ? "animate-header" : ""}`}>  
            <h2>Our Projects</h2>
          <p>
            With us, you're in control. MAI offers a user-friendly AI platform designed for simplicity and effective pairing. We believe in uncompromised excellence, matching every task, big or small, with the right expertise. Take your time, review estimates and profiles, and choose the perfect fit. It's not just connecting, it's finding the right trader with the right skills and passion.
          </p>
        </div>

        {/* Masonry-Style Project Grid */}
        <div className="projects-grid-projects">
          {projectData.map((project, index) => (
            <div className={`project-card-projects ${project.height} ${animate ? "animate-card" : ""}`} key={index}>
              <div className="card-image-projects">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="overlay-projects">
                <div className="overlay-content-projects">
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container-projects">
          <button className="viewasks7d">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;