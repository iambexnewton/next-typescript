import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>MyAccount</title>
        <meta name="keywords" content="MyAccount" />
      </Head>
      <h1 className={styles.title}>MyAccount</h1>
    </>
  );
};

export default MyAccount;
