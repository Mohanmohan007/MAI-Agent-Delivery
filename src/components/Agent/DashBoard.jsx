import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrderCard from "../Agent/OrderCard";
import ProductCard from "../Agent/ProductCard";
import PaymentCard from "../Agent/PaymentCard";
import NotificationItem from "../Agent/NotificationItem";
import HelpSection from "../Agent/HelpSection";
import OrderModal from "../Agent/OrderModal";
import BottomNavigation from "../Agent/BottomNavigation";
import "./DashBoard.css";
import dispatchedD from "../../assets/dispatchedD.jpg";
import scatered2 from '../../../src/assets/scatered2.jpg';
import scatered4 from '../../assets/scatered4.jpg';

// import scatered2 from '../../assets/scatered2.jpg';

// import lapstone from '../../assets/lapstone.jpg'
import lap3 from '../../assets/lap3.jpg'
import lap4 from '../../assets/lap4.jpg'
import lap5 from '../../assets/lap5.jpg'
// import lap6 from '../../assets/lap6.jpg'
import lap7 from '../../assets/lap7.jpg'
import lap8 from '../../assets/lap8.jpg'
import lap9 from '../../assets/lap9.jpg'
import lap10 from '../../assets/lap10.jpg'
// import lapstone10 from '../../assets/lapstone.jpg'
// import lapstone from '../../assets/lapstone.jpg'
// import lapstone from '../../assets/lapstone.jpg'



