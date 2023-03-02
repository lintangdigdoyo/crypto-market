import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Crypto Market</title>
        <meta name="description" content="Harga Crypto dalam Rupiah Hari Ini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto my-6 max-w-7xl">{children}</main>
    </>
  );
};

export default Layout;
