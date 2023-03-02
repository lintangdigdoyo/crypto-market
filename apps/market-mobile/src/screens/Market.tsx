import { RefreshControl, ScrollView } from "react-native";

import { getCurrenciesPrice } from "@crypto-market/utils";

import {
  useGetSupportedCurrencies,
  useGetPriceChanges,
} from "../services/hooks";
import CryptoListItem from "../components/CryptoListItem";
import ListSkeleton from "../components/Common/Skeleton/ListSkeleton";

const Market = () => {
  const { data: dataGetSuppertedCurrencies } = useGetSupportedCurrencies({
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 65,
  });

  const {
    data: dataGetPriceChange,
    isLoading: isLoadingGetPriceChange,
    refetch: refetchGetPriceChange,
  } = useGetPriceChanges({
    refetchInterval: 1000 * 5,
  });

  const data = getCurrenciesPrice(
    dataGetSuppertedCurrencies,
    dataGetPriceChange
  );

  if (isLoadingGetPriceChange) return <ListSkeleton />;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isLoadingGetPriceChange}
          onRefresh={refetchGetPriceChange}
        />
      }
    >
      {data.map((item, index) => (
        <CryptoListItem
          key={index}
          name={item.name}
          logo={item.logo}
          currencySymbol={item.currencySymbol}
          color={item.color}
          latestPrice={item.latestPrice ?? ""}
          day={item.day ?? ""}
        />
      ))}
    </ScrollView>
  );
};

export default Market;
