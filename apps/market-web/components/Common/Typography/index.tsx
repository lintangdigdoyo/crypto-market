import { createElement } from "react";
import classNames from "classnames";

import { TypographyType, TypographyVariantType } from "./types";

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  type?: TypographyType;
  variant?: TypographyVariantType;
  className?: string;
  bold?: boolean;
  children: React.ReactNode;
}

const CLASS_STYLES = {
  heading1: "typography-heading1",
  heading2: "typography-heading2",
  paragraph1: "typography-paragraph1",
  paragraph2: "typography-paragraph2",
  caption: "typography-caption",
};

const Typography = ({
  type = "p",
  variant = "paragraph2",
  className,
  bold,
  children,
  ...restProps
}: TypographyProps) => {
  const Element = createElement(
    type,
    {
      className: classNames(
        /** base styles */
        "typography-base",
        /** props styles */
        CLASS_STYLES[variant],
        { ["font-bold"]: bold },
        /** custom styles */
        className
      ),
      "data-testid": "typography",
      ...restProps,
    },
    children
  );
  return <>{Element}</>;
};

export default Typography;
