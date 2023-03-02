import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import linkingConfiguration from "./linkingConfiguration";
import { theme } from "../styles/palette";
import RootNavigator from "./RootNavigator";

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.white,
        },
      }}
      linking={linkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
