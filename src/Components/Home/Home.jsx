import React from 'react'

import "./Home.scss"

import Banner from './Banner/Banner.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import About from "./About/About"
import HomePackages from './HomePackages/HomePackages'
import Gallery from './Gallery/Gallery'

export default function Home() {
    return (
        <div className='homeSection'>
            {/* <Navbar /> */}
            <Banner />
            <About />
            <HomePackages />
            <Gallery />
        </div>
    )
}
