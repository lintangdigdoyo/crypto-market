import { memo } from "react";

import Typography from "../../Common/Typography";
import Logo from "./Logo";

interface CryptoNameProps {
  name: string;
  symbol: string;
  logoUrl: string;
  color: string;
}

const CryptoName = ({ name, logoUrl, symbol, color }: CryptoNameProps) => {
  return (
    <div className="flex items-center gap-6">
      <Logo logoUrl={logoUrl} color={color} />
      <div className="w-full sm:flex sm:justify-between">
        <Typography className="font-semibold">{name}</Typography>
        <Typography className=" text-gray sm:mx-6">{symbol}</Typography>
      </div>
    </div>
  );
};

export default memo(CryptoName);
