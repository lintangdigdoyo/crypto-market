import { StyleSheet, View } from "react-native";

import { theme } from "../../../styles/palette";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderColor: theme.colors.gray,
    borderTopWidth: 1,
    opacity: 0.1,
  },
});

export default Separator;
