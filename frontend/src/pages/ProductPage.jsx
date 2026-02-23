import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../api";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
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
    return <h2 style={{ textAlign: "center" }}>Loading product...</h2>;
  }

  return (
    <>
      <div style={{ padding: "30px", textAlign: "center",  }}>
        <img
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.name}
          style={{ width: "300px", borderRadius: "20px" }}
        />

        <h1 style={{fontFamily: "fangsong"}}>{product.name}</h1>
        <h3 style={{fontFamily: "math"}}>₹{product.price}</h3>
        <p style={{fontSize: '20px', fontFamily: "-apple-system"}}>{product.description}</p>
      </div>
      <button
        onClick={() => navigate(`/order/${product.id}`)}
        style={{ padding: "12px 25px", fontSize: "16px", display: 'flex', justifyContent: "center",
           alignItems: "center", margin: "0 auto", borderRadius: "10px", backgroundColor: "#475569" }}
      >
        Buy Now
      </button>
    </>
  );
}

export default ProductPage;
