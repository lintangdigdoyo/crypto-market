import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Crypto Market</title>
      </Head>
      <main className="max-w-7xl mx-auto my-2">{children}</main>
    </>
  );
};

export default Layout;
