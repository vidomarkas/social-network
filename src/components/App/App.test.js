import React from "react";
// import { render, screen } from "@testing-library/react";
import { MainApp } from "./App";
import ReactDOM from "react-dom";

test("renders MainApp component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
