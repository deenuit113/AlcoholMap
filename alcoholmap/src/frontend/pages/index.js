import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <main className={styles.main}>
          <p>pages/index.js</p>
      </main>
    </>
  )
}