import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { QueryKeyEnum, getSupportedCurrencies } from "@crypto-market/services";

import Typography from "../components/Common/Typography";
import CryptoList from "../components/CryptoList";

export function Index() {
  return (
    <>
      <Typography type="h1" variant="heading2" className="pl-4">
        Harga Crypto dalam Rupiah Hari Ini
      </Typography>
      <div className="my-10">
        <CryptoList />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  const apiTarget = process.env.API_TARGET_URL + "/v2";

  await queryClient.prefetchQuery([QueryKeyEnum.Currencies], () =>
    getSupportedCurrencies(apiTarget)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
