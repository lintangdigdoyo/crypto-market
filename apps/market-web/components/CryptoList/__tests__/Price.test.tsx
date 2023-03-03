import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Price from "../components/Price";

describe("Price component", () => {
  it("should renders correct currency format", () => {
    render(<Price value="100000" />);
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("Rp 100.000");
  });

  it("should renders price with value Rp 0 when passing empty prop", () => {
    render(<Price />);
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("Rp 0");
  });
});
