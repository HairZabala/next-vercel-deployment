import Head from 'next/head'
import React, { FC } from 'react'

import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout: FC = ({children}) => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Home - Hair</title>
            <meta name="description" content="Primeros pasos next" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <main className={styles.main}>
            {children}
        </main>
        </div>
    )
}

export default MainLayout