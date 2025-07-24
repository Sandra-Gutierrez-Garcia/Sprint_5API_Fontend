import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { getCurrentUser, logoutUser } from "../utils/userStorage";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  function handleLogout() {
    logoutUser();
    navigate("/");
  }

  return (
    <header className="main-header">
      <div className="header-logo">AppBook</div>
      <nav className="header-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/books" className={location.pathname === "/books" ? "active" : ""}>Books</Link>
        <a href="#">Writers</a>
      </nav>
      <div className="header-actions">
        {user ? (
          <>
            <Link to="/perfil" className="login-btn">Perfil</Link>
            <button onClick={handleLogout} className="logout-btn">Salir</button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
