import {
  useGetPriceChanges as useGetPriceChangesLib,
  useGetSupportedCurrencies as useGetSupportedCurrenciesLib,
} from "@crypto-market/services";

const baseURL = "/api";

export const useGetPriceChanges = () => useGetPriceChangesLib(baseURL);
export const useGetSupportedCurrencies = () =>
  useGetSupportedCurrenciesLib(baseURL);
