import { FlatList, RefreshControl } from "react-native";

import CryptoList from "../components/CryptoList";
import Separator from "../components/Common/Separator";

const Market = () => {
  return (
    <FlatList
      data={[{ item: "1" }, { item: "2" }]}
      renderItem={({ item }) => <CryptoList />}
      refreshControl={<RefreshControl refreshing={false} />}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default Market;
