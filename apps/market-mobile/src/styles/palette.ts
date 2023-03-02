import { TextStyle } from "react-native";

const colors = {
  primary: "#0a68f4",
  primaryLight: "#edf4fe",
  success: "#25a764",
  error: "#e54040",
  white: "#ffffff",
  black: "#0b0a0a",
  gray: "#929396",
  grayLight: "#e1e1e3",
};

export const theme = {
  colors,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 24,
      fontWeight: "bold" as TextStyle["fontWeight"],
    },
    title: {
      fontSize: 16,
      fontWeight: "600" as TextStyle["fontWeight"],
    },
    text: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
      color: colors.gray,
    },
  },
};
