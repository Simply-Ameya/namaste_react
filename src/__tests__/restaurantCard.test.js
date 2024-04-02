import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";

describe("Restaurant Card test", () => {
  test("test 1", () => {
    render(
      <RestaurantCard
        resName={"resName"}
        cuisine={"cuisine"}
        rating={"rating"}
        deliveryTime={"deliveryTime"}
        imageUrl={"imageUrl"}
      />
    );

    const text = screen.getByText("resName");

    expect(text).toBeInTheDocument();
  });
});
