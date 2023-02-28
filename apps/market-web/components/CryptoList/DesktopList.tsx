import { ArrowDown, ArrowUp } from "../../assets/icons";
import { Table, HeadCell, BodyCell } from "../Common/Table";
import Typography from "../Common/Typography";

const DesktopList = () => {
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
        <tr>
          <BodyCell>
            <div className="flex items-center gap-4">
              <div className="text-2xl text-orange-500">LOGO</div>
              <div className="flex justify-between w-full">
                <Typography className="font-semibold">Bitcoin BTC</Typography>
                <Typography className="mx-6 text-gray">BTC</Typography>
              </div>
            </div>
          </BodyCell>
          <BodyCell className="font-semibold">
            <Typography className="flex font-semibold">Rp. 100.000</Typography>
          </BodyCell>
          <BodyCell>
            <div className="flex items-center justify-center gap-1">
              <div className="animate-bounce">
                <ArrowUp />
              </div>
              <Typography className="font-semibold text-success">
                1.10%
              </Typography>
            </div>
          </BodyCell>
          <BodyCell>
            <div className="flex items-center justify-center gap-1">
              <div className="animate-bounce">
                <ArrowDown />
              </div>
              <Typography className="flex font-semibold text-error">
                1.10%
              </Typography>
            </div>
          </BodyCell>
          <BodyCell>
            <div className="flex items-center justify-center gap-1">
              <div className="animate-bounce">
                <ArrowDown />
              </div>
              <Typography className="flex font-semibold text-error">
                1.10%
              </Typography>
            </div>
          </BodyCell>
          <BodyCell>
            <div className="flex items-center justify-center gap-1">
              <div className="animate-bounce">
                <ArrowDown />
              </div>
              <Typography className="flex font-semibold text-error">
                1.10%
              </Typography>
            </div>
          </BodyCell>
        </tr>
      </tbody>
    </Table>
  );
};

export default DesktopList;
