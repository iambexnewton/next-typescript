import Head from "next/head";
import styles from "../styles/MyBuisness.module.css";

const MyContacts = () => {
  return (
    <>
      <Head>
        <title>MyContacts</title>
        <meta name="keywords" content="MyContacts" />
      </Head>
      <h1 className={styles.title}>MyContacts</h1>
    </>
  );
};

export default MyContacts;
