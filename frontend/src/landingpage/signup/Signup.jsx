import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onsubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://stockcrow-backend.onrender.com/signup",
        { username, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        window.location.href = "https://stockcrow.onrender.com/";
      }

    } catch (err) {
      alert("Signup failed");
    }
  }

  return (
    <div className="container mt-5 " style={{ width: "40%",height:"60vh" }}>
      <h2 className="text-center mb-4">Signup now</h2>

      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
