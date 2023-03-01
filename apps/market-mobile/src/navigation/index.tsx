import { NavigationContainer } from "@react-navigation/native";

import linkingConfiguration from "./linkingConfiguration";
import RootNavigator from "./RootNavigator";

const Navigation = () => {
  return (
    <NavigationContainer linking={linkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
