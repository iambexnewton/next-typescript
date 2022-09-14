import type { NextPage } from 'next'
import Head from "next/head";
import styles from '../styles/Home.module.css'

const Error: NextPage = () => {
  return (
    <>
     <Head>
        <title>Ooops</title>
        <meta name="keywords" content="error" />
      </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
        <h1>Oooops</h1>
      That page can not be found
        </h1>
      </main>
    </div></>
  )
}

export default Error
