import classNames from "classnames";

import { ArrowUp, ArrowDown } from "../../../assets/icons";
import Typography from "../../Common/Typography";

interface PercentageProps {
  value: string;
}

const Percentage = ({ value }: PercentageProps) => {
  const isNegative = value.includes("-");

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="animate-bounce-slow">
        {isNegative ? <ArrowDown /> : <ArrowUp />}
      </div>
      <Typography
        className={classNames("font-semibold", {
          ["text-success"]: !isNegative,
          ["text-error"]: isNegative,
        })}
      >
        {value}%
      </Typography>
    </div>
  );
};

export default Percentage;
