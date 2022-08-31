import React from 'react'
import Header from './Header/Index'
import Footer from './Footer/Index'

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout