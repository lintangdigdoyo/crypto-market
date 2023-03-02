import { Text, TextProps, TextStyle } from "react-native";

import { theme } from "../../../styles/palette";
import { TypographyVariantType } from "./types";

interface TypographyProps extends TextProps {
  variant?: TypographyVariantType;
  color?: string;
  weight?: TextStyle["fontWeight"];
  children: React.ReactNode;
}

const Typography = ({
  variant = "text",
  color,
  children,
  weight,
  ...restProps
}: TypographyProps) => {
  return (
    <Text
      style={[
        theme.textVariants[variant],
        weight && { fontWeight: weight },
        { color },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
