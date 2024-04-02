import "@testing-library/jest-dom";
import { Header } from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Test file for header", () => {
  test("Cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart [0 items]");

    expect(cartItem).toBeInTheDocument();
  });

  test("Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Log In" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Log Out" });

    expect(logoutButton).toBeInTheDocument();
  });
});
