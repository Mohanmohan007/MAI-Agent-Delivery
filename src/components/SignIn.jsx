import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { Heart, Activity, TrendingUp } from "lucide-react";
import ston1 from "../assets/ston1.jpg";
import stone5 from "../assets/stone5.jpg";
import stone3 from "../assets/stone3.jpg";

import { useNavigate } from "react-router-dom";

export default function AgentLogin() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const medicalImages = [
    {
      title: "Red Sandstone ",
      subtitle: " Rustic, Strong",
      gradient: "linear-gradient(135deg, #ff6b6b, #ff8e8e)",
      bgImage: ston1,
    },
    {
      title: "Black Granite",
      subtitle: " Luxurious,Durable",
      gradient: "linear-gradient(135deg, #4ecdc4, #44a08d)",
      bgImage: stone5,
    },
    {
      title: "White Marble",
      subtitle: "Elegant, Timeless",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      bgImage: stone3,
    },
  ];

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % medicalImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navigate to HomePage
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="app-container">
      {/* Status Bar */}
      {/* <div className="status-bar">
        <div className="status-left">
          <span className="time">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="status-right">
          <div className="battery-indicator">
            <div className="battery-level"></div>
          </div>
          <div className="signal-bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}

      {/* Left Panel - Slides */}
      <div className="left-panel">
        <div className="medical-background">
          <div className="heartbeat-line"></div>
          <div className="pulse-circles">
            <div className="pulse-circle pulse-1"></div>
            <div className="pulse-circle pulse-2"></div>
            <div className="pulse-circle pulse-3"></div>
          </div>
        </div>

        <div className="sliding-content">
          {medicalImages.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? "active" : ""}`}
              style={{ background: image.gradient }}
            >
              <div className="slide-content-wrapper">
                <div className="slide-content">
                  <div
                    className="slide-bg-image"
                    style={{ backgroundImage: `url(${image.bgImage})` }}
                  ></div>
                  <div className="medical-icon">
                    {index === 0 && <Heart strokeWidth={1.5} size={44} />}
                    {index === 1 && <Activity strokeWidth={1.5} size={44} />}
                    {index === 2 && <TrendingUp strokeWidth={1.5} size={44} />}
                  </div>
                  <h2>{image.title}</h2>
                  <p>{image.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-indicators">
          {medicalImages.map((_, index) => (
            <div
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Panel - Login */}
      <div className="right-panel">
        <div className="form-container">
          <div className="form-header">
            <h1 className="main-title logo-heading">
              <span style={{ marginBottom: "8px" }}>Agent Login</span>
            </h1>
            <p>MAI India World</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            {/* Email */}
            <div className="input-group">
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder=" "
                  className="modern-input login-input has-label"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="loginEmail" className="floating-label">
                  Email
                </label>
                <div className="input-glow"></div>
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-8h-1V7a5 5 0 10-10 0v2H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-7-2a3 3 0 016 0v2H11V7zm7 12H6v-8h12v8z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder=" "
                  className="modern-input login-input has-label"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="loginPassword" className="floating-label">
                  Password
                </label>
                <div className="input-glow"></div>
              </div>
            </div>

            <button type="submit" className="auth-button login-btn">
              Login
            </button>
          </form>

          <div className="login-footer">
            <button className="forgot-password-btn">Forgot Password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
