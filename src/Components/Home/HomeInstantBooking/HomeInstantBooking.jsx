import React from 'react'
import './HomeInstantBooking.scss'

import { MdTravelExplore } from "react-icons/md";

const HomeInstantBooking = () => {
    return (
        <div className='home-instant-booking'>
            <div className='home-instant-booking-title'>
                <h3>Book your Trip <MdTravelExplore /></h3>

            </div>

            <form className='home-instant-booking-details'>
                <div className="home-instant-booking-details-section">
                    <div className="home-instant-booking-details-section-subsection">


                        <label for='source'>From:</label>
                        <input type='text' name='source' placeholder='Source' required></input>
                    </div>
                    <div className="home-instant-booking-details-section-subsection">
                        <label for='destination'>To:</label>
                        <input type='text' name='destination' placeholder='destination' required></input>
                    </div>
                </div>
                <div className="home-instant-booking-details-section">
                    <div className="home-instant-booking-details-section-subsection">
                        <label for='start-date'>Departure:</label>
                        <input type='date' name='start-date' required></input></div>
                    <div className="home-instant-booking-details-section-subsection">
                        <label for='end-date'>Return:</label>
                        <input type='date' name='end-date' required></input>
                    </div>
                </div>
                <div className="home-instant-booking-details-section">
                    <div className="home-instant-booking-details-subsection">
                        <label for='travellers'>Number of Travellers:</label>
                        <select>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>
                        <div className="home-instant-booking-details-subsection-persons-quantity">
                            <label for='adult'>Adult:</label>
                            <select required>

                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <label for='children'>Children (Age under 2):</label>
                            <select required>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <label for='senior_citizen'>Senior Citizen:</label>
                            <select required>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="home-instant-booking-details-section">
                    <div className="home-instant-booking-details-section-subsection">
                        <label for='budget'>Travelling Budget:</label>
                        <input type='text' name='budget' required placeholder="&#8377;" />

                    </div>
                    <div className="home-instant-booking-details-section-subsection">
                        <label for='budget'>Stay Budget:</label>
                        <input type='text' name='budget' required placeholder="&#8377;" />

                    </div>
                </div>

                <div className='home-instant-booking-search'>
                    <button type='search'>Search</button></div>
            </form>

        </div>
    )
}

export default HomeInstantBooking
