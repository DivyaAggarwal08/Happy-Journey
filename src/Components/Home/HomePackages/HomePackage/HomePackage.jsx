import React from 'react'
import './HomePackage.scss'

import package1 from '../../../../assests/package1.avif'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const HomePackage = ({ text, star }) => {

    if (text.length > 100) {
        text = text.slice(0, 100);
        text += "..."
    }
    console.log(star)
    const totalStars = 5;
    const filledStars = Math.floor(star);
    const halfStar = star % 1 >= 0.5;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);


    return (
        <div className='home-package'>

            <image>
                <img src={package1} alt="" />
            </image>
            <div className='home-package-description'>
                {text}
            </div>
            <div className='home-package-star'>
                {[...Array(filledStars)].map((_, i) => (
                    <span key={i}><IoMdStar /></span>
                ))}
                {halfStar >= 0.5 ? <IoMdStarHalf /> : ""}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={i}><IoMdStarOutline /></span>
                ))}
            </div>
        </div>
    )
}

export default HomePackage
