import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import {
  QueryKeyEnum,
  getSupportedCurrencies,
  getPriceChanges,
} from "@crypto-market/services";

import Typography from "../components/Common/Typography";
import CryptoList from "../components/CryptoList";
import { MOBILE_USER_AGENT } from "../utils/constans";

interface HomeProps {
  isMobile: boolean;
}

const Home = ({ isMobile }: HomeProps) => {
  return (
    <>
      <Typography
        type="h1"
        variant="heading2"
        className="pl-4 sm:typography-heading1 sm:pl-0"
      >
        Harga Crypto dalam Rupiah Hari Ini
      </Typography>
      <div className="my-10">
        <CryptoList isMobile={isMobile} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = Boolean(UA?.match(MOBILE_USER_AGENT));

  const queryClient = new QueryClient();
  const apiTarget = process.env.API_TARGET_URL + "/v2";

  await queryClient.prefetchQuery([QueryKeyEnum.Currencies], () =>
    getSupportedCurrencies(apiTarget)
  );
  await queryClient.prefetchQuery([QueryKeyEnum.PriceChanges], () =>
    getPriceChanges(apiTarget)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isMobile,
    },
  };
};

export default Home;
