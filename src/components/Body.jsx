import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
// import { RESTAURANTDATA } from "../utils/constants";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const fetchData = async () => {
    try {
      const { RESTAURANTDATA } = await import("../utils/constants");
      setListOfRestaurant(RESTAURANTDATA);
      setFilteredRestaurants(RESTAURANTDATA);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilter = () => {
    setFilteredRestaurants(
      listOfRestaurant.filter((each) => each.rating > 4.5)
    );
  };

  const handleSearchClick = () => {
    setFilteredRestaurants(
      listOfRestaurant.filter((each) =>
        each.resName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurant ? (
        <div className="res-container">
          {filteredRestaurants.map((each, index) => (
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
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
