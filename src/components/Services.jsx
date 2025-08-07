import "./Services.css";
import Po from "../assets/PO.jpeg";
import Trader from "../assets/Trader.jpeg";
import Intern from "../assets/Intern.jpeg";
import { useEffect, useRef, useState } from "react";


const Services = () => {

    const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="services-section333" ref={sectionRef}>
      <div className="services-container333">
   <div
          className={`services-header333 fade-up ${isVisible ? "visible" : ""}`}
        >
          <h2 className="services-title333">
            Leading Innovation in Construction & Property Improvement
          </h2>
          <p className="services-description333">
            MAI is a real-time solution for construction and property
            improvement, pairing individuals and tradespeople for easy project
            completion, paid for free, connect locally, and get the job done on
            your schedule.
          </p>
        </div>

        <div className="services-grid333">
          {/* Project Owner Card */}
 <div
            className={`service-card333 project-owner stagger ${
              isVisible ? "visible" : ""
            }`}
          >            <div className="service-image-container333">
              <img
                src={Po}
                alt="Modern home with professional"
                className="service-image333"
              />
             <div className="service-overlay333 trader-overlay333"></div>
              <div className="service-content333 trader-content333">
                <h3 className="service-title333">Project Owner</h3>

                <p className="service-text333">
                  Ensuring affordability without compromising on quality.
                </p>
                <p className="service-text333-hovered">
                  Register now to find trusted home services and verified
                  traders for free online. With MAI, you get full project
                  transparency from start to finish. Use advanced filters to
                  make faster, smarter decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Trader Card */}
      <div
            className={`service-card333 trader333 stagger ${
              isVisible ? "visible" : ""
            }`}
          >
            <div className="service-image-container333 trader-bg333">
              <img
                src={Trader}
                alt="Construction site background"
                className="service-image333 trader-image333"
              />
              <div className="service-overlay333 trader-overlay333"></div>
              <div className="service-content333 trader-content333">
                <h3 className="service-title333">Trader</h3>
                <p className="service-text333">
                  Viewing the trader's past projects and credentials{" "}
                </p>

                <p className="service-text333-hovered">
                  Over 4 million people are waiting for housing or renovation in
                  the UK, be the one to solve the problem. Register now to grow
                  your client base, boost sales, manage your workload, and get
                  the job done.
                </p>
              </div>
            </div>
          </div>

          {/* Intern Card */}
   <div
            className={`service-card333 intern333 stagger ${
              isVisible ? "visible" : ""
            }`}
          >            <div className="service-image-container333">
              <img
                src={Intern}
                alt="Young professionals working on renovation"
                className="service-image333"
              />
              <div className="service-overlay333 trader-overlay333"></div>
              <div className="service-content333 trader-content333">
                <h3 className="service-title333">Intern</h3>
                <p className="service-text333">
                  Selecting professionals,projects and scheduling.
                </p>
                <p className="service-text333-hovered">
                  Secure your career with MAI. Are you an intern looking to start your career fresh with practical building or home services knowledge? Find everything here. A-Z home services: apply for jobs free & get trained by expells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
