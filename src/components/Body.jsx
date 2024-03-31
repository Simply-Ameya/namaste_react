import React, { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { RESTAURANTDATA } from "../utils/constants";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(RESTAURANTDATA);

  const handleFilter = () => {
    setListOfRestaurant(RESTAURANTDATA.filter((each) => each.rating > 4.5));
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((each, index) => (
          <RestaurantCard
            key={index}
            resName={each.resName}
            cuisine={each.cuisine}
            rating={each.rating}
            deliveryTime={each.deliveryTime}
            imageUrl={each.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
