import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/reduxStore";
import { Provider } from "react-redux";

test("renders App component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
