import React from "react";

function HeroSection() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
           src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg"
          className="d-block w-400" 
          alt="..."
          style={{ height: "630px", width: "100%", objectFit: "cover" }} 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "black" }}>Discover the Latest Deals</h5>
            <p style={{ color: "black" }}>Fresh styles and gadgets added every day. Shop now and upgrade your everyday essentials.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
           className="d-block w-100"
           alt="..."
           style={{ height: "630px", width: "100%", objectFit: "cover" }} 
            />
          <div className="carousel-caption d-none d-md-block" style={{ color: "black" }}>
            <h5 style={{ color: "black" }}>Save More on Every Order</h5>
            <p style={{ color: "black" }}>Enjoy special discounts on top products. Grab your favorites before the offer ends.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/3965555/pexels-photo-3965555.jpeg"
           className="d-block w-100"
           alt="..." 
           style={{ height: "630px", width: "100%", objectFit: "cover" }} 

           />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "black" }}>Everything You Need in One Place</h5>
            <p style={{ color: "black" }}> From fashion to electronics, BuyMore brings all your favorites together in one smooth shopping experience.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
