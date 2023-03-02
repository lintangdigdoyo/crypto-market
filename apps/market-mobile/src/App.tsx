import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./services/queryClient";
import { theme } from "./styles/palette";
import Navigation from "./navigation";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar
          backgroundColor={theme.colors.white}
          barStyle="dark-content"
        />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
