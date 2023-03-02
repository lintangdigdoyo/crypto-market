import { formatCurrency } from "@crypto-market/utils";

import Typography from "../Common/Typography";

interface PriceProps {
  value: string;
}

const Price = ({ value }: PriceProps) => {
  return <Typography variant="title">{formatCurrency(value)}</Typography>;
};

export default Price;
