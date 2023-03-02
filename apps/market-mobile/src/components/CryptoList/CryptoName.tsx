import { View, Text, StyleSheet } from "react-native";

import { theme } from "../../styles/palette";
import Typography from "../Common/Typography";

const CryptoName = () => {
  return (
    <View style={styles.container}>
      <Text>LOGO</Text>
      <View style={styles.content}>
        <Typography variant="title">Bitcoin</Typography>
        <Typography variant="caption">BTC</Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    marginLeft: theme.spacing.m,
  },
});

export default CryptoName;
