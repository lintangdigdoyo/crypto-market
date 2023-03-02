import { View, StyleSheet } from "react-native";

import { theme } from "../../styles/palette";
import { ArrowDown, ArrowUp } from "../../assets/icons";
import Typography from "../Common/Typography";

const Percentage = ({ value = "0" }) => {
  const isNegative = value.includes("-");

  return (
    <View style={styles.container}>
      {isNegative ? <ArrowDown /> : <ArrowUp />}
      <Typography
        variant="caption"
        weight="600"
        color={isNegative ? theme.colors.error : theme.colors.success}
      >
        {value}%
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
