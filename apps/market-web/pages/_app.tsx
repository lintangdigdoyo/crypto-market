import { AppProps } from "next/app";
import {
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/styles.css";

import queryClient from "../services/queryClient";
import Layout from "../components/Layout";

function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
