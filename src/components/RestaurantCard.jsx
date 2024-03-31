import React from "react";

export const RestaurantCard = ({
  resName,
  cuisine,
  rating,
  deliveryTime,
  imageUrl,
}) => {
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
