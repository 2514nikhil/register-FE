import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    </nav>
);