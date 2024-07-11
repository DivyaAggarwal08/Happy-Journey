import React from 'react'

import "./Home.scss"

import Banner from './Banner/Banner.jsx'
import Navbar from '../Navbar/Navbar.jsx'

export default function Home() {
    return (
        <div className='homeSection'>
            {/* <Navbar /> */}
            <Banner />
        </div>
    )
}
