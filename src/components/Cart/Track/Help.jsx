import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [queryForm, setQueryForm] = useState({
    queryType: '',
    orderNumber: '',
    message: '',
    customerEmail: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const faqs = [
    {
      id: 'tracking',
      question: 'How can I track my stone order?',
      answer: 'You can track your order in real-time using our Order Tracking page. Simply enter your order number or access it through your account dashboard.'
    },
    {
      id: 'types',
      question: 'What types of stones do you supply?',
      answer: 'We supply premium granite, marble, sandstone, limestone, and other natural stones from quarries across India. All stones are quality tested and certified.'
    },
    {
      id: 'payment',
      question: 'What are your payment options?',
      answer: 'We accept all major payment methods including bank transfers, UPI, credit/debit cards, and for bulk orders, we offer credit terms for verified businesses.'
    },
    {
      id: 'installation',
      question: 'Do you provide installation services?',
      answer: 'Yes, we have a network of certified installers across major cities. Installation services can be arranged at the time of order placement.'
    },
    {
      id: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 7 days of delivery for defective or damaged products. Custom-cut stones are non-returnable unless there\'s a manufacturing defect.'
    }
  ];

  const handleFaqToggle = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const handleInputChange = (field, value) => {
    setQueryForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    
    if (!queryForm.queryType || !queryForm.message) {
      alert('Please fill in the query type and message fields.');
      return;
    }

    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Your query has been submitted successfully. We\'ll get back to you within 24 hours.');
      setQueryForm({ queryType: '', orderNumber: '', message: '', customerEmail: '' });
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="help-page">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">MAI INDIA</h1>
          <p className="header-subtitle">Premium Stone Supplier</p>
        </div>
      </header>

      <nav className="tab-navigation">
        <div className="tab-container">
          <button className="tab-btn">Order Tracking</button>
          <button className="tab-btn">Notifications</button>
          <button className="tab-btn active">Help</button>
        </div>
      </nav>

      <div className="main-container">
        <div className="grid-layout">
          {/* Left Column */}
          <div className="left-column">
            <div className="help-header-card">
              <h2>Help & Support</h2>
              <p>We're here to help you with your stone orders and queries</p>
            </div>

            <div className="quick-actions-card">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-card chat-action">
                  <div className="action-icon chat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <div className="action-content">
                    <p className="action-title">Start Live Chat</p>
                    <p className="action-subtitle">Chat with our support team</p>
                  </div>
                </button>
                
                <button className="action-card call-action">
                  <div className="action-icon call-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="action-content">
                    <p className="action-title">Call Support</p>
                    <p className="action-subtitle">+91 1800-123-4567</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon phone-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <p className="contact-title">Phone Support</p>
                    <p className="contact-info">+91 1800-123-4567</p>
                    <p className="contact-hours">Mon-Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon email-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <p className="contact-title">Email Support</p>
                    <p className="contact-info">support@maiindia.com</p>
                    <p className="contact-hours">Response within 24 hours</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon location-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <p className="contact-title">Head Office</p>
                    <p className="contact-info">MAI Stone Plaza, Sector 18<br />Rajasthan, India - 302018</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hours-card">
              <h3 className="hours-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Operating Hours
              </h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time closed">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="faq-card">
              <div className="faq-header">
                <h3>Frequently Asked Questions</h3>
                <p>Find answers to common questions about our stone products and services</p>
              </div>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => handleFaqToggle(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg 
                        className={`faq-chevron ${openFaq === faq.id ? 'rotated' : ''}`}
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                      </svg>
                    </button>
                    {openFaq === faq.id && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="query-card">
              <div className="query-header">
                <h3>Submit Your Query</h3>
                <p>Can't find what you're looking for? Send us a message and we'll get back to you</p>
              </div>
              <form onSubmit={handleSubmitQuery} className="query-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="queryType">Query Type</label>
                    <select
                      id="queryType"
                      value={queryForm.queryType}
                      onChange={(e) => handleInputChange('queryType', e.target.value)}
                      className="form-select"
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
                    <label htmlFor="orderNumber">Order Number (Optional)</label>
                    <input
                      id="orderNumber"
                      type="text"
                      placeholder="e.g., ST2024001"
                      value={queryForm.orderNumber}
                      onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={queryForm.customerEmail}
                    onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Describe your query in detail..."
                    value={queryForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="submit-btn"
                >
                  {submitting ? 'Submitting...' : 'Submit Query'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;