import { memo } from "react";
import classNames from "classnames";

import { useGetPreviousValue } from "@crypto-market/utils";

import Typography from "../../Common/Typography";

interface PriceProps {
  value: string;
}

const Price = ({ value }: PriceProps) => {
  const prevValue = useGetPreviousValue(value);

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const isLessThanPrev = parseInt(value) < parseInt(prevValue);

  return (
    <Typography
      key={value}
      className={classNames("font-semibold", {
        ["animate-pulse-red"]: isLessThanPrev,
        ["animate-pulse-green"]: !isLessThanPrev,
      })}
    >
      {currencyFormatter.format(parseInt(value))}
    </Typography>
  );
};

export default memo(Price);
