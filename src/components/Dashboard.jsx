import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to access the dashboard.");
      navigate("/login");
    } else {
      axios
        .get("http://localhost:8888/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setMessage(res.data.msg);
        })
        .catch(() => {
          alert("Invalid token, please log in again.");
          localStorage.removeItem("token");
          navigate("/login");
        })
    }
  }, [navigate]);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard.</p>
    </div>
  )
}
