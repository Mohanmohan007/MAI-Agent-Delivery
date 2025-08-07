import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { queryClient } from "../src/lib/queryClient.jsx";
import { Toaster } from "../src/lib/toaster.jsx";
import { TooltipProvider } from "../src/lib/tooltip.jsx";

// import Home from "../src/pages/Home.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Cart from "./components/Cart/Cart/Cart";
import BillingCheckout from "./components/Cart/Checkout/Checkout";
import WorktopsPage from "./components/Cart/DIY/WorktopsPage";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import HowWork from "./components/HowItWorks/HowWork.jsx";
import SignIn from "./components/SignIn.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./components/Agent/DashBoard.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
         <Route element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/DashBoard" element={<Dashboard />} />
            <Route path="/how-it-works" element={<HowWork />} />
            <Route path="/diy-worktops" element={<WorktopsPage />} />
            <Route path="/checkout" element={<BillingCheckout />} />
          </Route>
              <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
