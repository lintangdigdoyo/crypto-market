import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RootTabParamList } from "./types";
import Market from "../screens/Market";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="TabMarket">
      <BottomTab.Screen
        name="TabMarket"
        component={Market}
        options={{ title: "Market" }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
