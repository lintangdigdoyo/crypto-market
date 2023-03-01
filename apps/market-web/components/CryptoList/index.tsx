import { getCurrenciesPrice } from "@crypto-market/services";

import {
  useGetPriceChanges,
  useGetSupportedCurrencies,
} from "../../services/hooks";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";

const CryptoList = () => {
  const isMobileDevice = useMediaQuery("(max-width: 640px)");

  const { data: dataGetSupportedCurrencies } = useGetSupportedCurrencies({
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 65,
  });

  const { data: dataGetPriceChange } = useGetPriceChanges({
    refetchInterval: 1000 * 2,
  });

  return (
    <>
      {isMobileDevice ? (
        <MobileList />
      ) : (
        <DesktopList
          currenciesPrice={getCurrenciesPrice(
            dataGetSupportedCurrencies,
            dataGetPriceChange
          )}
        />
      )}
    </>
  );
};

export default CryptoList;
