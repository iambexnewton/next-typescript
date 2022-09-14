import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyQuote= () => {
  return (
    <>
      <Head>
        <title>MyQuote</title>
        <meta name="keywords" content="MyQuote" />
      </Head>
      <h1 className={styles.title}>MyQuote</h1>
    </>
  );
};

export default MyQuote;
