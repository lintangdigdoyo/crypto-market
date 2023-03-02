import { theme } from "apps/market-mobile/src/styles/palette";
import { View, StyleSheet } from "react-native";

import Container from "../Container";
import Skeleton from "./Skeleton";

const ListSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 4 }).map((_, index) => (
        <View key={index} style={styles.item}>
          <Skeleton variant="rectangular" />
          <View style={styles.textContainer}>
            <View style={styles.textContent}>
              <Skeleton variant="text" height={18} width={140} />
              <Skeleton variant="text" height={18} width={90} />
            </View>
            <View style={[styles.textContent, { alignItems: "flex-end" }]}>
              <Skeleton variant="text" height={18} width={90} />
              <Skeleton variant="text" height={18} width={40} />
            </View>
          </View>
        </View>
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: theme.spacing.m,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: theme.spacing.s,
  },
  textContent: {
    justifyContent: "space-between",
  },
});

export default ListSkeleton;
