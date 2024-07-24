import React, { useState, useEffect } from 'react'
import './Gallery.scss'

import image1 from '../../../assests/image1.avif';
import image2 from '../../../assests/image2.avif';
import image3 from '../../../assests/image3.webp';
import image4 from '../../../assests/image4.avif';

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GoDot, GoDotFill } from "react-icons/go";

const Gallery = () => {

    const galleryTextArray = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores enim, cum officia ipsam tempora vero porro iure sed id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores enim, cum officia ipsam tempora vero porro iure sed id!Lorem ipsum dolor sit amet consectetur adipisicing elit. !", "Rahul", "Pushkar", "Shivaay"]
    const galleryIconsArray = [GoDot, GoDot, GoDot, GoDot];

    const imagesArr = [image1, image2, image3, image4];
    const [galleryImage, setGalleryImage] = useState(imagesArr[0]);
    const [galleryText, setGalleryText] = useState(galleryTextArray[0]);
    const [galleryImageIndex, setGalleryImageIndex] = useState(0);
    const [galleryIcon, setGalleryIcon] = useState(galleryIconsArray);

    console.log(galleryIcon)

    const goNext = () => {
        let newIndex = galleryImageIndex + 1;
        if (newIndex >= imagesArr.length) {
            newIndex = 0;
        }
        setGalleryImageIndex(newIndex);
        setGalleryImage(imagesArr[newIndex]);
        setGalleryText(galleryTextArray[newIndex]);
        galleryIconsArray[newIndex] = GoDotFill;
        setGalleryIcon(galleryIconsArray)
    }

    const goBack = () => {
        let newIndex = galleryImageIndex - 1;
        if (newIndex < 0) {
            newIndex = imagesArr.length - 1;
        }
        setGalleryImageIndex(newIndex);
        setGalleryImage(imagesArr[newIndex]);
        setGalleryText(galleryTextArray[newIndex]);
        galleryIconsArray[newIndex] = GoDotFill;
        setGalleryIcon(galleryIconsArray)
    }

    useEffect(() => {
        const interval = setInterval(goNext, 5000);
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [galleryImageIndex]);

    return (
        <div className='gallery'>
            <div className='gallery-image-container'>
                <SlArrowLeft onClick={() => { goBack() }} />
                <image >
                    <img src={galleryImage} alt="" />
                </image>
                <SlArrowRight onClick={() => { goNext() }} />
            </div>

            <p >{galleryText}</p>
            <div className="gallery-image-shift-icons">
                {galleryIcon.map((DotIcon, i) => (
                    <span key={i}>{<DotIcon />}</span>
                ))}
            </div>
        </div>
    )
}

export default Gallery
