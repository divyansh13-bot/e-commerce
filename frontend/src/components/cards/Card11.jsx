import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card11(product) {
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
      <img src="/imagess/cap.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic Black baseball Cap</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 299 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This classic black baseball cap delivers a minimal, sporty look.Made
            with breathable material for maximum comfort. <br />
            Adjustable strap ensures a perfect fit for all head sizes.Ideal for
            outdoor activities or casual styling. <br />A versatile accessory
            for everyday wear.
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

export default Card11;
