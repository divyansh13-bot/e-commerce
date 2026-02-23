import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card15(product) {
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
      <img src="/imagess/tshirt3.webp" className="card1-img" alt="..."></img>

      <div>
        <div className="card1-details">
          <h1>Oversized Dark streetwear</h1>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Price: 799 INR
          </h4>
        </div>
        <div className="card1-p">
          <p>
            This dark oversized T-shirt features a bold and trendy design.Made
            with premium fabric for a soft and comfortable feel. <br />
            The relaxed silhouette gives a modern streetwear appeal.Perfect for
            casual wear, college, or hangouts. <br />A must-have piece for a
            stylish everyday wardrobe.
          </p>
        </div>
        {product && (
          <button onClick={buyNow} className="card1-btn">
            Buy Now
          </button>
        )}

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

export default Card15;
