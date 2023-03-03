import { screen, render, AllByRole } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TypographyType, TypographyVariantType } from "../types";
import Typography from "..";

describe("Typography component", () => {
  it("should renders typography with typography-heading1 class", () => {
    const props = {
      children: <>children</>,
      variant: "heading1" as TypographyVariantType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveClass("typography-heading1");
  });

  it("should renders typography with typography-heading2 class", () => {
    const props = {
      children: <>children</>,
      variant: "heading2" as TypographyVariantType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveClass("typography-heading2");
  });

  it("should renders typography with typography-paragraph1 class", () => {
    const props = {
      children: <>children</>,
      variant: "paragraph1" as TypographyVariantType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveClass("typography-paragraph1");
  });

  it("should renders typography with typography-paragraph2 class", () => {
    const props = {
      children: <>children</>,
      variant: "paragraph2" as TypographyVariantType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveClass("typography-paragraph2");
  });

  it("should renders typography with typography-caption class", () => {
    const props = {
      children: <>children</>,
      variant: "caption" as TypographyVariantType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveClass("typography-caption");
  });

  it("should renders typography with html P element", () => {
    const props = {
      children: <>children</>,
      type: "p" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("P");
  });

  it("should renders typography with html H1 element", () => {
    const props = {
      children: <>children</>,
      type: "h1" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H1");
  });

  it("should renders typography with html H2 element", () => {
    const props = {
      children: <>children</>,
      type: "h2" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H2");
  });

  it("should renders typography with html H3 element", () => {
    const props = {
      children: <>children</>,
      type: "h3" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H3");
  });

  it("should renders typography with html H4 element", () => {
    const props = {
      children: <>children</>,
      type: "h4" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H4");
  });

  it("should renders typography with html H5 element", () => {
    const props = {
      children: <>children</>,
      type: "h5" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H5");
  });

  it("should renders typography with html H6 element", () => {
    const props = {
      children: <>children</>,
      type: "h6" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("H6");
  });

  it("should renders typography with html SPAN element", () => {
    const props = {
      children: <>children</>,
      type: "span" as TypographyType,
    };
    render(<Typography {...props} />);
    const typography = screen.getByTestId("typography");
    expect(typography.tagName).toBe("SPAN");
  });
});
