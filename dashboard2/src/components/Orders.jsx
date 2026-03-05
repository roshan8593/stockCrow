import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get(
      "https://stockcrow-backend.onrender.com/getorder",
      {
        withCredentials: true
      }
    )
    .then((res) => {
      setOrders(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response?.data || err.message);
    });

  }, []);

  return (
    <div className="orders">
      <div>

        <p>Your placed orders</p>

        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {orders.map((order, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0"
                }}
              >
                <p>{order.mode}</p>
                <p>{order.name}</p>
                <p>₹{order.price}</p>
                <p>Qty: {order.qty}</p>
              </li>
            ))}
          </ul>
        )}

        <Link to="/" className="btn">
          Get started
        </Link>

      </div>
    </div>
  );
};

export default Orders;
