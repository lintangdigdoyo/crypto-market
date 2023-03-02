import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { formatCurrency, useGetPreviousValue } from "@crypto-market/utils";

import Typography from "../Common/Typography";
import { theme } from "../../styles/palette";

const Price = ({ value = "" }) => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  const previousValue = parseInt(useGetPreviousValue(value) ?? "");
  const currentValue = parseInt(value);

  useEffect(() => {
    if (previousValue === currentValue) return;
    colorAnim.setValue(1);
    Animated.timing(colorAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const interpolatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      theme.colors.black,
      currentValue < previousValue ? theme.colors.error : theme.colors.success,
    ],
  });

  return (
    <Animated.Text style={{ color: interpolatedColor }}>
      <Typography variant="title">{formatCurrency(value)}</Typography>
    </Animated.Text>
  );
};

export default Price;
