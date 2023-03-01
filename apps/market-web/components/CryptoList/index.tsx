import { useMemo } from "react";

import { getCurrenciesPrice } from "@crypto-market/services";

import {
  useGetPriceChanges,
  useGetSupportedCurrencies,
} from "../../services/hooks";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";

interface CryptoListProps {
  isMobile: boolean;
}

const CryptoList = ({ isMobile }: CryptoListProps) => {
  const isMobileDevice = useMediaQuery("(max-width: 640px)", isMobile);

  const { data: dataGetSupportedCurrencies } = useGetSupportedCurrencies({
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 65,
  });

  const { data: dataGetPriceChange } = useGetPriceChanges({
    refetchInterval: 1000 * 2,
  });

  const currenciesPrice = useMemo(
    () => getCurrenciesPrice(dataGetSupportedCurrencies, dataGetPriceChange),
    [dataGetPriceChange, dataGetSupportedCurrencies]
  );

  return (
    <>
      {isMobileDevice ? (
        <MobileList currenciesPrice={currenciesPrice} />
      ) : (
        <DesktopList currenciesPrice={currenciesPrice} />
      )}
    </>
  );
};

export default CryptoList;
