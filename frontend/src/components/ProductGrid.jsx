// components/ProductGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api";

function ProductGrid({ products }) {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <>
      <div className="title">
        <h2>Our Products</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={`${BASE_URL}${product.image}`}
              className="card-img-top"
              alt={product.name}
            />

            <div className="card-body">
              <h5>{product.name}</h5>
              <p>{product.description.slice(0, 80)}...</p>
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
