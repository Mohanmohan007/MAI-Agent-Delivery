import { motion } from "framer-motion";
import "./BottomNavigation.css";
import { useNavigate } from "react-router-dom";


const navItems = [

    { id: "products", icon: "fas fa-home", label: "Home" },

  { id: "orders", icon: "fas fa-clipboard-list", label: "Orders" },

  // { id: "payments", icon: "fas fa-wallet", label: "Payments" },
  { id: "notifications", icon: "fas fa-bell", label: "Alerts" },
  // { id: "help", icon: "fas fa-question-circle", label: "Help" },
];



export default function BottomNavigation({ activeTab = "orders", onTabChange }) {
  const navigate = useNavigate();
    const handleTabClick = (id) => {
    if (id === "products") {
      navigate("/Home"); // Navigate to Home page
    } else {
      onTabChange && onTabChange(id);
    }
  };

  return (
    <div className="bottom-navigation">
      <div className="nav-container">
       {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleTabClick(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`nav-icon ${item.icon}`}></i>
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
