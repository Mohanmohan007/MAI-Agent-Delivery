import React, { useState, useEffect } from "react";
import "./OrderTraking.css";

// Import status images
import succesD from "../../../assets/succesD.jpg";
import dispatchedD from "../../../assets/dispatchedD.jpg";
import outD from "../../../assets/outD.jpg";
import cpmdD from "../../../assets/cpmdD.jpg";

const OrderTraking = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrder({
        orderNumber: "ST2024001",
        productName: "Premium Granite Slabs - Black Galaxy",
        amount: 45000,
        status: "out_for_delivery",
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        customerAddress: "123 Building Street, Mumbai, Maharashtra 400001",
        agentName: "Rajesh Kumar",
        agentPhone: "+91 98765 43210",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusInfo = (status) => {
    const statusMap = {
      placed: {
        label: "Order Placed",
        className: "status-placed-88",
        img: succesD,
        place: "Mumbai Warehouse",
        timeOffset: -48,
      },
      dispatched: {
        label: "Dispatched",
        className: "status-dispatched-88",
        img: dispatchedD,
        place: "Mumbai Sorting Center",
        timeOffset: -24,
      },
      out_for_delivery: {
        label: "Out for Delivery",
        className: "status-delivery-88",
        img: outD,
        place: "En Route to Destination",
        timeOffset: -2,
      },
      delivered: {
        label: "Delivered",
        className: "status-delivered-88",
        img: cpmdD,
        place: "Customer Address",
        timeOffset: 0,
      },
    };
    return statusMap[status] || statusMap.placed;
  };

  const formatDeliveryTime = (date) => {
    return new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const formatStageTime = (hoursOffset) => {
    const date = new Date(Date.now() + hoursOffset * 60 * 60 * 1000);
    return new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  if (loading) {
    return (
      <div className="order-tracking-88">
        <div className="loading-container-88">
          <div className="loading-card-88"></div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-tracking-88">
        <div className="empty-state-88">
          <h3>No Active Orders</h3>
          <p>You don't have any active orders to track.</p>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusInfo(order.status);

  return (
    <div className="order-tracking-88">
      <div className="main-container-88">
        <div className="grid-layout-88">
          {/* LEFT COLUMN */}
          <div className="left-column-88 fade-in-card">
            {/* Order Info Card */}
            <div className="order-card-88">
              <div className="order-header-88">
                <h2>Order #{order.orderNumber}</h2>
                <p className="product-name-88">{order.productName}</p>
                <p className="order-amount-88">
                  ₹{order.amount.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="status-img-wrapper-88">
                <img
                  src={statusInfo.img}
                  alt={statusInfo.label}
                  className="status-img-88"
                />
              </div>

              <div className="order-status-88">
                <span className="status-label-88">Status:</span>
                <span className={`status-badge-88 ${statusInfo.className}`}>
                  <span className="status-dot-88"></span>
                  {statusInfo.label}
                </span>
              </div>

              <div className="delivery-info-88">
                <span className="delivery-label-88">Expected Delivery:</span>
                <span className="delivery-time-88">
                  {formatDeliveryTime(order.estimatedDelivery)}
                </span>
              </div>

              <div className="address-info-88">
                <p className="address-label-88">Delivery Address:</p>
                <p className="address-text-88">{order.customerAddress}</p>
              </div>
            </div>

            {/* Delivery Agent */}
            {order.agentName && (
              <div className="agent-card-88 fade-in-card">
                <h3>Delivery Agent</h3>
                <div className="agent-info-88">
                  <div className="agent-details-88">
                    <div className="agent-avatar-88">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="agent-name-88">{order.agentName}</p>
                      <p className="agent-phone-88">{order.agentPhone}</p>
                    </div>
                  </div>
                  <div className="agent-actions-88">
                    <button className="action-btn-88 call-btn-88">Call</button>
                    <button className="action-btn-88 message-btn-88">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* NEW: Order Details Section */}
            <div className="details-card-88 fade-in-card">
              <h3>Order Details</h3>
              <ul>
                <li><strong>Quantity:</strong> 20 Slabs</li>
                <li><strong>Size:</strong> 600mm x 600mm</li>
                <li><strong>Finish:</strong> Polished</li>
              </ul>
            </div>

            {/* NEW: Product Gallery Section */}
          {/* Customer Reviews Section */}
{/* Customer Reviews - Full Width */}
<div className="reviews-section-88">
  <h3 className="reviews-title-88">Customer Reviews</h3>

  {/* Rating Summary */}
  <div className="reviews-summary-88">
    <div className="reviews-score-88">
      <span className="score-88">4.6</span>
      <div className="stars-88">
        {'★'.repeat(4)}<span className="half-star-88">★</span>
      </div>
      <p>Based on 32 reviews</p>
    </div>
    <button className="write-review-btn-88">Write a Review</button>
  </div>

  {/* Reviews List */}
  <div className="reviews-list-88">
    <div className="review-item-88">
      <div className="review-avatar-88">A</div>
      <div className="review-content-88">
        <div className="review-header-88">
          <h4>Arjun Patel</h4>
          <span className="review-date-88">Aug 4, 2025</span>
        </div>
        <div className="review-stars-88">{'★'.repeat(5)}</div>
        <p className="review-text-88">
          The Black Galaxy slabs were stunning and exactly as described. Delivery was quick and
          packaging was excellent. Highly recommended for premium projects.
        </p>
      </div>
    </div>

    <div className="review-item-88">
      <div className="review-avatar-88">M</div>
      <div className="review-content-88">
        <div className="review-header-88">
          <h4>Meera Nair</h4>
          <span className="review-date-88">July 28, 2025</span>
        </div>
        <div className="review-stars-88">{'★'.repeat(4)}</div>
        <p className="review-text-88">
          Good quality tiles, smooth polish, and the blue tone matches modern interiors. Delivery
          updates were helpful.
        </p>
      </div>
    </div>
  </div>
</div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column-88">
            <div className="timeline-card-88 fade-in-card">
              <h3>Order Progress</h3>
              <div className="timeline-88">
                {["placed", "dispatched", "out_for_delivery", "delivered"].map(
                  (stage, i) => {
                    const stageInfo = getStatusInfo(stage);
                    const isCompleted =
                      order.status === stage ||
                      (stage === "dispatched" &&
                        ["out_for_delivery", "delivered"].includes(order.status)) ||
                      (stage === "out_for_delivery" &&
                        order.status === "delivered");

                    return (
                      <div
                        key={i}
                        className={`timeline-item-88 ${
                          isCompleted ? "completed" : ""
                        }`}
                      >
                        <div className="timeline-marker-88"></div>
                        <div className="timeline-content-88">
                          {/* Larger Image */}
                          <img
                            src={stageInfo.img}
                            alt={stageInfo.label}
                            className="timeline-img-88 large"
                          />
                          <div className="wejdsu79i3">
                            <h4>{stageInfo.label}</h4>
                            <p className="timeline-place-88">
                              {stageInfo.place}
                            </p>
                            <p className="timeline-time-88">
                              {formatStageTime(stageInfo.timeOffset)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTraking;
