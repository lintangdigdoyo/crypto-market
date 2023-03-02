import { View, StyleSheet } from "react-native";

import { theme } from "../../styles/palette";
import CryptoName from "./CryptoName";
import Percentage from "./Percentage";
import Price from "./Price";

const CryptoList = () => {
  return (
    <View style={styles.container}>
      <CryptoName />
      <View>
        <Price value="10000" />
        <Percentage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
  },
});

export default CryptoList;
