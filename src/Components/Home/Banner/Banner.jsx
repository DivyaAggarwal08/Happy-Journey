import React from 'react'

import './Banner.scss'

import banner_img from '../../../assests/banner_img.avif'
import nav_banner from '../../../assests/nav_banner.avif'


const Banner = () => {
    return (
        <div className='banner'>
            <image>
                <img src={nav_banner} alt="" />


                <div className="description">
                    Welcome To Happy Journey!
                    <p className='description_text'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed facilis quas, ducimus odit sunt ipsam tempore officia natus iste? Enim illum in facere, blanditiis ut eaque iste. Quibusdam, similique accusantium!</p>
                </div>
            </image>
            {/*<div className='description_button'>
                <button>Packages</button>
                <button>Login</button>
            </div>*/}
        </div >
    )
}

export default Banner
