import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyStores = () => {
  return (
    <>
      <Head>
        <title> MyStores</title>
        <meta name="keywords" content=" MyStores" />
      </Head>
      <h1 className={styles.title} >MyStores</h1>
    </>
  );
};

export default MyStores;
