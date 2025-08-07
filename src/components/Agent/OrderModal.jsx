import { motion } from "framer-motion";
import "./OrderModal.css";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};

const pickupIcon = {
  url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  scaledSize: { width: 40, height: 40 },
};

const deliveryIcon = {
  url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  scaledSize: { width: 40, height: 40 },
};

export default function OrderModal({ order, onClose }) {

  const formatTime = (time) => {
  if (!time) return "Not set";
  const date = new Date(time);
  return isNaN(date.getTime())
    ? "Invalid Time"
    : date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
};
const formatCurrency = (amount) => {
  if (!amount || isNaN(amount)) return "₹0";
  return `₹${parseFloat(amount).toLocaleString()}`;
};



const pickupCoords = order.pickupLocation?.coords || { lat: 20.59, lng: 78.96 };
const deliveryCoords = order.deliveryLocation?.coords || { lat: 20.61, lng: 78.98 };


  const routePath = [pickupCoords, deliveryCoords];

  const getDeliveryProgress = () => [
    {
      id: 1,
      title: "Order Accepted",
      time: "10:30 AM",
      completed: ["accepted", "in_progress", "delivered"].includes(order.deliveryStatus),
      icon: "fas fa-clipboard-check"
    },
    {
      id: 2,
      title: "Items Picked Up",
      time: "Pending",
      completed: ["in_progress", "delivered"].includes(order.deliveryStatus),
       icon: "fas fa-box"
    },
    {
      id: 3,
      title: "En Route to Customer",
      time: "In Progress",
      completed: order.deliveryStatus === "delivered",
      current: order.deliveryStatus === "in_progress",
        icon: "fas fa-truck"
    },
    {
      id: 4,
      title: "Delivered",
      time: order.deliveryStatus === "delivered" ? "12:15 PM" : "Pending",
      completed: order.deliveryStatus === "delivered",
       icon: "fas fa-flag-checkered"
    },
  ];

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">Order Details - #{order.orderNumber}</div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="stone-card" style={{ marginBottom: "20px" }}>
          <div className="customer-info">
            <div className="customer-name">{order.customer.name}</div>
            <div className="customer-address">{order.customer.address}</div>
          </div>
          <div className="order-details">
            <div className="detail-item">
              <div className="detail-label">Product</div>
              <div className="detail-value">{order.product.name}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Quantity</div>
              <div className="detail-value">
{order.quantity ? `${parseFloat(order.quantity)} ${order.product.unit}` : "Not specified"}
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Total Amount</div>
<div className="detail-value">
  {order.totalAmount
    ? formatCurrency(order.totalAmount)
    : "₹0"}
</div>

            </div>
            {/* <div className="detail-item">
  <div className="detail-label">Time</div>
  <div className="detail-value">{formatTime(order.scheduledTime)}</div>
</div> */}
            <div className="detail-item">
              <div className="detail-label">Payment</div>
              <div className="detail-value">
                {order.paymentMethod} - {order.paymentStatus === "paid" ? "Paid" : "Pending"}
              </div>
            </div>
          </div>
        </div>

        <LoadScript googleMapsApiKey="AIzaSyCfvQhSYROLEj3gLeOYxAhJ7k5Lre4T42M">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={pickupCoords}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry",
                  stylers: [{ color: "#f2f2f2" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
              ],
            }}
          >
            <Marker position={pickupCoords} icon={pickupIcon} title="Pickup Location" />
            <Marker position={deliveryCoords} icon={deliveryIcon} title="Delivery Location" />
            <Polyline
              path={routePath}
              options={{
                strokeColor: "#1976D2",
                strokeOpacity: 0.8,
                strokeWeight: 4,
                icons: [
                  {
                    icon: { path: window.google?.maps.SymbolPath.FORWARD_OPEN_ARROW },
                    offset: "100%",
                    repeat: "20px",
                  },
                ],
              }}
            />
          </GoogleMap>
        </LoadScript>

        {order.pickupLocation && order.deliveryLocation && (
          <div className="route-info">
            <div className="route-item">
              <div className="route-dot route-start"></div>
              <div className="route-text">
                <strong>Pickup:</strong> {order.pickupLocation.address}
              </div>
            </div>
            <div className="route-item">
              <div className="route-dot route-end"></div>
              <div className="route-text">
                <strong>Delivery:</strong> {order.deliveryLocation.address}
              </div>
            </div>
          </div>
        )}

        <div className="delivery-progress">
        {getDeliveryProgress().map((step) => (
    <div key={step.id} className="progress-step">
      <div
        className={`progress-icon ${
          step.completed
            ? "progress-completed"
            : step.current
            ? "progress-current"
            : "progress-pending"
        }`}
      >
        <i className={step.icon}></i>
      </div>
      <div className="progress-text">
        <div className="progress-title">{step.title}</div>
        <div className="progress-time">{step.time}</div>
      </div>
    </div>
  ))}
        </div>

        <div className="order-actions">
          {order.deliveryStatus === "pending" || order.deliveryStatus === "accepted" ? (
            <button className="stone-btn btn-success" style={{ width: "100%" }}>
              <i className="fas fa-play"></i>
              Start Delivery
            </button>
          ) : order.deliveryStatus === "in_progress" ? (
            <>
              <button className="stone-btn btn-success">
                <i className="fas fa-check"></i>
                Mark as Delivered
              </button>
              <button className="stone-btn btn-secondary">
                <i className="fas fa-phone"></i>
                Call Customer
              </button>
            </>
          ) : (
            <button className="stone-btn btn-secondary" style={{ width: "100%" }}>
              <i className="fas fa-check-circle"></i>
              Delivery Complete
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
