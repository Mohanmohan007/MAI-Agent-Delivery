import React from "react";
import "./Cart.css";
import checkout1 from "../../../assets/direct_empty_cart.webp";
import checkout2 from "../../../assets/shipping_empty_cart.webp";
import { useCart } from "../../../lib/cartlocal";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQuantity, removeItem, total } = useCart();
  const navigate = useNavigate();
  console.log(cart, "cart");

  return (
    <section className="checkout-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
        <h2 className="checkout-title">READY TO CHECKOUT</h2>
        <div className="total-value" style={{ fontSize: '18px', fontWeight: '700', color: '#28a745' }}>
          Total : £{total.toFixed(2)}
        </div>
      </div>
      
      <div className="checkout-subtitle">
        <span>Only Direct Collection Products</span>
        <span className="shipping-title">
          Shipping Available Products <span className="required">*</span>
        </span>
      </div>

      <div className="checkout-sections">
        {/* Left Column - Direct Collection (Always show empty) */}
        <div className="checkout-card">
          <img
            src={checkout1}
            alt="Direct Collection"
            className="checkout-image"
          />
          <p className="cart-empty-text">
            Your Direct Collection Product Cart is Empty
          </p>
          <button
            onClick={() => navigate("/diy-worktops")}
            className="shop-now-btn"
          >
            Shop Now →
          </button>
        </div>

        {/* Right Column - Shipping Products */}
        <div>
          {cart.length === 0 ? (
            <div className="checkout-card">
              <img src={checkout2} alt="Shipping" className="checkout-image" />
              <p className="cart-empty-text">
                Your Shipping Product Cart is Empty
              </p>
              <button
                onClick={() => navigate("/diy-worktops")}
                className="shop-now-btn"
              >
                Shop Now →
              </button>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="thumb">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="details">
                    <div className="header-row">
                      <div className="name">{item.name}</div>
                      <div className="each-price">
                        Each Price <span className="price-value">£{item.price}</span>
                      </div>
                    </div>
                    <div className="meta">{item.subtitle}</div>
                    <div className="controls-row">
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                          }
                          aria-label="decrease"
                        >
                          −
                        </button>
                        <span className="qty-display">{item.quantity || 1}</span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) + 1)
                          }
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-link"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Blue total summary bar for right column */}
              <div className="cart-total-summary">
                <span>Total:</span>
                <span>£{total.toFixed(2)} ({cart.length} item{cart.length > 1 ? "s" : ""})</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom footer */}
      <div className="checkout-footer">
        <div className="total-text">Total: £{total.toFixed(2)}</div>
        <button
          onClick={() => navigate("/checkout")}
          className="checkout-btn"
        >
          Checkout
        </button>
      </div>

      <div className="auto-message" role="status" aria-live="polite">
        <span className="message-text">
          Tax &amp; other Cost will be displayed in the next page
        </span>
        <button className="close-btn" aria-label="Dismiss message">
          &times;
        </button>
      </div>
    </section>
  );
}