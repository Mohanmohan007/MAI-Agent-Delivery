import { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/Logo.webp";
import Download1 from "../assets/download.jpeg";
import Download2 from "../assets/download2.jpeg";

import Download3 from "../assets/download3.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 910);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenuddd = () => {
    navigate("/");
    closeMobileMenu();
  };

  const jsdkjj = () =>{
       navigate("/");
    closeMobileMenu();
  };
  

  return (
    <header className="header">
      {/* <div className="header-container"> */}
        {/* Top section with logo and auth buttons */}
        <div className="header-top">
          {/* Logo */}
          <div className="logo-y56">
            <img src={Logo}></img>
          </div>

          {!isMobile && (
            <div className="auth-buttons">
              <button className="btn-login" onClick={jsdkjj}>Log Out</button>
            </div>
          )}

          {isMobile && (
            <div className="mobile-left-controls">
              {/* <button
                className="efefefer"
                onClick={goToCart}
                aria-label="Go to cart"
              >
                DashBoard
              </button> */}
              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          )}

          {/* On desktop: only menu toggle (if needed) */}
          {!isMobile && (
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}
        </div>

        {/* Bottom section with navigation and action buttons */}
     

        {/* Mobile overlay */}
        <div
          className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile navigation - slides from right */}
        <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
          {/* Mobile menu header */}
          <div className="mobile-menu-header">
            <div className="mobile-logo">
            <img src={Logo}></img>
            </div>
            <button className="mobile-close-btn" onClick={closeMobileMenu}>
              ×
            </button>
          </div>

          {/* Mobile navigation menu */}
          <ul className="mobile-nav-menu">
            <li>
              <a href="#home" onClick={closeMobileMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={closeMobileMenu}>
                HOW IT WORKS
              </a>
            </li>
            {/* <li>
              <a href="#projects" onClick={closeMobileMenu}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#blogs" onClick={closeMobileMenu}>
                BLOGS
              </a>
            </li>
            <li>
              <a href="#diy-worktops" onClick={closeMobileMenu}>
                DIY WORKTOPS
              </a>
            </li> */}
          </ul>

          {/* Mobile action buttons */}
          {/* <div className="mobile-actions">
            <button className="mobile-action-btn" onClick={closeMobileMenu}>
              <span className="mobile-action-icon">📋</span>
              POST A PROJECT
            </button>
            <button className="mobile-action-btn" onClick={closeMobileMenu}>
              <span className="mobile-action-icon round">👤</span>
              APPLY INTERNSHIP
            </button>
          </div> */}

          {/* Mobile auth buttons */}
          <div className="mobile-auth">
            {/* <button className="btn-signup" onClick={closeMobileMenu}>
              Sign Up
            </button> */}
            <button className="btn-login" onClick={closeMobileMenuddd}>
              Log Out
            </button>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
