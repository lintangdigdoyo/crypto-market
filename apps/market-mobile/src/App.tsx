import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
    </SafeAreaProvider>
  );
};

export default App;
