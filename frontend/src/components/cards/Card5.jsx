import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card5(product) {
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
      <img src="/imagess/shoes.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Vintage Green Running Sneakers</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 849 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Step out in style with these vintage green running sneakers.Designed
            with a retro look that blends fashion and functionality. <br />
            Features a cushioned sole for superior comfort during long
            walks.Lightweight construction supports everyday movement and <br />
            flexibility.Ideal for casual wear, walking, and light running
            activities.
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

export default Card5;
