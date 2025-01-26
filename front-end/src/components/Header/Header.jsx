import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../store/features/signIn/signInSlice";

import "./Header.css";

import argentBankLogo from "../../assets/argentBankLogo.png";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.signIn.token);
  const user = useSelector((state) => state.profile.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="logo" to="/">
          <img src={argentBankLogo} alt="Argent Bank Logo" className="argentBankLogo"/>
          {/* <h1>
            <span className="first-word-logo">ARGENT</span>
            <span className="second-word-logo">BANK</span>
          </h1> */}
        </Link>
        {token && user ? (
          <div>
            <Link to="/profile" className="user-button">
              <i className="fa fa-user-circle sign-in-icon"></i>
              {user.firstName || "User"}
            </Link>
            {/* <Link to="/login"> */}
            <button onClick={handleLogout} className="header-button">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
            {/* </Link> */}
          </div>
        ) : (
          <Link className="sign-in" to="/login">
            <i className="icon fa fa-user-circle"></i>
            <span>Sign In</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
