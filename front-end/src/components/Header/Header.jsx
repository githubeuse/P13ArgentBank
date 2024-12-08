import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <h1>
            <span className="first-word-logo">ARGENT</span>
            <span className="second-word-logo">BANK</span>
          </h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="icon fa fa-user-circle"></i>
            <span>Sign In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
