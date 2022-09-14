import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyProducts = () => {
  return (
    <>
      <Head>
        <title>MyProducts</title>
        <meta name="keywords" content="MyProducts" />
      </Head>
      <h1 className={styles.title}>MyProducts</h1>
    </>
  );
};

export default MyProducts;
