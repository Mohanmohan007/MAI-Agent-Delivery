import { motion } from "framer-motion";
import "./OrderCard.css";

export default function OrderCard({ order, onViewDetails }) {
  // Helper functions
  const getStatusColor = (status) => {
    if (!status) return "status-pending";
    switch (status) {
      case "pending":
        return "status-pending";
      case "in_progress":
        return "status-progress";
      case "delivered":
        return "status-delivered";
      default:
        return "status-pending";
    }
  };

  const getStatusText = (status) => {
    if (!status) return "Unknown";
    switch (status) {
      case "pending":
        return "Pending";
      case "in_progress":
        return "In Progress";
      case "delivered":
        return "Delivered";
      default:
        return "Unknown";
    }
  };

  const formatTime = (time) => {
    if (!time) return "Not Scheduled";
    const date = new Date(time);
    if (isNaN(date.getTime())) return "Invalid Time";

    return `${date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}, ${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`;
  };

  const formatCurrency = (amount) => {
    if (amount == null || isNaN(amount)) return "₹0";
    return `₹${parseFloat(amount).toLocaleString()}`;
  };

  const formatQuantity = (qty, unit) => {
    if (qty == null || isNaN(qty)) return "0";
    return `${parseFloat(qty)} ${unit || ""}`.trim();
  };

  // Dummy handlers (UI only)
  const handleAccept = () => alert(`Accepted Order #${order.orderNumber}`);
  const handleReject = () => alert(`Rejected Order #${order.orderNumber}`);
  const handleMarkDelivered = () =>
    alert(`Marked Delivered Order #${order.orderNumber}`);

  return (
    <motion.div
      style={{
        backgroundImage: order.bgImage ? `url(${order.bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="order-card stone-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      {/* Order Header */}
      <div className="order-header">
        <div className="order-id">#{order.orderNumber}</div>
        <div className={`order-status ${getStatusColor(order.deliveryStatus)}`}>
          {getStatusText(order.deliveryStatus)}
        </div>
      </div>

      {/* Customer Info */}
      <div className="customer-info">
        <div className="customer-name">{order.customer.name}</div>
        <div className="customer-address">
          {order.customer.address || "No Address Provided"}
        </div>
      </div>

      {/* Order Details */}
      <div className="order-details">
        <div className="detail-item">
          <div className="detail-label">Product</div>
          <div className="detail-value">{order.product.name}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Quantity</div>
          <div className="detail-value">
            {formatQuantity(order.quantity, order.product.unit)}
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Payment</div>
          <div className="detail-value">
            {order.paymentMethod === "COD" ? "COD" : "Paid"} -{" "}
            {formatCurrency(order.totalAmount)}
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Time</div>
          <div className="detail-value">{formatTime(order.scheduledTime)}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="order-actions">
        {/* Pending order (not assigned) */}
        {order.deliveryStatus === "pending" && !order.agentId && (
          <>
            <button className="stone-btn btn-success" onClick={handleAccept}>
              <i className="fas fa-check"></i>
              Accept
            </button>
            <button className="stone-btn btn-danger" onClick={handleReject}>
              <i className="fas fa-times"></i>
              Reject
            </button>
          </>
        )}

        {/* In Progress */}
        {order.deliveryStatus === "in_progress" && (
          <>
            <button
              className="stone-btn btn-primary"
              onClick={() => onViewDetails(order)}
            >
              <i className="fas fa-map-marker-alt"></i>
              Track Route
            </button>
            <button
              className="stone-btn btn-success"
              onClick={handleMarkDelivered}
            >
              <i className="fas fa-check"></i>
              Mark Delivered
            </button>
          </>
        )}

        {/* Pending/Accepted with agent */}
        {(order.deliveryStatus === "pending" ||
          order.deliveryStatus === "accepted") &&
          order.agentId && (
            <button
              className="stone-btn btn-primary"
              onClick={() => onViewDetails(order)}
              style={{ width: "100%" }}
            >
              <i className="fas fa-eye"></i>
              View Details
            </button>
          )}

        {/* Delivered */}
        {order.deliveryStatus === "delivered" && (
          <button
            className="stone-btn btn-secondary"
            onClick={() => onViewDetails(order)}
            style={{ width: "100%" }}
          >
            <i className="fas fa-check-circle"></i>
            Delivery Complete
          </button>
        )}
      </div>
    </motion.div>
  );
}
