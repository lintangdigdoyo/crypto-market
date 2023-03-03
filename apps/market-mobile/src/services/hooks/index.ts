import {
  PriceChangesResType,
  SupportedCurrenciesResType,
  useGetPriceChanges as useGetPriceChangesLib,
  useGetSupportedCurrencies as useGetSupportedCurrenciesLib,
} from "@crypto-market/services";
import { UseQueryOptions } from "@tanstack/react-query";

const apiBase = process.env["API_BASE_URL"] ?? "";

export const useGetSupportedCurrencies = (
  options?: UseQueryOptions<SupportedCurrenciesResType>
) => useGetSupportedCurrenciesLib(apiBase, options);

export const useGetPriceChanges = (
  options?: UseQueryOptions<PriceChangesResType>
) => useGetPriceChangesLib(apiBase, options);
