import { useQuery } from "@tanstack/react-query";

import { QueryKeyEnum } from "../types";
import { getPriceChanges } from "../queries";

const useGetPriceChanges = (baseURL?: string) => {
  return useQuery({
    queryKey: [QueryKeyEnum.PriceChanges],
    queryFn: () => getPriceChanges(baseURL),
  });
};

export default useGetPriceChanges;
