import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
