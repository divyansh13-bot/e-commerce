import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card10(product) {
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
      <img src="/imagess/tshirt.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Oversized Black T-shirt</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 799 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This oversized graphic T-shirt offers a trendy streetwear vibe.Made
            from soft cotton fabric for all-day comfort. <br />
            Relaxed fit allows easy movement and modern styling.Features a bold
            graphic design for a standout look. <br />
            Perfect for casual wear, hangouts, or weekend outings.
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

export default Card10;
