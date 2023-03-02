export enum QueryKeyEnum {
  Currencies = "Currencies",
  PriceChanges = "PriceChanges",
}

/** Currencies Types */

export type SupportedCurrenciesResType = {
  code: string;
  message: string;
  payload: SupportedCurrenciesPayloadType[];
};

export type SupportedCurrenciesPayloadType = {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: WalletType[];
};

export type WalletType = {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
};

/** End of Currencies Types */

/** Price Changes Types */

export type PriceChangesResType = {
  code: string;
  message: string;
  payload: PriceChangePayloadType[];
};

export type PriceChangePayloadType = {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

/** End of Price Changes Types */

export type CurrenciesPriceType = SupportedCurrenciesPayloadType &
  Partial<PriceChangePayloadType>;
