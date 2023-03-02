import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../../styles/palette";
import Typography from "../Common/Typography";

const Percentage = () => {
  return (
    <View style={styles.container}>
      <FontAwesome
        style={styles.logo}
        name="caret-up"
        size={24}
        color={theme.colors.success}
      />
      <Typography variant="caption" weight="600" color={theme.colors.success}>
        33.3%
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    marginRight: theme.spacing.s,
  },
});

export default Percentage;
