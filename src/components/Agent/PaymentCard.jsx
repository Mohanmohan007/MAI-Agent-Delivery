import { motion } from "framer-motion";
import "./PaymentCard.css";
import scatered6 from '../../assets/scatered6.jpg';

export default function PaymentCard() {
  return (
    <motion.div
      className="payment-card"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      {/* Background Image */}
<img src={scatered6} alt="background" className="payment-background-img" />

      {/* Card Content */}
      <div className="payment-content">
        {/* Header */}
        <div className="payment-header">
          <div className="payment-order">#ST2024001</div>
          <div className="payment-status">Paid</div>
        </div>

        {/* Customer Info */}
        <div className="payment-customer">
          <div className="payment-customer-name">John Doe</div>
          <div className="payment-customer-address">
            Delivered on Aug 6, 2025
          </div>
        </div>

        {/* Details */}
        <div className="payment-details">
          <div className="payment-field">
            <div className="payment-label">Product</div>
            <div className="payment-value">Premium Granite Slab</div>
          </div>
          <div className="payment-field">
            <div className="payment-label">Payment Method</div>
            <div className="payment-value">Online Payment</div>
          </div>
          <div className="payment-field">
            <div className="payment-label">Amount</div>
            <div className="payment-value">₹25,000</div>
          </div>
          <div className="payment-field">
            <div className="payment-label">Commission</div>
            <div className="payment-value payment-commission">₹2,000</div>
          </div>
        </div>

        {/* Footer */}
        <div className="payment-footer">
          <div className="payment-date">Processed on Aug 6, 2025</div>
        </div>
      </div>
    </motion.div>
  );
}
