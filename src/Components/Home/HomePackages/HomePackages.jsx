import React from 'react'
import './HomePackages.scss'
import HomePackage from './HomePackage/HomePackage'
import { Link } from 'react-router-dom'



const HomePackages = () => {

    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iste dolores ipsam nulla facere odio expedita quas quod animi gggvygvybytcttvydb5trtbdyrdtryrfbbyyrtrcc";


    return (
        <>

            <div className='home-packages'>


                <div className="home-packages-items">


                    <Link to="/singlePackage/example" target='_blank'><HomePackage text={text} star={3.5} /></Link>
                    <Link to="/singlePackage/"><HomePackage text={text} star={4} /></Link>
                    <Link to="/singlePackage/"><HomePackage text={text} star={5} /></Link>
                </div>

            </div>
        </>
    )
}

export default HomePackages
