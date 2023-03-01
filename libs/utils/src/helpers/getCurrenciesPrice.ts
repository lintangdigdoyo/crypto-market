import {
  PriceChangesResType,
  SupportedCurrenciesResType,
} from "@crypto-market/services";

const getCurrenciesPrice = (
  currencies?: SupportedCurrenciesResType,
  priceChanges?: PriceChangesResType
) => {
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