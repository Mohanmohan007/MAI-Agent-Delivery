import './Blog.css';
import { useEffect, useRef, useState } from 'react';

import floor from '../assets/floor.png';
import tabletops from '../assets/tabletops.jpeg';
import plumbing from '../assets/plumbing.jpeg';
import thumbup from '../assets/thumbup.jpeg';

const Blog = () => {
  const blogs = [
    {  image: plumbing, type: 'featured' },
    {  image: thumbup, type: 'small' },
    {  image: floor, type: 'small' },
    {  image: tabletops, type: 'wide' }
  ];

  
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // Trigger once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
   <section
      className={`blog ${animate ? 'animate' : ''}`}
      id="blogs"
      ref={sectionRef}
    >      <div className="blog-container">
        <div className="section-header-blog">
          <div className='dsudujhas2'>
          <h2>Latest Blog</h2>
          <p>
            Stay informed and smart about valuable insights, practical tips, and the latest industry updates.
            Our knowledge is a range of topics to help you stay informed and make informed decisions.
            Stay into expert advice and stay ahead in the industry with our engaging and informative content.
          </p>
          </div>
          <div>
          <button className='viewasks7d'>View All Blogs</button>
          </div>
        </div>

       

        {/* <div style={{ textAlign: 'center' }}>
          <a href="#" className="btn btn-solid">View All Blogs</a>
        </div> */}

         <div className="blog-grid">
          {/* Left featured card */}
          <div className="blog-card featured">
            <div className="blog-image">
              <img src={blogs[0].image} alt={blogs[0].title} />
            </div>
            <div className="blog-overlay">
              <h3>{blogs[0].title}</h3>
              <p className="hover-text">From Toilet To Radiator: 2025 Plumbing Installation Cost In The UK →</p>
            </div>
          </div>

          {/* Right side nested grid */}
          <div className="right-grid">
            <div className="top-row">
              <div className="blog-card small">
                <div className="blog-image">
                  <img src={blogs[1].image} alt={blogs[1].title} />
                </div>
                <div className="blog-overlay">
                  <h3>{blogs[1].title}</h3>
                  <p className="hover-text">How Long Its takes To Become a Pulmber →</p>
                </div>
              </div>

              <div className="blog-card small">
                <div className="blog-image">
                  <img src={blogs[2].image} alt={blogs[2].title} />
                </div>
                <div className="blog-overlay">
                  <h3>{blogs[2].title}</h3>
                  <p className="hover-text">Bespoke Fllor Boarding In The UK →</p>
                </div>
              </div>
            </div>

            <div className="blog-card wide">
              <div className="blog-image">
                <img src={blogs[3].image} alt={blogs[3].title} />
              </div>
              <div className="blog-overlay">
                <h3>{blogs[3].title}</h3>
                <p className="hover-text">How To Order Table Tops Cut Size In the UK →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
