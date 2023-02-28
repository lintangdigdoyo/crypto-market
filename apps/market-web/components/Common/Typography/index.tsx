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
  heading1: "text-2xl font-bold",
  heading2: "text-xl font-bold",
  paragraph1: "text-lg",
  paragraph2: "text-base",
  caption: "text-sm",
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
        "base-text",
        /** props styles */
        CLASS_STYLES[variant],
        { ["font-bold"]: bold },
        /** custom styles */
        className
      ),
      ...restProps,
    },
    children
  );
  return <>{Element}</>;
};

export default Typography;
