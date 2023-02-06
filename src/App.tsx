import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/home/home.page";
import { CheckoutPage } from "@/pages/checkout/checkout.page";
import { Cart } from "@/components/cart/cart.component";

function App() {
  return (
    <div className="App">
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
