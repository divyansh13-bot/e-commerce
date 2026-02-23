import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card2({ product }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return null;

  const buyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <>
      <img src={product.image} className="card1-img" alt={product.name} />

      <div className="card1-details">
        <h1>{product.name}</h1>
        <h4>Price: {product.price} INR</h4>
        <p className="card1-p">{product.description}</p>

        <button onClick={buyNow}>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default Card2;
