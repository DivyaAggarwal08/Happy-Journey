import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-left">
                    <h2>Contact with us</h2>
                    <div className="footer-item">
                        <div className="footer-icon">
                            <IoMail />
                        </div>
                        <div className="footer-item-about">
                            <p>xyz@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-icon">
                            < FaGithub />
                        </div>
                        <div className="footer-item-about">
                            <p>github</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-icon">
                            <FaLinkedin />
                        </div>
                        <div className="footer-item-about">
                            <p>linkedin</p>
                        </div>
                    </div>
                </div>
                <ul className="footer-center">
                    <li className='footer-home'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='footer-package'>
                        <Link to="/packages">Packages</Link>
                    </li>
                </ul>
                <div className="footer-right">
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/signup" className="signup">Sign up</Link>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>@ Divya Aggarwal. All rights reserved</p>
                <div className='footer-bottom-right'>
                    <a href='#'>Terms of Services</a>
                    <a href='#'>Privacy Policy</a>

                </div>
            </div>
        </div>
    )
}

export default Footer