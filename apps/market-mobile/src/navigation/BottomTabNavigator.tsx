import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RootTabParamList } from "./types";
import { theme } from "../styles/palette";
import Market from "../screens/Market";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabMarket"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.black,
        headerTitleStyle: theme.textVariants.header,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <BottomTab.Screen
        name="TabMarket"
        component={Market}
        options={{
          title: "Market",
          headerTitleAlign: "left",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-stats-chart" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default BottomTabNavigator;
