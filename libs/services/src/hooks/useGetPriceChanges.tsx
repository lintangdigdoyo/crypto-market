import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { QueryKeyEnum, PriceChangesResType } from "../types";
import { getPriceChanges } from "../queries";

const useGetPriceChanges = (
  baseURL: string,
  options?: UseQueryOptions<PriceChangesResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.PriceChanges],
    queryFn: () => getPriceChanges(baseURL),
    ...options,
  });
};

export default useGetPriceChanges;
