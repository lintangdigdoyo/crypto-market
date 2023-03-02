import {
  PriceChangesResType,
  SupportedCurrenciesResType,
  useGetPriceChanges as useGetPriceChangesLib,
  useGetSupportedCurrencies as useGetSupportedCurrenciesLib,
} from "@crypto-market/services";
import { UseQueryOptions } from "@tanstack/react-query";

const apiBase = "https://api.pintu.co.id/v2";

export const useGetSupportedCurrencies = (
  options?: UseQueryOptions<SupportedCurrenciesResType>
) => useGetSupportedCurrenciesLib(apiBase, options);

export const useGetPriceChanges = (
  options?: UseQueryOptions<PriceChangesResType>
) => useGetPriceChangesLib(apiBase, options);
