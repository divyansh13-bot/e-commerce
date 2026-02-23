import React from "react";
import {Routes , Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./components/About.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Checkout from "./components/Checkout.jsx";

import Order from "./components/Order.jsx";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/order/:id" element={<Order />} />
        {/* <Route path="/order" element={<Order />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}


export default App;
