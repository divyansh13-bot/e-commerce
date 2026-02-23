import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card14(product) {
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
      <img src="/imagess/cap2.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Beige baseball Cap</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 299 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This beige cotton cap offers a clean and modern
            aesthetic.Lightweight material ensures breathability and comfort.{" "}
            <br />
            Features an adjustable back strap for a customized fit.Ideal for
            outdoor activities or casual styling. <br />
            Adds a subtle, stylish finish to your outfit.
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

export default Card14;
