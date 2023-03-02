import { View, StyleSheet } from "react-native";

import { theme } from "../../../../src/styles/palette";
import { SkeletonType } from "./types";

interface SkeletonProps {
  variant: SkeletonType;
  width?: number;
  height?: number;
}

const Skeleton = ({ variant, width, height }: SkeletonProps) => {
  return (
    <View
      style={[
        styles.base,
        styles[variant],
        !!width && { width },
        !!height && { height },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.grayLight,
    opacity: 0.4,
    borderRadius: 4,
  },
  text: {
    width: "100%",
    height: 22,
  },
  circular: {
    height: 42,
    width: 42,
    borderRadius: 100,
  },
  rectangular: {
    height: 42,
    width: 42,
  },
});

export default Skeleton;
