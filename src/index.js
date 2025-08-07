import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
// import "../src/App.css";
import { CartProvider } from "./lib/cartlocal";
import HowWork from "./components/HowItWorks/HowWork";
import OrderTraking from "./components/Cart/Track/OrderTraking";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          
          <App />
          {/* <HowWork /> */}
          {/* <OrderTraking /> */}
        </CartProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
