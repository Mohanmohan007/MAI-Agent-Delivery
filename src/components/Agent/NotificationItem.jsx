import { motion } from "framer-motion";
import "./NotificationItem.css";
import neworder from '../../assets/neworder.jpg';
import paymentrecevied from '../../assets/paymentrecevied.jpg'

import systemalert from '../../assets/systemalert.jpg'

import orderdispatched from '../../assets/orderdispatched.jpg'

import newregistered from '../../assets/newregistered.jpg'

import compaid from '../../assets/compaid.jpg'

import ordercomplted from '../../assets/ordercomplted.jpg'
import security from '../../assets/security.jpg'



const notifications = [
  {
    type: "notification-new",
    icon: "fas fa-box",
    title: "New Order Received",
    message: "You have a new order for Premium Granite Slab.",
    time: "5 minutes ago",
    image: neworder,
  },
  {
    type: "notification-payment",
    icon: "fas fa-credit-card",
    title: "Payment Received",
    message: "₹25,000 received from John Doe.",
    time: "10 minutes ago",
    image:paymentrecevied,
  },
  {
    type: "notification-system",
    icon: "fas fa-exclamation-triangle",
    title: "System Alert",
    message: "Server maintenance scheduled at 2 AM.",
    time: "30 minutes ago",
    image: systemalert,
  },
  {
    type: "notification-order",
    icon: "fas fa-truck",
    title: "Order Dispatched",
    message: "Order #ST2024001 is out for delivery.",
    time: "1 hour ago",
    image: orderdispatched,
  },
  {
    type: "notification-new",
    icon: "fas fa-user-plus",
    title: "New Customer Registered",
    message: "Jane Smith just signed up.",
    time: "2 hours ago",
    image: newregistered,
  },
  {
    type: "notification-payment",
    icon: "fas fa-wallet",
    title: "Commission Paid",
    message: "You earned ₹2,000 from the last order.",
    time: "3 hours ago",
    image:compaid,
  },
  {
    type: "notification-order",
    icon: "fas fa-clipboard-check",
    title: "Order Completed",
    message: "Order #ST2023990 has been delivered.",
    time: "Yesterday",
    image:ordercomplted,
  },
  {
    type: "notification-system",
    icon: "fas fa-shield-alt",
    title: "Security Update",
    message: "Your account password was changed.",
    time: "2 days ago",
    image: security,
  },
];

export default function NotificationList() {
  return (
    <div>
      {notifications.map((item, index) => (
        <motion.div
          key={index}
          className={`notification-item ${item.type}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Left: Icon */}
          <div  className="djimllo92dt6">
          <div className="notification-icon">
            <i className={item.icon}></i>
          </div>

         
          <div className="notification-content">
            <div className="notification-title">
              {item.title}
              <span className="notification-badge"></span>
            </div>
            <div className="notification-message">{item.message}</div>
            <div className="notification-time">{item.time}</div>
          </div>

          </div>

          {/* Right: Status Image */}
          <div className="notification-image">
            <img src={item.image} alt="status" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
