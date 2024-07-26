import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

import './Signup.scss'

const Signup = () => {
    return (
        <div className='signup-conatainer'>
            <div className='signup-box'>
                <form>
                    <div className="signup-form-section"><h3>WELCOME!</h3></div>
                    <div className="signup-form-section">
                        <FaRegUser />
                        <input type='text' name='name' placeholder='Enter your name' required />
                    </div>
                    <div className="signup-form-section">
                        <MdOutlinePhone />
                        <input type='text' name='number' placeholder='Enter your number' required />
                    </div>

                    <div className="signup-form-section">
                        <MdOutlineMailOutline />
                        <span></span><input type="text" name="username" id="username" placeholder='Enter your email' required />
                    </div>
                    <div className="signup-form-section">
                        <span><TbPasswordUser /></span><input type="password" name="pwd" id="pwd" placeholder='Enter your password' required />
                    </div>
                    <div className="signup-form-section signup-form-section-button">
                        <div className="signup-form-section-terms-condition">

                            <input type='checkbox' required name='terms-condition'></input>
                            <label for='terms-condition'>Terms and conditions</label>
                        </div>

                        <button>Signup</button>
                        <p>Already registered?<span>
                            login
                        </span> </p>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default Signup
