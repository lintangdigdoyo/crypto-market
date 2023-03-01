import { useState } from "react";

import {
  CurrenciesPriceType,
  getCurrenciesPrice,
} from "@crypto-market/services";

import {
  useGetPriceChanges,
  useGetSupportedCurrencies,
} from "../../services/hooks";
import { Table, HeadCell, BodyCell } from "../Common/Table";
import Percentage from "./components/Percentage";
import CryptoName from "./components/CryptoName";
import Price from "./components/Price";

const DesktopList = () => {
  const [currenciesPrice, setCurrenciesPrice] = useState<CurrenciesPriceType[]>(
    []
  );

  const { data: dataGetSupportedCurrencies } = useGetSupportedCurrencies({
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 65,
  });

  useGetPriceChanges({
    refetchInterval: 1000 * 2,
    onSuccess(data) {
      console.log(data);
      const result = getCurrenciesPrice(dataGetSupportedCurrencies, data);
      setCurrenciesPrice(result);
    },
  });

  return (
    <Table>
      <thead>
        <tr>
          <HeadCell className="pl-20 text-left">CRYPTO</HeadCell>
          <HeadCell className="text-left">HARGA</HeadCell>
          <HeadCell>24 JAM</HeadCell>
          <HeadCell>1 MGG</HeadCell>
          <HeadCell>1 BLN</HeadCell>
          <HeadCell>1 THN</HeadCell>
        </tr>
      </thead>
      <tbody>
        {currenciesPrice.map((currency, index) => (
          <tr key={index}>
            <BodyCell>
              <CryptoName
                name={currency.name}
                symbol={currency.currencySymbol}
                logoUrl={currency.logo}
                color={currency.color}
              />
            </BodyCell>
            <BodyCell>
              <Price value={currency.latestPrice} />
            </BodyCell>
            <BodyCell>
              <Percentage value={currency.day} />
            </BodyCell>
            <BodyCell>
              <Percentage value={currency.week} />
            </BodyCell>
            <BodyCell>
              <Percentage value={currency.month} />
            </BodyCell>
            <BodyCell>
              <Percentage value={currency.year} />
            </BodyCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DesktopList;
