import { Text, TextProps, TextStyle } from "react-native";

import { theme } from "../../../styles/palette";
import { TypographyVariantType } from "./types";

interface TypographyProps extends TextProps {
  variant?: TypographyVariantType;
  color?: string;
  weight?: TextStyle["fontWeight"];
  style?: TextStyle;
  children: React.ReactNode;
}

const Typography = ({
  variant = "text",
  color,
  children,
  weight,
  style,
  ...restProps
}: TypographyProps) => {
  return (
    <Text
      style={[
        theme.textVariants[variant],
        weight && { fontWeight: weight },
        !!color && { color },
        !!style && { ...style },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
