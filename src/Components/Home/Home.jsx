import React from 'react'

import "./Home.scss"

import Banner from './Banner/Banner.jsx'
import About from "./About/About"
import HomePackages from './HomePackages/HomePackages'
import Gallery from './Gallery/Gallery'
import Newsletter from './Newsletter/Newsletter'
import HomeInstantBooking from './HomeInstantBooking/HomeInstantBooking'

export default function Home() {
    return (
        <div className='homeSection'>
            <Banner />
            <HomeInstantBooking />
            <About />
            <HomePackages />
            <Gallery />
            <Newsletter />
        </div>
    )
}
