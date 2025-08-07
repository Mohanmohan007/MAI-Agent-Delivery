import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: "dashboard", icon: "fas fa-tachometer-alt", label: "Dashboard", path: "/DashBoard" },
  { id: "howitwork", icon: "fas fa-cogs", label: "How it Work", path: "/how-it-works" },
  { id: "logout", icon: "fas fa-sign-out-alt", label: "Logout", path: "/" },
];


  

function HomeBottom() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleNavClick = (id, path) => {
    setActiveTab(id);
    navigate(path);
  };

  return (
    <motion.div
      className="bottom-navigation"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="nav-container">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleNavClick(item.id, item.path)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Ripple Animation for Active Tab */}
            {activeTab === item.id && (
              <motion.div
                className="active-ripple"
                layoutId="activeBackground"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            <i className={`nav-icon ${item.icon}`}></i>
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </div>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
    </motion.div>
  );
}

export default HomeBottom;
