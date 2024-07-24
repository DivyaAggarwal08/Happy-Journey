import React from 'react'

import './Packages.scss'
import { Link } from 'react-router-dom'
import PackagesFilter from './PackagesFilter/PackagesFilter'

import HomePackage from '../Home/HomePackages/HomePackage/HomePackage'

const Packages = () => {

    const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, est!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aliquid nemo incidunt alias, pariatur ipsa cumque nobis quae quod dicta!';

    return (
        <div className='packages'>
            <div className="packages-container">
                <div className="packages-container-filter">
                    <PackagesFilter />
                </div>
                <div className="packages-container-gridLayout-wrapper">

                    <div className="packages-container-gridLayout-counter">
                        <h4>6 out of 20</h4>
                    </div>
                    <div className="packages-container-gridLayout">
                        <div className="packages-container-gridLayout-items">
                            <div className="packages-container-gridLayout-item">
                                <Link to='/singlePackage/example'><HomePackage text={text} star={3.5} /></Link></div>
                            <div className="packages-container-gridLayout-item">
                                <Link to='/'><HomePackage text={text} star={3.5} /></Link></div>
                            <div className="packages-container-gridLayout-item">
                                <Link to='/'><HomePackage text={text} star={3.5} /></Link></div>
                        </div>
                        <div className="packages-container-gridLayout-items">
                            <div className="packages-container-gridLayout-item">
                                <Link to='/'><HomePackage text={text} star={3.5} /></Link></div>
                            <div className="packages-container-gridLayout-item">
                                <Link to='/'><HomePackage text={text} star={3.5} /></Link></div>
                            <div className="packages-container-gridLayout-item">
                                <Link to='/'><HomePackage text={text} star={3.5} /></Link></div>
                        </div>
                        <div className="packages-container-gridLayout-button">
                            <button disabled={true}>Previous</button>
                            <button >Next</button>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Packages
