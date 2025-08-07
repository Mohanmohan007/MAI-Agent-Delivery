import './DIYWorktops.css';
import { useEffect, useRef, useState } from 'react';

import blacktiles from '../assets/blacktiles.jpeg';
import whitetiles from '../assets/whitetiles.jpeg';

import greytiles from '../assets/greytiles.webp';


const DIYWorktops = () => {
  const worktops = [
    { name: 'SAHARA NEGRO POLISHED QUARTZ', image: blacktiles },
    { name: 'ES CALACATTA GOLD POLISHED SILESTONE', image: whitetiles },
    { name: 'ACQUAMARINA POLISHED MARBLE', image: greytiles }
  ];


    const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // Run once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
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
      className={`diy-worktops ${animate ? 'animate' : ''}`}
      id="diy-worktops"
      ref={sectionRef}
    >      <div className="container-diy">
        <div className="section-header-diy">
          <h2>DIY WORKTOPS</h2>
          <p>Looking for a quick and affordable way to update your kitchen? Use our do-it-themselves - real tales of do-and-Can make a lot of difference. You can try many things to freshen up your countertops and give your kitchen a new look. If you want to upgrade your kitchen on a budget, you need these super simple and cost-effective DIY countertop ideas.</p>
        </div>

        <div className="worktops-grid">
          {worktops.map((worktop, index) => (
 <div
              key={index}
              className="worktop-cardnew"
              style={{ animationDelay: `${index * 0.5}s` }} // stagger effect
            ><div className="worktop-image">
  <img src={worktop.image} alt={worktop.name} />
</div>              <h4>{worktop.name}</h4>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center'}}>
          <button  className="viewasks7d">View DIY Worktops</button>
        </div>
      </div>
    </section>
  );
};

export default DIYWorktops;
