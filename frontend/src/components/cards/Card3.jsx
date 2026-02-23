import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card3(product) {
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
      <img src="/imagess/shirt2.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Red Checked Flannel Shirt</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 669 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Upgrade your everyday wardrobe with this classic red checked flannel
            shirt, designed for effortless style and all-day comfort. <br />
            Crafted from premium breathable flannel fabric, this shirt offers a
            soft feel on the skin while <br />
            maintaining a structuredand polished look.
          </p>
        </div>
        <div >
          {product && (
            <button onClick={buyNow} className="card1-btn">
              Buy Now
            </button>
          )}
        </div>
        <div className="card1-btn2" onClick={buyNow}>
          <button>Add to Cart</button>
        </div>
      </div>

      {/* <button className="card1-btn" onClick={handleHomeClick}>
            Home
        </button> */}
    </>
  );
}

export default Card3;
