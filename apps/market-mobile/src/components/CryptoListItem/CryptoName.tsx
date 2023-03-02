import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";

import { theme } from "../../styles/palette";
import Typography from "../Common/Typography";

interface CryptoNameProps {
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
}

const CryptoName = ({ name, symbol, color, logoUrl }: CryptoNameProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <SvgUri color={color} width={30} height={30} uri={logoUrl} />
      </View>
      <View>
        <Typography variant="title">{name}</Typography>
        <Typography variant="caption">{symbol}</Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginRight: theme.spacing.m,
    width: 30,
    height: 30,
  },
});

export default memo(CryptoName);
