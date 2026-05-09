import React from 'react'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout