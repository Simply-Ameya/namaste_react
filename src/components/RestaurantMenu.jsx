import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resName } = useParams();

  const dispatch = useDispatch();

  resInfo = useRestaurantMenu(resName);

  const handleAdd = (value) => {
    dispatch(addItems(value));
  };

  return (
    <>
      {resInfo ? (
        <div className="flex flex-col w-[100vw] items-center">
          <h1 className="font-bold w-[70%] bg-gray-300 text-center pb-1 shadow-lg">
            {resInfo.restaurantName}
          </h1>
          <h2 className="my-5 w-[70%] shadow-lg text-center">Menu</h2>
          <ul className="w-[70%]">
            {resInfo.menu?.map((each) => (
              <React.Fragment>
                <li className="flex justify-between p-4 font-semibold">
                  <h4 className="w-96">{each.itemName}</h4>
                  <div className="flex-grow"></div>
                  <div className="flex-grow border-b border-dashed border-black"></div>
                  <p className="w-20">{each.price}</p>
                  <button
                    className="bg-black text-white rounded-lg w-7 pb-1"
                    onClick={() => handleAdd(each.itemName)}
                  >
                    +
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default RestaurantMenu;
