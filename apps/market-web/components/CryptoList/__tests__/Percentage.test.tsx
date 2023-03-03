import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Percentage from "../components/Percentage";

describe("Percentage component", () => {
  it("should displays arrow up icon when value >= 0", () => {
    render(<Percentage value="10" />);

    const arrowUp = screen.queryByTestId("arrow-up");
    const arrowDown = screen.queryByTestId("arrow-down");
    expect(arrowUp).toBeInTheDocument();
    expect(arrowDown).not.toBeInTheDocument();
  });

  it("should displays arrow down icon value < 0", () => {
    render(<Percentage value="-10" />);

    const arrowUp = screen.queryByTestId("arrow-up");
    const arrowDown = screen.queryByTestId("arrow-down");
    expect(arrowUp).not.toBeInTheDocument();
    expect(arrowDown).toBeInTheDocument();
  });

  it("should displays percentage with color green when value >= 0", () => {
    render(<Percentage value="15" />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveClass("text-success");
  });

  it("should displays percentage with color red when value < 0", () => {
    render(<Percentage value="-15" />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveClass("text-error");
  });

  it("should renders percentage with value 0 when passing empty prop", () => {
    render(<Percentage />);

    const percentage = screen.getByTestId("percentage");
    expect(percentage).toHaveTextContent("0");
  });
});
