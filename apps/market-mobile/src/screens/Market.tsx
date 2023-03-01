import { useRef } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

const Market = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <ScrollView
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.section}>
        <Text style={styles.textLg}>Hello there</Text>
        <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
          Welcome MarketMobile
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.hero}>
          <View style={styles.heroTitleText}>
            <Text style={[styles.textLg, styles.heroTitleText]}>
              You're up and running
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: "500",
  },
  hero: {
    borderRadius: 12,
    backgroundColor: "#143055",
    padding: 36,
    marginBottom: 24,
  },
  heroTitleText: {
    color: "#ffffff",
    marginLeft: 12,
  },
});

export default Market;
