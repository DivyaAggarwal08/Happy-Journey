import React from 'react'
import "./About.scss"

import banner_img from '../../../assests/banner_img.avif'

export default function About() {
    return (
        <div className='about'>
            <picture>
                <img src={banner_img} alt="" />
            </picture>
            <div className='about-description'>
                <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et accusantium quibusdam, est adipisci dolorem provident architecto. Harum saepe expedita fugit quo ipsa nam eligendi nulla quis eaque illum labore, consequuntur sunt iure dolor vel accusamus repudiandae dignissimos quos atque exercitationem tempora omnis sit. Dicta reprehenderit voluptas in voluptatibus quis.</p>
                <div className='about-buttons'>
                    <button>Packages</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
