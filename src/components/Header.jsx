import React, { useState } from "react";
import { LOGOURL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isLogin, setIsLogin] = useState();
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between shadow-lg mb-5 bg-gradient-to-br from-pink-50 via-pink-300 to-pink-600">
      <div className="logo-container">
        <img src={LOGOURL} className="w-24 p-5" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li
            className={`px-4 text-white rounded-lg ${
              onlineStatus ? "bg-green-800" : "bg-red-400"
            }`}
          >
            {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4 text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-white">
            <Link to={"/about"}> About us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to={"/contact"}> Contact us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to={"/grocery"}> Grocery</Link>
          </li>
          <li className="px-4 text-white">
            <Link to={"/cart"}> Cart [{cartItems.length} items] </Link>
          </li>
          <button
            className="px-4 pb-1 text-white bg-blue-500 w-15 h-15 rounded-lg"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Log Out" : "Log In"}
          </button>
        </ul>
      </div>
    </div>
  );
};
