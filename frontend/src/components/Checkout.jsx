import React from "react";
import { useEffect, useState } from "react";

function Checkout() {

   const handleCheckout=()=>{
    alert("Your Order is placed and will deliver in few days")
   }
   

  return (
    <>
      <div className="container text-center" style={{ marginTop: "50px" }}>
        <h1>Checkout Your Order</h1> <br /> 

        <h3>Enter Your Address</h3>

        <div className="checkout-input">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your address"
            style={{ height: "80px"}}
          />
          </div>
            <h3 style={{marginTop: "45px"}}>Select your payment method</h3>
          <label style={{fontSize: "20px"}} >
            <input type="radio" name="payment" id="cashOnDelivery" value="Cash on Delivery" />
            Cash on Delivery
          </label> <br />
          <label style={{fontSize: "20px"}}>
            <input type="radio" name="payment" id="onlinePayment" value="Online Payment" />
            Online Payment
          </label>
          <div className="checkout-btn" style={{marginTop: "45px"}} onClick={handleCheckout}>
            <button>Place Order</button>
          </div>
      </div>
    </>
  );
}

export default Checkout;
