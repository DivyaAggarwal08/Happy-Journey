import React from 'react'
import './Gallery.scss'

import image1 from '../../../assests/image1.avif';
import image2 from '../../../assests/image2.avif';
import image3 from '../../../assests/image3.webp';
import image4 from '../../../assests/image4.avif';

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GoDot, GoDotFill } from "react-icons/go";

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='gallery-image-container'>
                <SlArrowLeft />
                <image >
                    <img src={image1} alt="" />
                </image>
                <SlArrowRight />
            </div>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nulla, provident corrupti nemo illo sapiente debitis ipsum sit pariatur ipsam possimus fugiat id nesciunt quo laborum reprehenderit, quod perspiciatis voluptates in nobis doloremque? Dolore.</p>
            <div className="gallery-image-shift-icons">
                <GoDotFill />
                <GoDot />
                <GoDot />
                <GoDot />
            </div>
        </div>
    )
}

export default Gallery
