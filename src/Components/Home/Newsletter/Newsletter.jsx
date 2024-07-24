import React from 'react'

import './Newsletter.scss'
import { TbMail } from "react-icons/tb";
import Logo_hp from '../../../assests/Logo_hp.png'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-left">
                <div className="newsletter-left-top">
                    <img src={Logo_hp} alt="" />
                    <p><span>HAPPY</span><span>JOURNEY</span></p>
                </div>


                <div className='newsletter-left-description'>

                    <p> We plans trip for you!!</p>
                </div>
            </div>
            <div className="newsletter-right">
                <div className='newsletter-right-description'>
                    <p>Subscribe to our newsletter for company updates.</p>
                </div>
                <form className='newletter-form' >
                    <label for="name">Enter your name</label>
                    <input type="text" id="name" />
                    <label for="email">Enter your email</label>
                    <input type="email" id="email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>





        </div>
    )
}

export default Newsletter
