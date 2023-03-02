import { StyleSheet, View } from "react-native";

import { theme } from "../../../styles/palette";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.m,
  },
});

export default Container;
