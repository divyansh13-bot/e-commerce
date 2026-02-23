import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card8(product) {
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
      <img src="/imagess/shoes3.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic black Sneakers</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 769 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Timeless black sneakers designed for everyday versatility and
            comfort.Sleek design pairs effortlessly with casual and semi-casual
            outfits. <br />
            Durable material ensures long-lasting use and reliable
            performance.Comfortable sole supports extended wear without
            discomfort. <br />
            Ideal for daily wear, travel, and casual outings.
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

export default Card8;
