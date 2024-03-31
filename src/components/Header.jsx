import React, { useState } from "react";
import { LOGOURL } from "../utils/constants";

export const Header = () => {
  const [isLogin, setIsLogin] = useState();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGOURL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Log Out" : "Log In"}
          </button>
        </ul>
      </div>
    </div>
  );
};
