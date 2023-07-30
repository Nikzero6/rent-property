import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rent a Property</title>
        <meta name="description" content="Rent a property" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
