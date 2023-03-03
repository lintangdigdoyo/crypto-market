import classNames from "classnames";

import { ArrowUp, ArrowDown } from "../../../assets/icons";
import Typography from "../../Common/Typography";

const Percentage = ({ value = "0" }) => {
  const isNegative = value.includes("-");

  return (
    <div className="flex items-center justify-end gap-1 sm:justify-center">
      <div className="animate-bounce-slow">
        {isNegative ? <ArrowDown /> : <ArrowUp />}
      </div>
      <Typography
        className={classNames("font-semibold", {
          ["text-success"]: !isNegative,
          ["text-error"]: isNegative,
        })}
        data-testid="percentage"
      >
        {value}%
      </Typography>
    </div>
  );
};

export default Percentage;
