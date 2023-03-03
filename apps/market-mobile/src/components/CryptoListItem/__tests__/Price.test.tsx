import { screen, render } from "@testing-library/react-native";
import "@testing-library/jest-native";

import Price from "../Price";

describe("Price component", () => {
  it("should renders a correct currency format", () => {
    render(<Price value="1000000" />);
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("Rp 1.000.000");
  });

  it("should renders price with value Rp 0 when passing empty prop", () => {
    render(<Price />);
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("Rp 0");
  });
});
