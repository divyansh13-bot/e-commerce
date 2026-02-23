import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card12(product) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buyNow = () => {
    if (!product) return;
    navigate(`/checkout/${product.id}`);
  };
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      {/* <h1>This is about page</h1> */}
      <img src="/imagess/tshirt2.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Oversized White T-shirt</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 799 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This oversized white graphic T-shirt delivers a modern streetwear
            vibe.Crafted from soft, premium-quality cotton for maximum comfort.{" "}
            <br />
            The relaxed fit allows easy movement and a stylish look.Perfect for
            casual wear, travel, or weekend outings. <br />
            Pairs well with jeans, joggers, or sneakers.
          </p>
        </div>
        <div >
          {product && (
            <button onClick={buyNow} className="card1-btn">
              Buy Now
            </button>
          )}
        </div>
        <div className="card1-btn2">
          <button>Add to Cart</button>
        </div>
      </div>

      {/* <button className="card1-btn" onClick={handleHomeClick}>
            Home
        </button> */}
    </>
  );
}

export default Card12;
