import api from "../api";
import { SupportedCurrenciesResType } from "../types";

const getSupportedCurrencies = async (baseURL: string) => {
  const res = await api.get<SupportedCurrenciesResType>(
    "/wallet/supportedCurrencies",
    {
      baseURL,
    }
  );
  return res.data;
};

export default getSupportedCurrencies;
