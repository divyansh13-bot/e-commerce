import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>

        <div className="about-1">
          <h3>Who We Are</h3>
          <p>
            BuyMore is a modern online shopping platform built to make everyday
            buying simple,
            <br /> fast, and enjoyable. From everyday basics like shirts and
            jeans to watches and footwear,
            <br /> we bring quality products together in one clean, easy‑to‑use
            website.
          </p>
        </div>

        <div className="about-2">
          <h3>What We Offer</h3>
          <p>
            We carefully pick products that combine style, comfort, and value for money. <br />
            Our goal is to help you discover outfits and accessories that fit your lifestyle without <br />
            spending hours searching across different sites.
          </p>
        </div>

        <div className="about-3">
          <h3>What Shop with Us</h3>
          <p>
            At BuyMore, we focus on a smooth experience – clear product cards, simple filters, <br />
             and quick navigation so you can find what you need in seconds. We believe online shopping <br />
             should feel trustworthy and hassle‑free, from browsing to checkout.
          </p>
        </div>

        <div className="about-4">
          <h3>Our Vision</h3>
          <p>
           We are building BuyMore as a student‑made project that grows into a full e‑commerce experience over time. <br />
           Step by step, we aim to add more categories, smarter filters, secure payments, <br />
            and personalized recommendations for every user.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
