import { memo } from "react";
import { View, StyleSheet } from "react-native";

import { theme } from "../../styles/palette";
import Percentage from "./Percentage";
import Price from "./Price";
import CryptoName from "./CryptoName";

interface CryptoListItemProps {
  name: string;
  color: string;
  logo: string;
  currencySymbol: string;
  latestPrice: string;
  day: string;
}

const CryptoListItem = ({
  name,
  color,
  logo,
  currencySymbol,
  latestPrice,
  day,
}: CryptoListItemProps) => {
  return (
    <View style={styles.container}>
      <CryptoName
        name={name}
        symbol={currencySymbol}
        logoUrl={logo}
        color={color}
      />
      <View style={styles.price}>
        <Price value={latestPrice} />
        <Percentage value={day} />
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
    borderColor: theme.colors.grayLight,
    borderBottomWidth: 1,
  },
  price: {
    alignItems: "flex-end",
  },
});

export default memo(CryptoListItem);
