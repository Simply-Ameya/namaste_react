import React from "react";

const RestaurantCard = ({
  resName,
  cuisine,
  rating,
  deliveryTime,
  imageUrl,
}) => {
  return (
    <div
      data-testid="res-card"
      className="m-4 p-4 w-[200px] h-[300px] border-fuchsia-300 border-2 bg-gray-100 rounded-lg"
    >
      <img
        className="w-[200px] h-[130px] rounded-xl"
        alt="res-logo"
        src={imageUrl}
      />
      <h1 className="mt-2 font-bold">{resName}</h1>
      <h4 className="mt-1">{cuisine}</h4>
      <h4 className="mt-1">{rating} Stars</h4>
      <h4 className="mt-1">{deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return ({ resName, cuisine, rating, deliveryTime, imageUrl }) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 pb-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard
          resName={resName}
          cuisine={cuisine}
          rating={rating}
          deliveryTime={deliveryTime}
          imageUrl={imageUrl}
        />
      </div>
    );
  };
};

export default RestaurantCard;
