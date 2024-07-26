import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Packages from './Components/Packages/Packages.jsx'
import SinglePackageDetails from './Components/Packages/SinglePackageDetails/SinglePackageDetails.js'

import Login from './Components/Login&Signup/Login/Login.jsx'
import Signup from './Components/Login&Signup/Signup/Signup.jsx'
const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singlePackage/:url' element={<SinglePackageDetails />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
          <Footer />
        </Router>

      </div>
    </>
  )
}

export default App
