import { memo } from "react";
import classNames from "classnames";

import { useGetPreviousValue } from "@crypto-market/utils";

import Typography from "../../Common/Typography";

const Price = ({ value = "" }) => {
  const prevValue = useGetPreviousValue(value) ?? "";

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <Typography
      key={value}
      className={classNames("font-semibold", {
        ["animate-pulse-red"]: parseInt(value) < parseInt(prevValue),
        ["animate-pulse-green"]: parseInt(value) > parseInt(prevValue),
      })}
    >
      {currencyFormatter.format(parseInt(value))}
    </Typography>
  );
};

export default memo(Price);
