import { useState } from "react";

import { CurrenciesPriceType } from "@crypto-market/services";

import { PriceTimeType } from "./types";
import { TIME_OPTIONS } from "./constants";
import Select from "../Common/Select";
import List from "../Common/List";
import Typography from "../Common/Typography";
import CryptoName from "./components/CryptoName";
import Price from "./components/Price";
import Percentage from "./components/Percentage";

interface MobileListProps {
  currenciesPrice: CurrenciesPriceType[];
}

const MobileList = ({ currenciesPrice }: MobileListProps) => {
  const [timeValue, setTimeValue] = useState<PriceTimeType>("day");

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTimeValue(e.target.value as PriceTimeType);
  };

  return (
    <>
      <List>
        <Typography variant="caption" className="font-semibold">
          CRYPTO
        </Typography>
        <Select
          options={TIME_OPTIONS}
          value={timeValue}
          onChange={handleChange}
        />
      </List>
      {currenciesPrice.map((currency, index) => (
        <List key={index}>
          <CryptoName
            name={currency.name}
            symbol={currency.currencySymbol}
            logoUrl={currency.logo}
            color={currency.color}
          />
          <div>
            <Price value={currency.latestPrice} />
            <Percentage value={currency[timeValue]} />
          </div>
        </List>
      ))}
    </>
  );
};

export default MobileList;
