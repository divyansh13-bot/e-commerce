import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card9(product) {
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
      <img
        src="/imagess/90110Wl04_1.webp"
        className="card1-img"
        alt="..."
      ></img>

      <div>
        <div className="card1-details">
          <h1>Classic Mechanical Watch</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 2019 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Timeless mechanical watch with a classic design and precise
            movement. <br />
            Crafted with high-quality materials for durability and long-lasting
            performance. <br />
            Features a sleek black dial and stainless steel case, perfect for
            both formal and casual settings.
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

export default Card9;
