import { View, StyleSheet } from "react-native";

import { theme } from "../../styles/palette";

const ArrowDown = () => <View style={styles.icon} testID="arrow-down" />;

const styles = StyleSheet.create({
  icon: {
    width: 0,
    height: 0,
    borderWidth: 6,
    borderTopWidth: 8,
    borderBottomWidth: 0,
    borderColor: "transparent",
    borderTopColor: theme.colors.error,
  },
});

export default ArrowDown;
