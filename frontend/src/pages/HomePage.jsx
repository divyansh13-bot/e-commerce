// pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { API_ENDPOINTS } from "../api.js";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINTS.products)
      .then((res) => res.json())
      .then((data) => {
        console.log("Products from API:", data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HeroSection />

      <main
        className="shop-container"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          {/* ✅ PASS PRODUCTS HERE */}
          <ProductGrid products={products} />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
