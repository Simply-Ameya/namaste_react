import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.creazilla.com/illustrations/5626850/restaurant-logo-illustration-md.jpeg"
          className="logo"
        />
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

const RestaurantCard = ({
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
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const restaurantData = [
  {
    resName: "Meghna Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: "4.4 Stars",
    deliveryTime: "38 mins",
    imageUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  },
  {
    resName: "Taj Mahal Restaurant",
    cuisine: "Indian, Mughlai, Chinese",
    rating: "4.2 Stars",
    deliveryTime: "45 mins",
    imageUrl:
      "https://images.pexels.com/photos/749869/pexels-photo-749869.jpeg",
  },
  {
    resName: "Golden Dragon",
    cuisine: "Chinese, Thai, Asian",
    rating: "4.5 Stars",
    deliveryTime: "30 mins",
    imageUrl:
      "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg",
  },
  {
    resName: "Pizza Hut",
    cuisine: "Pizza, Fast Food, Italian",
    rating: "4.7 Stars",
    deliveryTime: "25 mins",
    imageUrl:
      "https://images.pexels.com/photos/396228/pexels-photo-396228.jpeg",
  },
  {
    resName: "McDonald's",
    cuisine: "Burgers, Fast Food",
    rating: "4.3 Stars",
    deliveryTime: "20 mins",
    imageUrl:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  },
  {
    resName: "Subway",
    cuisine: "Sandwiches, Fast Food",
    rating: "4.6 Stars",
    deliveryTime: "22 mins",
    imageUrl:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },
  {
    resName: "Sushi Express",
    cuisine: "Japanese, Sushi",
    rating: "4.8 Stars",
    deliveryTime: "35 mins",
    imageUrl: "https://images.pexels.com/photos/64792/pexels-photo-64792.jpeg",
  },
  {
    resName: "Pasta Italia",
    cuisine: "Italian, Pasta",
    rating: "4.5 Stars",
    deliveryTime: "40 mins",
    imageUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  },
  {
    resName: "Tandoori Flames",
    cuisine: "Indian, Tandoori",
    rating: "4.4 Stars",
    deliveryTime: "30 mins",
    imageUrl:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },
  {
    resName: "Kung Pao Chicken House",
    cuisine: "Chinese, Asian",
    rating: "4.2 Stars",
    deliveryTime: "38 mins",
    imageUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantData.map((each, index) => (
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

const AppLayout = () => {
  return (
    <div className="App">
      <Header />

      <Body />

      {/* footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
