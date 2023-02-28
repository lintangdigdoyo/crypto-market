import Head from "next/head";

export function Index() {
  return (
    <>
      <Head>
        <title>Welcome to market-web!</title>
      </Head>
      <div>
        <h1 className="text-2xl">
          <span className="text-red-700">Hello World, </span>
          Welcome market-web 👋
        </h1>
      </div>
    </>
  );
}

export default Index;
