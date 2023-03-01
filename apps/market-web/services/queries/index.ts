import { getSupportedCurrencies as getSupportedCurrenciesLib } from "@crypto-market/services";

const apiBase = process.env.API_BASE;

export const getSupportedCurrencies = () => getSupportedCurrenciesLib(apiBase);
