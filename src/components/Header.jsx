import React from "react";
import { LOGOURL } from "../utils/constants";

export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
