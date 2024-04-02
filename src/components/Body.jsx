import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // const timeout = setTimeout(() => {
    fetchData();
    // }, 50);

    // return () => clearTimeout(timeout);
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

  if (!onlineStatus) {
    return (
      <div>
        <h1>Looks like you are offline</h1>
        <p>Please check your internet connection</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex m-5">
        <div className="">
          <input
            type="text"
            className="border-rose-300 border-2 mx-5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="text-white bg-green-300 w-20 h-15 rounded-lg mx-5 pb-1"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <button
          className="text-white bg-gray-300 w-auto h-15 rounded-lg mx-5 pb-1 px-2"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurant ? (
        <div className="flex flex-wrap justify-around">
          {filteredRestaurants.map((each, index) => (
            <Link to={`/restaurant/${each.resName}`} key={index}>
              {each.promoted ? (
                <RestaurantCardPromoted
                  resName={each.resName}
                  cuisine={each.cuisine}
                  rating={each.rating}
                  deliveryTime={each.deliveryTime}
                  imageUrl={each.imageUrl}
                />
              ) : (
                <RestaurantCard
                  resName={each.resName}
                  cuisine={each.cuisine}
                  rating={each.rating}
                  deliveryTime={each.deliveryTime}
                  imageUrl={each.imageUrl}
                />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
