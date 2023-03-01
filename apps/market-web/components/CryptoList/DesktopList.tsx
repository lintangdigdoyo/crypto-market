import { CurrenciesPriceType } from "@crypto-market/services";

import { Table, HeadCell, BodyCell } from "../Common/Table";
import Percentage from "./components/Percentage";
import CryptoName from "./components/CryptoName";
import Price from "./components/Price";

interface DesktopListProps {
  currenciesPrice: CurrenciesPriceType[];
}

const DesktopList = ({ currenciesPrice }: DesktopListProps) => {
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
