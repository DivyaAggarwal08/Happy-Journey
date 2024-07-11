import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

import Logo_hp from '../../assests/Logo_hp.png'

import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";


const Navbar = () => {
    return (<>
        <navbar>
            <div className="nav-left">
                <img src={Logo_hp} alt="" />
            </div>
            <ul className='nav-center'>
                <li className='home'><Link to="/" > Home</Link></li>
                <li className='about'><Link to="/about" > About</Link></li>
                <li className='search'>
                    <input type="text" />
                    <FiSearch />
                </li>
            </ul>
            <div className="nav-right">
                <nav-auth>
                    <div className="login">Login</div>
                    <span>/</span>
                    <div className="signup">Sign up</div>
                </nav-auth>

                <MdOutlineDarkMode />
            </div>
        </navbar>
    </>
    )
}

export default Navbar
