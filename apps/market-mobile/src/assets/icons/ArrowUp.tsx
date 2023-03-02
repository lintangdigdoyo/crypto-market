import { StyleSheet, View } from "react-native";

import { theme } from "../../styles/palette";

const ArrowUp = () => <View style={styles.icon} />;

const styles = StyleSheet.create({
  icon: {
    width: 0,
    height: 0,
    borderWidth: 6,
    borderTopWidth: 0,
    borderBottomWidth: 8,
    borderColor: "transparent",
    borderBottomColor: theme.colors.success,
  },
});

export default ArrowUp;
