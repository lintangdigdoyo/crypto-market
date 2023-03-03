import {
  PriceChangesResType,
  SupportedCurrenciesResType,
  CurrenciesPriceType,
} from "@crypto-market/services";

//to get the crypto prices in every currency
const getCurrenciesPrice = (
  currencies?: SupportedCurrenciesResType,
  priceChanges?: PriceChangesResType
): CurrenciesPriceType[] => {
  if (!currencies || !priceChanges) return [];
  const result = currencies.payload.map((currency) => {
    const matchesPrice = priceChanges.payload.find((price) =>
      price.pair.includes(currency.currencyGroup.toLocaleLowerCase())
    );
    return {
      ...currency,
      ...matchesPrice,
    };
  });
  return result;
};

export default getCurrenciesPrice;
