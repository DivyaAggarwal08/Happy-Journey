import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";

import './Login.scss'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-box">
                <form>
                    <div className="login-form-section"><h3>WELCOME BACK!</h3></div>
                    <div className="login-form-section">
                        <span><FaRegUser /></span><input type="text" name="username" id="username" placeholder='Enter your email' />
                    </div>
                    <div className="login-form-section">
                        <span><TbPasswordUser /></span><input type="password" name="pwd" id="pwd" placeholder='Enter your password' />
                    </div>

                    <div className="login-form-section login-form-error-message">* Invalid Password or Email Id </div>
                    <div className="login-form-section login-form-section-button">
                        <div className="login-form-section-terms-condition">

                            <input type='checkbox' required name='terms-condition'></input>
                            <label for='terms-condition'>Terms and conditions</label>
                        </div>

                        <button>Login</button>
                        <p>New user?<span>
                            Signup
                        </span> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login

