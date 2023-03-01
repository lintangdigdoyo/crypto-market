import { TextStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#0a68f4",
    primaryLight: "#edf4fe",
    success: "#25a764",
    error: "#e54040",
    white: "#ffffff",
    black: "#0b0a0a",
    gray: "#929396",
  },
  spacing: {
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
    body: {
      fontSize: 16,
    },
  },
};
