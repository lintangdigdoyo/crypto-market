import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { QueryKeyEnum, SupportedCurrenciesResType } from "../types";
import { getSupportedCurrencies } from "../queries";

const useGetSupportedCurrencies = (
  baseURL: string,
  options?: UseQueryOptions<SupportedCurrenciesResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.Currencies],
    queryFn: () => getSupportedCurrencies(baseURL),
    ...options,
  });
};

export default useGetSupportedCurrencies;
