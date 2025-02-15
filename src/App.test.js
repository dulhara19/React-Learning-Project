import React from "react";

import { screen } from "@testing-library/react";

import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/my react app/i);
  expect(linkElement).toBeInTheDocument();
});
