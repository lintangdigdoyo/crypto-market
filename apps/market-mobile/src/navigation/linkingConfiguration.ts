import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./types";

const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabMarket: {
            screens: {
              TabMarketScreen: "market",
            },
          },
        },
      },
    },
  },
};

export default linkingConfiguration;
