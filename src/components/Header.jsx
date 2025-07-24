import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="main-header">
      <div className="header-logo">AppBook</div>
      <nav className="header-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/books" className={location.pathname === "/books" ? "active" : ""}>Books</Link>
        <a href="#">Writers</a>
      </nav>
      <div className="header-actions">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </header>
  );
};

export default Header;
