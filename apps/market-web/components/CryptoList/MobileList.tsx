import { useState } from "react";

import { ArrowUp } from "../../assets/icons";
import Select from "../Common/Select";
import List from "../Common/List";
import Typography from "../Common/Typography";

const MobileList = () => {
  const [value, setValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <List>
        <Typography variant="caption" className="font-semibold">
          CRYPTO
        </Typography>
        <Select
          options={["24 JAM", "1 MGG", "1 BLN", "1 THN"]}
          value={value}
          onChange={handleChange}
        />
      </List>
      <List>
        <div className="flex items-center gap-4">
          <div className="text-2xl text-orange-500">LOGO</div>
          <div className="w-full">
            <Typography className="font-semibold">Bitcoin BTC</Typography>
            <Typography className="text-gray">BTC</Typography>
          </div>
        </div>
        <div>
          <Typography className="flex font-semibold">Rp. 100.000</Typography>
          <div className="flex items-center justify-end gap-1">
            <div className="animate-bounce">
              <ArrowUp />
            </div>
            <Typography className="font-semibold text-success">
              1.10%
            </Typography>
          </div>
        </div>
      </List>
    </>
  );
};

export default MobileList;
