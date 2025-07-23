import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-new">
      {/* Header horizontal */}
      <header className="main-header">
        <div className="header-logo">AppBook</div>
        <nav className="header-menu">
          <a href="#" className="active">Home</a>
          <a href="#">Books</a>
          <a href="#">Writers</a>
        </nav>
        <div className="header-actions">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
