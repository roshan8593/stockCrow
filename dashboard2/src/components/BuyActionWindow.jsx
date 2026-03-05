import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

  const general = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = async () => {

    try{

      const res = await axios.post(
        "https://stockcrow-backend.onrender.com/neworder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY"
        },
        {
          withCredentials:true
        }
      );

      alert("Order Placed ✅");

      general.closeBuyWindow();

    }catch(err){
      console.log(err.response?.data || err.message);
      alert("Order failed ❌");
    }

  };

  const handleCancelClick = () => {
    general.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e)=>setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e)=>setStockPrice(e.target.value)}
            />
          </fieldset>

        </div>

      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BuyActionWindow;
