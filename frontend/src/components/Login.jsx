import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from "../api";
// import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // 🔹 state
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary my-2" type="submit">
            Submit
          </button>
        </form>

        {/* <button onClick={handleHomeClick}>Home</button> */}
      </div>
    </>
  );
}

export default Login;
