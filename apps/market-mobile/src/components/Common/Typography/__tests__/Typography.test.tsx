import { screen, render } from "@testing-library/react-native";
import { TextStyle } from "react-native";
import "@testing-library/jest-native";

import { theme } from "../../../../../src/styles/palette";
import { TypographyVariantType } from "../types";
import Typography from "..";

describe("Typography component", () => {
  it("should renders typography with title variant styles", () => {
    const props = {
      children: "children",
      variant: "title" as TypographyVariantType,
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ fontSize: 16, fontWeight: "600" });
  });

  it("should renders typography with text variant styles", () => {
    const props = {
      children: "children",
      variant: "title" as TypographyVariantType,
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ fontSize: 16 });
  });

  it("should renders typography with caption variant styles", () => {
    const props = {
      children: "children",
      variant: "caption" as TypographyVariantType,
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ fontSize: 14, color: theme.colors.gray });
  });

  it("should renders typography with color red", () => {
    const props = {
      children: "children",
      color: "red",
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ color: "red" });
  });

  it("should renders typography with fontWeight 500", () => {
    const props = {
      children: "children",
      weight: "500" as TextStyle["fontWeight"],
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ fontWeight: "500" });
  });

  it("custom weight and color should override style from variant", () => {
    const props = {
      children: "children",
      variant: "caption" as TypographyVariantType,
      weight: "800" as TextStyle["fontWeight"],
      color: "red",
    };
    render(<Typography {...props} />);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle({ fontWeight: "800", color: "red" });
  });
});
