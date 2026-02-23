import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card7(product) {
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
      <img src="/imagess/shoes2.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic white Sneakers</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 849 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Upgrade your footwear collection with these classic white
            sneakers.Designed with a sleek and minimal silhouette for modern
            style. <br />
            Comfortable sole provides support for all-day walking and
            wear.Lightweight build ensures ease and flexibility throughout the
            day. <br />
            Perfect for casual outfits, daily errands, and outings.
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

export default Card7;
