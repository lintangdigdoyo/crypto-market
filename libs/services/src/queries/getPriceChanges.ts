import api from "../api";
import { PriceChangesResType } from "../types";

const getPriceChanges = async (baseURL?: string) => {
  const res = await api.get<PriceChangesResType>("/trade/price-changes", {
    baseURL,
  });
  return res.data;
};

export default getPriceChanges;
