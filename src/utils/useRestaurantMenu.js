import { useEffect, useState } from "react";

export const useRestaurantMenu = (resName) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const fetchData = async () => {
    try {
      const { restaurantMenuData } = await import("../utils/constants");
      setResInfo(
        restaurantMenuData.find((each) => each.restaurantName === resName)
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  return resInfo;
};
