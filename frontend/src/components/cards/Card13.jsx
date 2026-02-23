import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card13(product) {
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
      <img src="/imagess/watch3.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Classic Silver Chronograph Watch</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 1399 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This elegant silver chronograph watch combines style and
            precision.Designed with a durable stainless steel strap for
            long-lasting use. <br />
            The sleek dial adds a premium and professional touch.Suitable for
            both formal and casual occasions. <br />A perfect accessory to
            elevate your everyday look.
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

export default Card13;
