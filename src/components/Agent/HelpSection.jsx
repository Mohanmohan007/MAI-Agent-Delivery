import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HelpSection.css";
import customersupport from '../../assets/customersupport.jpg';

const mergedFaqs = [
  {
    question: "How do I accept a new order?",
    answer:
      "Go to the Orders tab, find the pending order, and tap 'Accept'. Ensure you're available before accepting.",
  },
  {
    question: "How does the live tracking work?",
    answer:
      "It uses your device's GPS to show real-time location to customers automatically during delivery.",
  },
  {
    question: "What types of stones do you supply?",
    answer:
      "We supply granite, marble, sandstone, limestone, and other natural stones sourced across India.",
  },
  {
    question: "When do I get paid for deliveries?",
    answer:
      "Payments are processed weekly on Mondays to your registered bank account.",
  },
  {
    question: "What if there's an issue with the order?",
    answer:
      "Use the call or chat support immediately. Do not proceed if items are damaged or incorrect.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, certified installers are available in major cities. You can request this while ordering.",
  },
];

export default function HelpSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [queryForm, setQueryForm] = useState({
    queryType: "",
    orderNumber: "",
    message: "",
    customerEmail: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (field, value) => {
    setQueryForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    if (!queryForm.queryType || !queryForm.message) {
      alert("Please fill in the query type and message.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      alert("Your query has been submitted. We’ll respond within 24 hours.");
      setQueryForm({ queryType: "", orderNumber: "", message: "", customerEmail: "" });
      setSubmitting(false);
    }, 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {/* Quick Support */}
      <div className="help-section">

<div className="ewhjyy670krr4f">
  <img src={customersupport}></img>
</div>

        <h3 className="help-title">Quick Support</h3>
        <div className="contact-options">
          <a href="tel:+919876543210" className="contact-button">
            <i className="fas fa-phone contact-icon"></i> Call Support
          </a>
          <a href="#" className="contact-button" onClick={(e) => { e.preventDefault(); alert("Chat support coming soon!"); }}>
            <i className="fas fa-comments contact-icon"></i> Live Chat
          </a>
        </div>
      </div>


      <div className="support-schedule-card">
  <h4 className="support-schedule-title">Support Schedule</h4>
  <ul className="support-schedule-list">
    {[
      { day: "Monday", status: "Work" },
      { day: "Tuesday", status: "Work" },
      { day: "Wednesday", status: "Work" },
      { day: "Thursday", status: "Work" },
      { day: "Friday", status: "Work" },
      { day: "Saturday", status: "Work" },
      { day: "Sunday", status: "Leave" },
    ].map((entry, idx) => (
      <li key={idx} className="support-schedule-item">
        <span className="schedule-day">{entry.day}</span>
        <span className={`schedule-status ${entry.status === "Work" ? "work" : "leave"}`}>
          {entry.status === "Work" ? "9:00 AM – 6:00 PM" : "Leave"}
        </span>
      </li>
    ))}
  </ul>
</div>



      {/* FAQ Section */}
      <div className="help-section">
        <h3 className="help-title">Frequently Asked Questions</h3>
        {mergedFaqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <motion.i
                className="fas fa-chevron-down"
                animate={{ rotate: openFaq === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ float: "right" }}
              ></motion.i>
            </button>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Submit Your Query */}
      <div className="help-section">
        <h3 className="help-title">Submit Your Query</h3>
        <form onSubmit={handleSubmitQuery}>
          <div className="form-group drfgregre3">
            <label>Query Type</label>
            <select
              className="form-select"
              value={queryForm.queryType}
              onChange={(e) => handleInputChange("queryType", e.target.value)}
            >
              <option value="">Select query type</option>
              <option value="order_support">Order Support</option>
              <option value="product_inquiry">Product Inquiry</option>
              <option value="payment_issue">Payment Issue</option>
              <option value="technical_support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Order Number (Optional)</label>
            <input
              type="text"
              className="form-input"
              value={queryForm.orderNumber}
              onChange={(e) => handleInputChange("orderNumber", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email (Optional)</label>
            <input
              type="email"
              className="form-input"
              value={queryForm.customerEmail}
              onChange={(e) => handleInputChange("customerEmail", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              className="form-textarea"
              value={queryForm.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
          </div>
          <button className="submit-btn" type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Query"}
          </button>
        </form>
      </div>

      {/* Emergency Contact */}
      <div className="help-section emergency-section">
        <div className="emergency-title">
          <i className="fas fa-exclamation-triangle"></i> Emergency Support
        </div>
        <div className="emergency-content">
          For urgent issues during delivery, contact us 24/7.
          <br />
          <a href="tel:+911234567890" className="emergency-phone">
            <i className="fas fa-phone"></i> +91 123-456-7890
          </a>
        </div>
      </div>

      {/* App Info */}
      <div className="help-section">
        <h3 className="help-title">App Information</h3>
        <div className="stone-card">
          <div className="order-details">
            <div className="detail-item">
              <div className="detail-label">Version</div>
              <div className="detail-value">2.1.0</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Last Updated</div>
              <div className="detail-value">Mar 15, 2024</div>
            </div>
          </div>
          <div style={{width:'100%',display:'flex',justifyContent:'center', textAlign: "center", marginTop: "16px" }}>
            <motion.button
              className="stone-btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => alert("Check for updates functionality will be added soon.")}
            >
              <i className="fas fa-download"></i> Check for Updates
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
