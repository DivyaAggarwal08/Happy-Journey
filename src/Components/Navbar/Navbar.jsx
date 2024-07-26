import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './Navbar.scss'

import Logo_hp from '../../assests/Logo_hp.png'

import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMic } from "react-icons/lu";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition()

    const [valueChange, setValueChange] = useState("");
    const [speakNowIconState, setSpeakNowIconState] = useState("")

    const handelChange = (e) => {
        setValueChange(e.target.value)
    }

    useEffect(() => {
        setValueChange(transcript)
        const speakNowId = document.getElementById("speakNowIcon")
        if (speakNowIconState === "active") {
            speakNowId.classList.add("speakNowIconActive")
        }
        setTimeout(() => {
            speakNowId.classList.remove("speakNowIconActive")
        }, 5000)

    }, [listening, speakNowIconState])

    const resetValueChange = () => {
        resetTranscript()
        setValueChange("")
    }

    if (!browserSupportsSpeechRecognition) {
        return (<>Browser doesn't support speech recognition</>)
    }

    return (<>
        <navbar>
            <div className="nav-left">
                <img src={Logo_hp} alt="" />
            </div>
            <ul className='nav-center'>
                <li className='nav-home'><Link to="/" > Home</Link></li>
                <li className='nav-about'><Link to="/about" >
                    About</Link></li>
                <li className='nav-package'><Link to="/packages">
                    Packages</Link></li>
                <li className='nav-search'>
                    <input type="text" value={valueChange} onChange={handelChange} />
                    <div className="speakNowIcon" id='speakNowIcon'></div>
                    <LuMic onClick={() => {
                        SpeechRecognition.startListening()
                        setSpeakNowIconState("active")
                    }} />
                    <IoClose onClick={resetValueChange} />
                    <FiSearch />
                </li>
            </ul>
            <div className="nav-right">
                <nav-auth>
                    <div className="login"><Link to='/login' >Login</Link></div>
                    <span>/</span>
                    <div className="signup"><Link to='/signup'>Sign up</Link></div>
                </nav-auth>

                <MdOutlineDarkMode />
            </div>
        </navbar >
    </>
    )
}

export default Navbar
