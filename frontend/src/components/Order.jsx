import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BASE_URL from "../api";

function Order() {
  const { id } = useParams(); // 👈 product id from URL
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading order...</h2>;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", fontFamily: "math" }}>Order Summary</h1>

      <img
        src={
          product.image.startsWith("http")
            ? product.image
            : `${BASE_URL}${product.image}`
        }
        alt={product.name}
        style={{ width: "250px", marginTop: "20px", borderRadius: "15px" }}
      />

      <h2 style={{ fontFamily: "fangsong" }}>{product.name}</h2>
      <h3 style={{ fontFamily: "math" }}>₹{product.price}</h3>
      <p style={{ fontFamily: "-apple-system", fontSize: "18px" }}>
        {product.description}
      </p>

      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "12px 30px",
          marginTop: "15px",
          backgroundColor: "#475569",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Order;
