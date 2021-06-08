import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages";

it("should render the Next.js wellcome page", () => {
  render(<Home />);
  expect(screen.getByText("Welcome to")).toBeInTheDocument();
});
