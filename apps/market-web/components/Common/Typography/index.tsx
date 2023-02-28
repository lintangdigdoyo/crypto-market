import { createElement } from "react";
import classNames from "classnames";

import { TypographyType, TypographyVariantType } from "./types";
import { CLASS_STYLES } from "./constants";

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  type: TypographyType;
  variant?: TypographyVariantType;
  classNameProps?: string;
  bold?: boolean;
  children: React.ReactNode;
}

const Typography = ({
  type,
  variant = "paragraph2",
  classNameProps,
  bold,
  children,
  ...restProps
}: TypographyProps) => {
  const Element = createElement(
    type,
    {
      className: classNames(
        CLASS_STYLES[variant],
        { ["font-bold"]: bold },
        classNameProps
      ),
      ...restProps,
    },
    children
  );
  return <>{Element}</>;
};

export default Typography;
