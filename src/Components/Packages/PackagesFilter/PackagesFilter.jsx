import React from 'react'

import './PackagesFilter.scss'

const PackagesFilter = () => {
    return (
        <div className='packages-filter'>
            <div className="packages-filter-price-filter">
                <label for='price'>Price Filter</label>
                <select >
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <div className="packages-filter-form-container">

                <h3>Plans According To You!!</h3>
                <form id='packages-filter-form'>
                    <div className="packages-filter-form-section">

                        <label for="from">From</label>
                        <input type="text" name='from' />
                    </div>
                    <div className="packages-filter-form-section">
                        <label for="to">To</label>
                        <input type="text" name='to' />
                    </div>
                    <div className="packages-filter-form-section">

                        <label for="start-date">Start Trip</label>
                        <input type="date" name='start-date' />
                    </div>
                    <div className="packages-filter-form-section">
                        <label for="end-date">End Trip :</label>
                        <input type="date" name='end-date' />
                    </div>
                    <div className="packages-filter-form-section">

                        <label for="travellers-quantity">Number of travellers :</label>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                    </div>
                    <div className="packages-filter-form-section">
                        <div className='mode-of-transport'>Mode of Transport :</div>
                        <label for="bus">Bus</label>
                        <input type="radio" name="mode-of-transport" id="" />
                        <label for="train">Train</label>
                        <input type="radio" name="mode-of-transport" id="" />
                        <label for="flight">Flight</label>
                        <input type="radio" name="mode-of-transport" id="" />
                    </div>
                    <div className="packages-filter-form-section range-filter">
                        <label for="Price">Price Range</label>
                        <div className="packages-filter-form-section-min-max">
                            <input type="range" name="" id="" min={0} max={9999} className='packages-filter-form-section-min' />
                            <input type="range" name="" id="" min={0} max={9999} className='packages-filter-form-section-max' />
                        </div>

                    </div>

                    <button>Search</button>


                </form>

            </div>
        </div>
    )
}

export default PackagesFilter
