import React, { useEffect, useState } from "react";
import "./Checkout.css";

export default function BillingCheckout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    postcode: "",
    country: "",
    message: "",
    collectProduct: false,
    collectAddress: "",
    collectCity: "",
    collectCounty: "",
    collectPostcode: "",
    collectCountry: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("diy_worktops_cart")) || [];
    setCart(savedCart);
    const subtotal = savedCart.reduce(
      (acc, item) => acc + (parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0) * (item.quantity || 1),
      0
    );
    setTotal(subtotal);
  }, []);

  const handlingCharge = 50;
  const cardCharges = (total + handlingCharge) * 0.2;
  const grandTotal = total + handlingCharge + cardCharges;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleConfirmOrder = () => {
    const orderId = "ORD" + Date.now();
    const finalData = {
      orderId,
      billingInfo,
      cart,
      total: grandTotal.toFixed(2),
    };

    localStorage.setItem("billing_info", JSON.stringify(finalData));
    alert(`Order confirmed with Order ID: ${orderId}`);
    // Redirect or further processing can go here
  };

  return (
    <div className="checkout-page">
      <div className="billing-form-section">
        <h3>
          Billing Information<span className="required">*</span>
        </h3>
        <div className="form-grid">
          <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email Address" className="full-width" onChange={handleChange} />
          <div className="phone-input">
            <select>
              <option value="+44">+44</option>
            </select>
            <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} />
          </div>
          <input name="address" type="text" placeholder="Enter Address" className="full-width" onChange={handleChange} />
          <input name="city" type="text" placeholder="City" onChange={handleChange} />
          <input name="county" type="text" placeholder="County" onChange={handleChange} />
          <input name="postcode" type="text" placeholder="Postcode" onChange={handleChange} />
          <input name="country" type="text" placeholder="Country" onChange={handleChange} />
          <textarea
            name="message"
            placeholder="Is there anything specific you'd like us to know? Write your message here"
            className="full-width"
            onChange={handleChange}
          />
        </div>

        <div className="shipping-note">
          <strong>Note: Shipping Delivery Full Address</strong>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="collectProduct"
              checked={billingInfo.collectProduct}
              onChange={handleChange}
            />{" "}
            I would like to Collect My Product
          </label>
          {billingInfo.collectProduct && (
            <>
              <input name="collectAddress" type="text" placeholder="Enter Address" className="full-width" onChange={handleChange} />
              <input name="collectCity" type="text" placeholder="City" onChange={handleChange} />
              <input name="collectCounty" type="text" placeholder="County" onChange={handleChange} />
              <input name="collectPostcode" type="text" placeholder="Postcode" onChange={handleChange} />
              <input name="collectCountry" type="text" placeholder="Country" onChange={handleChange} />
            </>
          )}
        </div>

        <button className="confirm-btn" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      </div>

      <div className="order-summary-section">
        <h4>Order Summary</h4>
        {cart.map((item, index) => (
          <div key={index} className="summary-item">
            <div className="summary-details">
              <p>
                {index + 1}. {item.name} x {item.quantity || 1}
              </p>
              <p>
                <strong>Each Price</strong>: £{parseFloat(item.price.replace(/[^0-9.]/g, "")).toFixed(2)}
              </p>
            </div>
                  <div className="summary-images">
  <div>
    <img src="https://via.placeholder.com/100x100.png?text=Image+1" alt="Product 1" />
    <span>1000MM X 1000MM X 20MM</span>
  </div>
  <div>
    <img src="https://via.placeholder.com/100x100.png?text=Image+2" alt="Product 2" />
    <span>Sharknose Standard</span>
  </div>
</div>
          </div>
        ))}



        <div className="price-breakdown">
  <p>
    <span>Subtotal</span>
    <span>:</span>
    <span>£{total.toFixed(2)}</span>
  </p>
  <p>
    <span>Shipping Charge</span>
    <span>:</span>
    <span>£0.00</span>
  </p>
  <p>
    <span>Handling Charge</span>
    <span>:</span>
    <span>£{handlingCharge.toFixed(2)}</span>
  </p>
  <p>
    <span>Total Distance</span>
    <span>:</span>
    <span>0 km</span>
  </p>
  <p>
    <span>Card Charges (20%)</span>
    <span>:</span>
    <span>£{cardCharges.toFixed(2)}</span>
  </p>
  <h3>
    <span>Total</span>
    <span>:</span>
    <span>£{grandTotal.toFixed(2)}</span>
  </h3>
</div>

      </div>
    </div>
  );
}
