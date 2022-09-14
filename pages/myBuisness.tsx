import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyBuisness = () => {
  return (
    <>
      <Head>
        <title>MyBuisness</title>
        <meta name="keywords" content="MyBuisness" />
      </Head>
      <h1 className={styles.title}>MyBuisness</h1>
    </>
  );
};

export default MyBuisness;