export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dummy Data
  const agent = {
    name: "Rajesh Kumar",
    agentId: "SA2024001",
  };

  const stats = {
    todayOrders: 5,
    completedToday: 3,
    totalEarnings: 25000,
    totalCommission: 3500,
  };

  const orders = [
    {
      id: "order-1",
      orderNumber: "ST2024001",
      deliveryStatus: "in_progress",
      customer: { name: "Priya Sharma" },
      product: { name: "Black Galaxy Tiles" },
      totalAmount: "₹15,200",
    },
   {
  id: "order-3",
  orderNumber: "ST2024003",
  deliveryStatus: "in_progress",
  customer: { name: "Sunita Verma" },
  product: { name: "Black Galaxy Tiles" },
  totalAmount: "₹18,750",
},
{
  id: "order-4",
  orderNumber: "ST2024004",
  deliveryStatus: "completed",
  customer: { name: "Rohan Mehta" },
  product: { name: "Granite Countertops" },
  totalAmount: "₹30,200",
},
// {
//   id: "order-5",
//   orderNumber: "ST2024005",
//   deliveryStatus: "pending",
//   customer: { name: "Anjali Gupta" },
//   product: { name: "White Marble Slabs" },
//   totalAmount: "₹22,900",
// }
,
{
  id: "order-5",
  orderNumber: "ST2024005",
  deliveryStatus: "pending",
  customer: { name: "Anjali Gupta" },
  product: { name: "White Marble Slabs" },
  totalAmount: "₹22,900",
},{
  id: "order-6",
  orderNumber: "ST2024006",
  deliveryStatus: "in_progress",
  customer: { name: "Karan Singh" },
  product: { name: "Sandstone Pavers" },
  totalAmount: "₹12,500",
},
{
  id: "order-7",
  orderNumber: "ST2024007",
  deliveryStatus: "completed",
  customer: { name: "Neha Kapoor" },
  product: { name: "Italian Marble Flooring" },
  totalAmount: "₹45,000",
},
{
  id: "order-8",
  orderNumber: "ST2024008",
  deliveryStatus: "pending",
  customer: { name: "Vikram Joshi" },
  product: { name: "Granite Wall Cladding" },
  totalAmount: "₹19,300",
}


  ];



 const products = [
  {
    id: "prod-1",
    name: "Black Galaxy Tiles",
    pricePerUnit: "760.00",
    unit: "sq.ft",
    category: "Granite",
    material: "Polished",
    image: lap10,
    rating: 4.5,
    reviews: 32,
    discount: 10,
    stock: 15,
  },
  {
    id: "prod-2",
    name: "White Marble Slabs",
    pricePerUnit: "1500.00",
    unit: "sq.ft",
    category: "Marble",
    material: "Matte",
    image: lap9,
    rating: 4,
    reviews: 18,
    discount: 5,
    stock: 8,
  },
  {
    id: "prod-3",
    name: "Granite Slabs",
    pricePerUnit: "945.00",
    unit: "sq.ft",
    category: "Granite",
    material: "Polished",
    image: lap4,
    rating: 4.2,
    reviews: 22,
    discount: 8,
    stock: 20,
  },
  {
    id: "prod-4",
    name: "Green Marble Tiles",
    pricePerUnit: "1100.00",
    unit: "sq.ft",
    category: "Marble",
    material: "Polished",
      image: lap5,
    rating: 4.6,
    reviews: 25,
    discount: 12,
    stock: 10,
  },
  {
    id: "prod-5",
    name: "Red Granite Slabs",
    pricePerUnit: "980.00",
    unit: "sq.ft",
    category: "Granite",
    material: "Glossy",
    image: lap3,
    rating: 4.3,
    reviews: 17,
    discount: 7,
    stock: 12,
  },
  {
    id: "prod-6",
    name: "Blue Pearl Granite",
    pricePerUnit: "1300.00",
    unit: "sq.ft",
    category: "Granite",
    material: "Polished",
     image: lap7,
    rating: 4.7,
    reviews: 30,
    discount: 10,
    stock: 18,
  },
  {
    id: "prod-7",
    name: "Italian Carrara Marble",
    pricePerUnit: "2200.00",
    unit: "sq.ft",
    category: "Marble",
    material: "Polished",
      image: lap8,
    rating: 5,
    reviews: 40,
    discount: 15,
    stock: 5,
  },
  {
    id: "prod-8",
    name: "Pink Marble Slabs",
    pricePerUnit: "1250.00",
    unit: "sq.ft",
    category: "Marble",
    material: "Matte",
      image:lap3 ,
    rating: 4.1,
    reviews: 14,
    discount: 5,
    stock: 9,
  },
  {
    id: "prod-9",
    name: "Grey Granite Tiles",
    pricePerUnit: "850.00",
    unit: "sq.ft",
    category: "Granite",
    material: "Polished",
        image: lap10,
    rating: 4.4,
    reviews: 20,
    discount: 6,
    stock: 16,
  },
  {
    id: "prod-10",
    name: "Onyx Marble",
    pricePerUnit: "3000.00",
    unit: "sq.ft",
    category: "Marble",
    material: "Glossy",
   image: lap4,
    rating: 4.8,
    reviews: 45,
    discount: 18,
    stock: 7,
  },
 
 
];


  const payments = [
    {
      id: "pay-1",
      amount: 15200,
      orderId: "ST2024001",
      status: "Completed",
    },
  ];

  const notifications = [
    {
      id: "notif-1",
      title: "New Order Assigned",
      message: "Order #ST2024003 has been assigned to you",
      isRead: false,
    },
  ];

  const pendingOrders = orders.filter((o) => o.deliveryStatus === "pending");
  const activeOrders = orders.filter((o) => o.deliveryStatus === "in_progress");

  const getCurrentTime = () =>
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const getBatteryLevel = () => Math.floor(Math.random() * 40) + 60;

  return (
    <div className="dashboard">
      {/* Status Bar */}
      {/* <div className="status-bar">
        <span>{getCurrentTime()}</span>
        <span>🔋 {getBatteryLevel()}%</span>
      </div> */}

      {/* Header */}
      <motion.div
        className="dashboard-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <div className="eduiw8776tfgo">
            <div>
            <h1 className="header-title">Hello, {agent.name}!</h1>
            <p className="header-subtitle">Agent ID: {agent.agentId}</p>
            <div className="connection-status">
              <div className="status-indicator"></div>
              Online & Ready
            </div>
            </div>

            <div className="wefkjewui872">
              <img src={dispatchedD}></img>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="nav-tabsvf">
        {[
          { id: "orders", label: "Orders" },
          { id: "products", label: "Products" },
          { id: "payments", label: "Payments" },
          { id: "notifications", label: "Alerts" },
          { id: "help", label: "Help" },
        ].map((tab) => (
          <button
            key={tab.id}
className={`nav-tabvf ${activeTab === tab.id ? "active" : ""}`}            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="tab-container">
        <AnimatePresence mode="wait">
          {/* Orders Tab */}
          {activeTab === "orders" && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              {/* Stats */}
              <div className="stats-grid">
                <div className="stat-card">
                  <img src={scatered2}></img>
                  <div className="stat-value">{stats.todayOrders}</div>
                  <div className="stat-label-das">Today's Orders</div>
                </div>
                <div className="stat-card">
                     <img src={scatered4}></img>
                  <div className="stat-value">{stats.completedToday}</div>
                  <div className="stat-label-das">Completed</div>
                </div>
              </div>

              {/* Active Orders */}
              {activeOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onViewDetails={setSelectedOrder}
                />
              ))}

              {/* Pending Orders */}
              {pendingOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onViewDetails={setSelectedOrder}
                />
              ))}

              {orders.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <h3 className="empty-title">No Orders Yet</h3>
                  <p className="empty-description">
                    New orders will appear here when they're assigned to you.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Products Tab */}
        {activeTab === "products" && (
  <motion.div
    key="products"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="tab-content"
  >
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </motion.div>
)}


          {/* Payments Tab */}
          {activeTab === "payments" && (
            <motion.div
              key="payments"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              {payments.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
              ))}

              <div className="stats-grid erferfsdfererfe">

                <div className="stat-card">
                                                                      <img src={scatered2}></img>


                  <div style={{color:'green'}} className="stat-value">
                    ₹{stats.totalEarnings.toLocaleString()}
                  </div>
                  <div  className="stat-label-das">Total Earnings</div>
                </div>
                <div className="stat-card">
                                                                      <img src={scatered2}></img>

                  <div style={{color:'#ea9d0e'}}className="stat-value">
                    ₹{stats.totalCommission.toLocaleString()}
                  </div>
                  <div className="stat-label-das">Commission</div>
                </div>
              </div>

              {payments.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <h3 className="empty-title">No Payments Yet</h3>
                  <p className="empty-description">
                    Complete deliveries to see your payment history here.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              <div className="stone-card" style={{ padding: 0 }}>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}

                {notifications.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <i className="fas fa-bell"></i>
                    </div>
                    <h3 className="empty-title">No Notifications</h3>
                    <p className="empty-description">
                      You'll see important alerts and updates here.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Help Tab */}
          {activeTab === "help" && (
            <motion.div
              key="help"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              <HelpSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Order Modal */}
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

      {/* External CSS links */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
