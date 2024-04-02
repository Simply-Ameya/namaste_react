import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../components/Body";
import { RESTAURANTDATA } from "../utils/constants";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTDATA);
    },
  });
});

describe("Test file for Body component", () => {
  beforeAll(() => {});

  beforeEach(() => {});

  test("integration test", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const search = screen.getByRole("textbox");

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(search).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    fireEvent.change(search, { target: { value: "Meghna" } });

    fireEvent.click(searchBtn);

    const resCards = screen.getAllByTestId("res-card");

    expect(resCards.length).toBe(1);
  });
});
