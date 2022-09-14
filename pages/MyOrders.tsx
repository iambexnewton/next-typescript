import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyOrders= () => {
  return (
    <>
      <Head>
        <title>MyOrders</title>
        <meta name="keywords" content="MyOrders" />
      </Head>
      <h1 className={styles.title}>MyOrders</h1>
    </>
  );
};

export default MyOrders;
