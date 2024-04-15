import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>GreenBottle</title>
                <link rel="icon" href="/sojuicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
        
    );
}