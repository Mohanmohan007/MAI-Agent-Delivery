// src/lib/cartlocal.jsx
import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

const STORAGE_KEY = "diy_worktops_cart";
const CartContext = createContext();

const readCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Failed to read cart from localStorage:", error);
    return [];
  }
};

const writeCart = (cart) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to write cart to localStorage:", error);
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => readCart());

  useEffect(() => {
    writeCart(cart);
  }, [cart]);

  const addItem = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((x) => x.id === item.id);
      if (existing) {
        return prev.map((x) =>
          x.id === item.id
            ? { ...x, quantity: x.quantity + (item.quantity || 1) }
            : x
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const safeQty = Math.max(1, parseInt(quantity));
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, quantity: safeQty } : x))
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const clear = useCallback(() => setCart([]), []);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const num = parseFloat(item.price?.replace(/[^0-9.]/g, "")) || 0;
      return sum + num * (item.quantity || 1);
    }, 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateQuantity, removeItem, clear, total, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
