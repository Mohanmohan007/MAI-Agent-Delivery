import './Footer.css';
import maiboldblue from '../assets/MAI_Bold_blue.png'
import { useEffect, useRef, useState } from 'react';

import fb from '../assets/fb.png'

import x from '../assets/x.png'

import youtube from '../assets/youtubr.png'
import lik from '../assets/lik.png'


import whts from '../assets/whts.png'

import intagram from '../assets/instagram.png'


const Footer = () => {

    const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);


  return (
    <footer ref={footerRef} className={`footer ${isVisible ? 'visible' : ''}`}>
     <div className="container">
        <div className="footer-content">
          {/* Left Section - Logo and Description */}
          <div className="footer-section footer-about">
            <img src={maiboldblue} alt="MAI Logo" className="footer-logo-img" />
            <p>
              MAI is a premier Project Management technology designed to seamlessly connect Project Owners with certified, skilled Traders...{' '}
              <a href="#" className="link-blue">Read more</a>
            </p>
          </div>

          {/* Middle Section - Information Links */}
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">CSR</a></li>
            </ul>
          </div>

          {/* Shopping Guide */}
          <div className="footer-section">
            <h4>Shopping Guide</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">NDA</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contacts</h4>
            <p>
              MAI Corporation Ltd, 1 De La Warr Way<br />
              Cambourne, Cambridge CB23 6DX
            </p>
            <p className="contact-phone">+44 0208 004 3345</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><img src={fb}></img></a>
              <a href="#" aria-label="X"><img src={x}></img></a>
              <a href="#" aria-label="YouTube"><img src={youtube}></img></a>
              <a href="#" aria-label="Instagram"><img src={whts}></img></a>
              <a href="#" aria-label="LinkedIn"><img src={intagram}></img></a>
              <a href="#" aria-label="WhatsApp"><img src={lik}></img></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright Myproject.Ai All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
