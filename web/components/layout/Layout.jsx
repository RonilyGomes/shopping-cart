import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import ShoppingCart from '../ShoppingCart';
import styles from './Layout.module.css'
import Logo from '../Logo';
import Footer from '../footer/Footer';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge</title>
        <meta name="description" content="Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <Link href={'/'}>
            <Logo src={'/logo.png'} width={120} height={22} />
          </Link>

          <a href={'/cart'}>
            <ShoppingCart />
          </a>
        </div>
      </header>

      <main className={styles.main}>{ children }</main>

      <Footer />
    </div>
  )
}
