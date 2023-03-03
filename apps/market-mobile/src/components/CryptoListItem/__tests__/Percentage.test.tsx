import { screen, render } from "@testing-library/react-native";
import "@testing-library/jest-native";

import Percentage from "../Percentage";
import { theme } from "../../../styles/palette";

describe("Percentage component", () => {
  it("should displays arrow up icon when value >= 0", () => {
    render(<Percentage value="10" />);

    const arrowUp = screen.queryByTestId("arrow-up");
    const arrowDown = screen.queryByTestId("arrow-down");
    expect(arrowUp).toBeDefined();
    expect(arrowDown).toBeNull();
  });

  it("should displays arrow down icon when value < 0", () => {
    render(<Percentage value="-10" />);

    const arrowUp = screen.queryByTestId("arrow-up");
    const arrowDown = screen.queryByTestId("arrow-down");
    expect(arrowUp).toBeNull();
    expect(arrowDown).toBeDefined();
  });

  it("should displays percentage with color green when value >= 0", () => {
    render(<Percentage value="15" />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveStyle({ color: theme.colors.success });
  });

  it("should displays percentage with color red when value < 0", () => {
    render(<Percentage value="-15" />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveStyle({ color: theme.colors.error });
  });

  it("should renders percentage with value 0 when passing empty prop", () => {
    render(<Percentage />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveTextContent("0");
  });
});
