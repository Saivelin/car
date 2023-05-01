import React from 'react';
import Footer from './Footer';
import Header from './Header/Header';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className='page'>
            <Head>
                <title>Car-tron</title>
                <link rel="icon" type="image/x-icon" href="/logo.ico" />
            </Head>
            <Header />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>{children}</motion.div>
            <Footer />
        </div>
    );
};

export default Layout;