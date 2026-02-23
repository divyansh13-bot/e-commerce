import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card6(product) {
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
      <img src="/imagess/hoodie.jpg" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic grey hoodie</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 539 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            Stay comfortable with this classic grey hoodie made for daily wear.
            Crafted from soft, cozy fabric that feels warm and breathable.{" "}
            <br />
            Relaxed fit allows easy movement and all-day comfort.Perfect for
            layering during cool weather or casual outings. <br />
            A versatile wardrobe essential for relaxed and sporty looks. <br />
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

export default Card6;
