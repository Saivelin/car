import React from 'react';
import Footer from './Footer';
import Header from './Header/Header';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div className='page'>
            <Head>
                <title>Car-tron</title>
                <link rel="icon" type="image/x-icon" href="/logo.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;