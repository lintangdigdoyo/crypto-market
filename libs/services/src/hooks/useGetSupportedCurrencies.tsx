import { useQuery } from "@tanstack/react-query";

import { QueryKeyEnum } from "../types";
import { getSupportedCurrencies } from "../queries";

const useGetSupportedCurrencies = (baseURL?: string) => {
  return useQuery({
    queryKey: [QueryKeyEnum.Currencies],
    queryFn: () => getSupportedCurrencies(baseURL),
  });
};

export default useGetSupportedCurrencies;
