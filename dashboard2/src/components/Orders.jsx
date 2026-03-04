import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

const Orders = () => {
  let[orders,setOrders]= useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/getorder")
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  return (
    <div className="orders">
      <div className="">
        <p>Your placed orders</p>
        <ul>
          <div>
          {orders.map((order, index) => (
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>{order.mode}</p> <p>{order.name}</p>  <p>₹{order.price}</p> <p>- Qty: {order.qty}</p> 
         
          </div>
        ))}
          </div>
       
        </ul>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
