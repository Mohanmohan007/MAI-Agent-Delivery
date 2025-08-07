import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications([
        {
          id: '1',
          title: 'Order Confirmed - Premium Granite',
          message: 'Your order ST2024001 for Premium Granite Slabs has been confirmed and will be processed within 24 hours.',
          category: 'orders',
          isRead: false,
          createdAt: new Date(Date.now() - 30 * 60 * 1000)
        },
        {
          id: '2',
          title: 'Delivery Truck Dispatched',
          message: 'Your granite order is now on the way! Expected delivery: Tomorrow 2:00 PM - 4:00 PM',
          category: 'orders',
          isRead: false,
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
          id: '3',
          title: 'New Stone Collection Available',
          message: 'Explore our latest collection of premium marble and granite stones. Perfect for your construction projects.',
          category: 'offers',
          isRead: true,
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
        },
        {
          id: '4',
          title: '15% Discount on Bulk Orders',
          message: 'Special offer: Get 15% off on orders above ₹50,000. Valid till month end.',
          category: 'offers',
          isRead: false,
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
        },
        {
          id: '5',
          title: 'Payment Received Successfully',
          message: 'We have received your payment of ₹45,000 for order ST2024001. Thank you for your business.',
          category: 'orders',
          isRead: true,
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getNotificationIcon = (category, title) => {
    if (title.toLowerCase().includes('delivery') || title.toLowerCase().includes('truck')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
        </svg>
      );
    }
    if (title.toLowerCase().includes('payment')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      );
    }
    if (title.toLowerCase().includes('stock') || title.toLowerCase().includes('available')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2l1.86 1.86L8.7 2.7c.39-.39 1.02-.39 1.41 0l.59.59c.39.39.39 1.02 0 1.41L9.86 5.54 12 7.68l2.14-2.14-.59-.59c-.39-.39-.39-1.02 0-1.41l.59-.59c.39-.39 1.02-.39 1.41 0l1.86 1.86L18 2l2 2-2 2-1.86-1.86-1.41 1.41c-.39.39-1.02.39-1.41 0l-.59-.59c-.39-.39-.39-1.02 0-1.41l.59-.59L12 4.32 10.14 6.18l.59.59c.39.39.39 1.02 0 1.41l-.59.59c-.39.39-1.02.39-1.41 0L7.86 7.86 6 6l2-2z"/>
        </svg>
      );
    }
    if (title.toLowerCase().includes('discount') || title.toLowerCase().includes('offer')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    if (title.toLowerCase().includes('confirmed') || title.toLowerCase().includes('placed')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    );
  };

  const getIconColorClass = (category, title) => {
    if (title.toLowerCase().includes('delivery')) return 'icon-success';
    if (title.toLowerCase().includes('payment') || title.toLowerCase().includes('confirmed')) return 'icon-blue';
    if (title.toLowerCase().includes('stock')) return 'icon-warning';
    if (title.toLowerCase().includes('discount')) return 'icon-error';
    return 'icon-blue';
  };

  const formatRelativeTime = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    return notification.category === activeFilter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleNotificationClick = (notificationId) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, isRead: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  if (loading) {
    return (
      <div className="notifications-page">
        <header className="header">
          <div className="header-content">
            <h1 className="header-title">MAI INDIA</h1>
            <p className="header-subtitle">Premium Stone Supplier</p>
          </div>
        </header>
        
        <nav className="tab-navigation">
          <div className="tab-container">
            <button className="tab-btn">Order Tracking</button>
            <button className="tab-btn active">Notifications</button>
            <button className="tab-btn">Help</button>
          </div>
        </nav>

        <div className="loading-container">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="loading-card">
              <div className="loading-flex">
                <div className="loading-avatar"></div>
                <div className="loading-content">
                  <div className="loading-shimmer"></div>
                  <div className="loading-shimmer full"></div>
                  <div className="loading-shimmer small"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="notifications-page">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">MAI INDIA</h1>
          <p className="header-subtitle">Premium Stone Supplier</p>
        </div>
      </header>

      <nav className="tab-navigation">
        <div className="tab-container">
          <button className="tab-btn">Order Tracking</button>
          <button className="tab-btn active">Notifications</button>
          <button className="tab-btn">Help</button>
        </div>
      </nav>

      <div className="main-container">
        <div className="grid-layout">
          {/* Left Sidebar */}
          <div className="left-column">
            <div className="notification-header-card">
              <div className="header-flex">
                <h2>Notifications</h2>
                {unreadCount > 0 && (
                  <span className="unread-badge">{unreadCount} new</span>
                )}
              </div>
              <button 
                className="mark-all-btn"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
            </div>

            <div className="stats-card">
              <h3>Overview</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-label">Total</span>
                  <span className="stat-value">{notifications.length}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Unread</span>
                  <span className="stat-value unread">{unreadCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Orders</span>
                  <span className="stat-value">{notifications.filter(n => n.category === 'orders').length}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Offers</span>
                  <span className="stat-value">{notifications.filter(n => n.category === 'offers').length}</span>
                </div>
              </div>
            </div>

            <div className="filter-card">
              <h3>Filter</h3>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Notifications
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'orders' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('orders')}
                >
                  Order Updates
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'offers' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('offers')}
                >
                  Offers & Deals
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="right-column">
            <div className="notifications-card">
              <div className="notifications-header">
                <h3>
                  {activeFilter === 'all' ? 'All Notifications' : 
                   activeFilter === 'orders' ? 'Order Updates' : 'Offers & Deals'}
                </h3>
                <span className="count-text">
                  {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="notifications-list">
                {filteredNotifications.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                      </svg>
                    </div>
                    <h3>No Notifications</h3>
                    <p>
                      {activeFilter === 'all' 
                        ? "You're all caught up! No new notifications." 
                        : `No ${activeFilter} notifications at the moment.`}
                    </p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div className="notification-content">
                        <div className={`notification-icon ${getIconColorClass(notification.category, notification.title)}`}>
                          {getNotificationIcon(notification.category, notification.title)}
                        </div>
                        <div className="notification-body">
                          <div className="notification-title-row">
                            <p className="notification-title">{notification.title}</p>
                            {!notification.isRead && <span className="unread-indicator"></span>}
                          </div>
                          <p className="notification-message">{notification.message}</p>
                          <p className="notification-time">{formatRelativeTime(notification.createdAt)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {filteredNotifications.length > 0 && (
                <div className="load-more-container">
                  <button className="load-more-btn">
                    Load More Notifications
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;