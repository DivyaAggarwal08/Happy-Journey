import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/Home/About/About.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

const App = () => {
  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/packages' element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
