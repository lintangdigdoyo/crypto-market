import { PriceChangesResType, SupportedCurrenciesResType } from "../types";

const getCurrenciesPrice = (
  currencies: SupportedCurrenciesResType,
  priceChanges: PriceChangesResType
) => {
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
