import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card4(product) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const buyNow = () => {
    if (!product) return;
    navigate(`/checkout/${product.id}`);
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      {/* <h1>This is about page</h1> */}
      <img src="/imagess/pant.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic Straight‑Fit Blue Jeans</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 779 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Timeless straight-fit blue jeans designed for everyday comfort and
            durability.Crafted from high-quality denim that feels sturdy <br />
            yet comfortable.The classic cut offers a relaxed fit without
            compromising style.Suitable for long hours of wear and daily <br />
            activities.Pairs effortlessly with shirts, t-shirts, hoodies, or
            jackets.
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

export default Card4;
