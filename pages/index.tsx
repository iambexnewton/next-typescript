
import Head from 'next/head'
import Footer from '../components/Footer'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      
      </Head>
<Navbar />
      <main className={styles.main}>
      <h1 className={styles.title}>Home page</h1>

<div>
  <p className={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </p>


  <Link href="/listing">
    <a className={styles.btn}>See Listing</a>
  </Link>
</div>
      </main>
<Footer />
    </div>
  )
}

export default Home
